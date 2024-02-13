import React from 'react';
import cn from 'classnames';
import createComponent, { Component, sstyled, Root } from '@semcore/core';
import Dropdown from '@semcore/dropdown';
import { Flex, useBox } from '@semcore/flex-box';
import ScrollAreaComponent from '@semcore/scroll-area';
import uniqueIDEnhancement from '@semcore/utils/lib/uniqueID';
import i18nEnhance from '@semcore/utils/lib/enhances/i18nEnhance';
import { localizedMessages } from './translations/__intergalactic-dynamic-locales';
import { hasFocusableIn } from '@semcore/utils/lib/use/useFocusLock';
import logger from '@semcore/utils/lib/logger';

import scrollStyles from './styleScrollArea';
import style from './style/dropdown-menu.shadow.css';
import { getFocusableIn } from '@semcore/utils/src/focus-lock/getFocusableIn';

const KEYS = ['ArrowDown', 'ArrowUp', 'Enter', ' '];
const INTERACTION_TAGS = ['INPUT', 'TEXTAREA', 'BUTTON'];

class DropdownMenuRoot extends Component {
  static displayName = 'DropdownMenu';
  static style = style;
  static enhance = [uniqueIDEnhancement(), i18nEnhance(localizedMessages)];

  static defaultProps = {
    size: 'm',
    defaultVisible: false,
    defaultHighlightedIndex: null,
    i18n: localizedMessages,
    locale: 'en',
    interaction: 'click',
  };

  popperRef = React.createRef();

  itemProps = [];

  highlightedItemRef = React.createRef();

  prevHighlightedIndex = null;

  uncontrolledProps() {
    return {
      highlightedIndex: null,
      visible: null,
    };
  }

  bindHandlerKeyDown = (place) => (e) => {
    const amount = e.shiftKey ? 5 : 1;
    const targetTagName = e.target.tagName;

    if (e.key === ' ' && INTERACTION_TAGS.includes(targetTagName)) return;
    if (e.key === 'Enter') {
      if (targetTagName === 'TEXTAREA') return;
      if (place === 'popper' && (targetTagName === 'BUTTON' || targetTagName === 'A')) return;
    }

    const { visible, highlightedIndex } = this.asProps;
    const popperElement = this.popperRef.current;

    if (place === 'popper' && visible && hasFocusableIn(popperElement) && e.key === 'Tab') {
      const focusableInHighlighted = this.highlightedItemRef.current
        ? getFocusableIn(this.highlightedItemRef.current)
        : [];
      const firstIndex = highlightedIndex === null ? 0 : 1;

      this.handlers.highlightedIndex(null);

      // highlighted item has focusable items or keypress Tab on last focusable item in DDItem
      if (
        focusableInHighlighted.length > firstIndex &&
        (highlightedIndex !== null ||
          (document.activeElement === focusableInHighlighted[focusableInHighlighted.length - 1] &&
            !e.shiftKey) ||
          (document.activeElement === focusableInHighlighted[firstIndex] && e.shiftKey))
      ) {
        e.preventDefault();

        const index =
          document.activeElement === focusableInHighlighted[firstIndex]
            ? focusableInHighlighted.length - 1
            : firstIndex;

        focusableInHighlighted[index]?.focus();
      }

      return;
    }

    if (!KEYS.includes(e.key)) return;

    e.preventDefault();

    this.handlers.visible(true);

    switch (e.key) {
      case 'ArrowDown': {
        visible && this.moveHighlightedIndex(amount, e);
        (targetTagName === 'BUTTON' || targetTagName === 'A') && popperElement?.focus();
        break;
      }
      case 'ArrowUp': {
        visible && this.moveHighlightedIndex(-amount, e);
        (targetTagName === 'BUTTON' || targetTagName === 'A') && popperElement?.focus();
        break;
      }
      case ' ':
      case 'Enter':
        if (this.highlightedItemRef.current) {
          this.highlightedItemRef.current.click();
        } else {
          if (place === 'trigger') this.handlers.visible(false);
        }
        break;
    }
  };

  getTriggerProps() {
    const { size, uid, disablePortal, visible, getI18nText } = this.asProps;

    return {
      size,
      id: `igc-${uid}-trigger`,
      focusHint: visible && !disablePortal ? getI18nText('triggerHint') : undefined,
      'aria-expanded': visible ? 'true' : 'false',
      onKeyDown: this.bindHandlerKeyDown('trigger'),
    };
  }

  getListProps() {
    const { size, uid } = this.asProps;
    return {
      size,
      uid,
      index: this.asProps.highlightedIndex,
    };
  }

  getPopperProps() {
    const { uid, disablePortal, ignorePortalsStacking, interaction, highlightedIndex } =
      this.asProps;

    return {
      ref: this.popperRef,
      tabIndex: 0,
      onKeyDown: this.bindHandlerKeyDown('popper'),
      id: `igc-${uid}-popper`,
      disablePortal,
      ignorePortalsStacking,
      focusMaster: interaction === 'click',
      hideFocus: highlightedIndex !== null,
    };
  }

  getItemProps(props, index) {
    const { size, highlightedIndex, uid } = this.asProps;
    const highlighted = index === highlightedIndex;
    const extraProps = {};
    this.itemProps[index] = props;
    if (highlighted) {
      extraProps.ref = this.scrollToNode;
    }

    return {
      id: `igc-${uid}-option-${index}`,
      size,
      highlighted,
      ...extraProps,
    };
  }

  getItemHintProps() {
    const { size } = this.asProps;
    return {
      size,
    };
  }

  getItemTitleProps() {
    const { size } = this.asProps;
    return {
      size,
    };
  }

  scrollToNode = (node) => {
    setTimeout(() => {
      if (node) {
        this.highlightedItemRef.current = node;
        node.focus();
      }

      if (node?.scrollIntoView) {
        if (this.asProps.highlightedIndex !== this.prevHighlightedIndex) {
          this.prevHighlightedIndex = this.asProps.highlightedIndex;
          node.scrollIntoView({
            block: 'nearest',
            inline: 'nearest',
          });
        }
      }
    }, 0);
  };

  moveHighlightedIndex(amount, e) {
    let { highlightedIndex } = this.asProps;
    const itemsLastIndex = this.itemProps.length - 1;
    const selectedIndex = this.itemProps.findIndex((item) => item.selected);

    if (itemsLastIndex < 0) return;

    if (highlightedIndex == null) {
      if (selectedIndex !== -1) {
        highlightedIndex = selectedIndex;
      } else if (this.highlightedItemRef.current) {
        highlightedIndex = this.prevHighlightedIndex;
      } else {
        highlightedIndex = amount < 0 ? 0 : itemsLastIndex;
      }
    }

    let newIndex = highlightedIndex + amount;
    if (newIndex < 0) {
      newIndex = amount + itemsLastIndex + 1;
    } else if (newIndex > itemsLastIndex) {
      newIndex = newIndex - itemsLastIndex - 1;
    }

    if (this.itemProps[newIndex]?.disabled) {
      this.moveHighlightedIndex(amount < 0 ? amount - 1 : amount + 1, e);
    } else {
      this.handlers.highlightedIndex(newIndex, e);
    }
  }

  componentDidUpdate() {
    const { visible } = this.asProps;

    if (!visible) {
      this.handlers.highlightedIndex(null);
    }
  }

  render() {
    const { Children, interaction, 'data-ui-name': dataUiName } = this.asProps;
    const props = {};

    logger.warn(
      interaction !== 'click' && interaction !== 'focus',
      "You shouldn't use prop `interaction` except with `click` or `focus` value.",
      dataUiName || DropdownMenuRoot.displayName,
    );

    this.itemProps = [];

    return (
      <Root render={Dropdown} {...props}>
        <Children />
      </Root>
    );
  }
}

function List(props) {
  const SDropdownMenuList = Root;
  const { uid } = props;

  return sstyled(props.styles)(
    <SDropdownMenuList
      render={ScrollAreaComponent}
      tabIndex={null}
      role='menu'
      aria-labelledby={`igc-${uid}-trigger`}
      shadow={true}
      styles={scrollStyles}
    />,
  );
}

function Menu(props) {
  const {
    visible,
    disablePortal,
    ignorePortalsStacking,
    disableEnforceFocus,
    interaction,
    autoFocus,
    animationsDisabled,
  } = props;
  const popperProps = {
    visible,
    disablePortal,
    ignorePortalsStacking,
    disableEnforceFocus,
    interaction,
    autoFocus,
    animationsDisabled,
  };
  return (
    <DropdownMenu.Popper {...popperProps}>
      <Root render={DropdownMenu.List} />
    </DropdownMenu.Popper>
  );
}

function Item(props) {
  const SDropdownMenuItem = Root;
  const highlighted = !props.disabled && props.highlighted;
  return sstyled(props.styles)(
    <SDropdownMenuItem
      render={Flex}
      role='menuitem'
      tabIndex={highlighted ? 0 : -1}
      id={props.label}
    />,
  );
}

function Addon(props) {
  const [SDropdownMenuItemAddon, { className, ...other }] = useBox(props, props.forwardRef);
  const styles = sstyled(props.styles);
  return (
    <SDropdownMenuItemAddon
      className={cn(styles.cn('SDropdownMenuItemAddon', props).className, className) || undefined}
      {...other}
    />
  );
}

function Hint(props) {
  const SDropdownMenuItem = Root;
  return sstyled(props.styles)(<SDropdownMenuItem render={Flex} variant='hint' />);
}

function Title(props) {
  const SDropdownMenuItem = Root;
  return sstyled(props.styles)(<SDropdownMenuItem render={Flex} variant='title' />);
}

function Trigger() {
  return <Root render={Dropdown.Trigger} aria-haspopup='true' />;
}

const DropdownMenu = createComponent(
  DropdownMenuRoot,
  {
    Trigger,
    Popper: Dropdown.Popper,
    List,
    Menu,
    Item: [Item, { Addon }],
    ItemTitle: Title,
    ItemHint: Hint,
  },
  {
    parent: [Dropdown],
  },
);

export default DropdownMenu;

import React from 'react';
import createComponent, { Component, Root } from '@semcore/core';
import Select from '@semcore/select';
import { AddFilterPatternSelectProps } from '../AddFilterPattern.types';
import { FilterTrigger, FilterTriggerProps } from '@semcore/ui/base-trigger';

class AddFilterPatternSelectRoot extends Component<AddFilterPatternSelectProps> {
  static displayName = 'AddFilterPatternSelect';
  menuRef = React.createRef<HTMLDivElement>();

  static defaultProps = (props: AddFilterPatternSelectProps) => {
    return {
      defaultVisible: !props.alwaysVisible,
    };
  };

  getSelectProps(props: AddFilterPatternSelectProps): AddFilterPatternSelectProps {
    const { onChange } = this.asProps;
    const rewiredOnChange: typeof onChange = (v, e) => {
      props.onChange?.(v, e);
      onChange?.(v, e);
    };

    return {
      ...props,
      onChange: rewiredOnChange,
    };
  }

  getTriggerProps(props: { onClear: () => void }) {
    const { value, onClear, alwaysVisible } = this.asProps;

    return {
      ...props,
      tag: FilterTrigger,
      onBlur: (e: React.FocusEvent<HTMLImageElement>) => {
        if (
          !value &&
          !this.menuRef.current
            ?.closest('[data-ui-name="DropdownMenu.Popper"]')
            ?.contains(e.relatedTarget)
        ) {
          setTimeout(onClear);
        }
      },
      onKeyDown: (e: React.KeyboardEvent<HTMLImageElement>) => {
        if (e.key === 'Escape') {
          onClear();
        }
      },
      empty: !value,
      onClear: () => {
        props.onClear?.();
        onClear();
      },
      autoFocus: !alwaysVisible,
    };
  }

  getMenuProps() {
    return {
      ref: this.menuRef,
    };
  }

  render() {
    return <Root render={Select} __excludeProps={['onChange']} />;
  }
}

const AddFilterPatternSelectItem = createComponent(AddFilterPatternSelectRoot, {
  Trigger: Select.Trigger,
  Menu: Select.Menu,
  Option: Select.Option,
});

export default AddFilterPatternSelectItem;

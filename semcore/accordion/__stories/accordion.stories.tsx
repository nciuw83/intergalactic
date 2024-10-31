import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Badge from '@semcore/badge';
import CheckM from '@semcore/icon/Check/m';
import Accordion from '@semcore/accordion';
import { Box } from '@semcore/flex-box';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    // layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// export const SimpleButton: Story = {
//   args: {
//     children: 'Accordion',
//     size: 'm',
//     onClick: fn(),
//     use: 'primary',
//   },
// };

export const BasicUsage: Story = {
  render: () => {
    const [value, onChange] = React.useState([0]);
    return (
      <>
        <Accordion value={value} onChange={(value) => onChange(value)}>
          {[...new Array(3)].map((_, index) => (
            <Accordion.Item value={index} key={index} disabled={index === 2}>
              <Accordion.Item.Toggle pb={2}>
                <Accordion.Item.ToggleButton>
                  <Accordion.Item.Chevron mr={2} />
                  Section {index + 1}
                </Accordion.Item.ToggleButton>
              </Accordion.Item.Toggle>
              <Accordion.Item.Collapse>
                <Box p='12px 24px 24px'>{`Hello Section ${index + 1}`}</Box>
              </Accordion.Item.Collapse>
            </Accordion.Item>
          ))}
        </Accordion>
      </>
    );
  },
};

export const OneSelectionOpening: Story = {
  render: () => {
    const [value, onChange] = React.useState(null); // or []
    return (
      <>
        <Accordion value={value} onChange={onChange}>
          {[...new Array(3)].map((_, index) => (
            <Accordion.Item value={index} key={index} disabled={index === 2}>
              <Accordion.Item.Toggle pb={2}>
                <Accordion.Item.ToggleButton tag={'h3'}>
                  <Accordion.Item.Chevron mr={2} />
                  Section {index + 1}
                </Accordion.Item.ToggleButton>
              </Accordion.Item.Toggle>
              <Accordion.Item.Collapse>
                <Box p='12px 24px 24px'>{`Hello Section ${index + 1}`}</Box>
              </Accordion.Item.Collapse>
            </Accordion.Item>
          ))}
        </Accordion>
      </>
    );
  },
};

export const PrimaryTheme: Story = {
  render: () => {
    const [value, onChange] = React.useState(null); // or []
    return (
      <>
        <Accordion use='primary'>
          {[...new Array(3)].map((_, index) => (
            <Accordion.Item value={index} key={index} disabled={index === 2}>
              <Accordion.Item.Toggle pb={2}>
                <Accordion.Item.ToggleButton>
                  <Accordion.Item.Chevron mr={2} />
                  Section {index + 1}
                </Accordion.Item.ToggleButton>
              </Accordion.Item.Toggle>
              <Accordion.Item.Collapse>
                <Box p='12px 24px 24px'>{`Hello Section ${index + 1}`}</Box>
              </Accordion.Item.Collapse>
            </Accordion.Item>
          ))}
        </Accordion>
      </>
    );
  },
};

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

export const CustomStylesForSelectedToggle: Story = {
  render: () => {
    const [value, onChange] = React.useState(null); // or []
    return (
      <>
        <style>
          {`
          /* In this example we are forced to use more specific css-selectors to override the default Vitepress styles */
          .vp-doc h3.styled-accordion-item {
            background-color: var(--intergalactic-bg-secondary-neutral);
            padding: var(--intergalactic-spacing-2x) var(--intergalactic-spacing-3x);
            color: var(--intergalactic-text-primary);
            margin-bottom: var(--intergalactic-spacing-05x);
          }
          .vp-doc h3.styled-accordion-item:first-of-type {
            border-radius: var(--intergalactic-control-rounded) var(--intergalactic-control-rounded) 0 0;
          }
          .vp-doc h3.styled-accordion-item:last-of-type {
            border-radius: 0 0 var(--intergalactic-control-rounded) var(--intergalactic-control-rounded);
          }
          .vp-doc h3.styled-accordion-item-selected {
            background-color: var(--intergalactic-bg-secondary-neutral-hover);
            color: #000;
          }
        `}
        </style>
        <Accordion>
          {[...new Array(3)].map((_, index) => (
            <Accordion.Item value={index} key={index}>
              {({ selected }) => (
                <>
                  <Accordion.Item.Toggle
                    className={cn(
                      'styled-accordion-item',
                      selected && 'styled-accordion-item-selected',
                    )}
                  >
                    <Accordion.Item.ToggleButton>
                      <Accordion.Item.Chevron mr={2} />
                      Section {index + 1}
                    </Accordion.Item.ToggleButton>
                  </Accordion.Item.Toggle>
                  <Accordion.Item.Collapse>
                    <Box p='12px 32px'>{`Hello Section ${index + 1}`}</Box>
                  </Accordion.Item.Collapse>
                </>
              )}
            </Accordion.Item>
          ))}
        </Accordion>
      </>
    );
  },
};

export const SEOFriendly: Story = {
  render: () => {
    const [value, onChange] = React.useState([0]);
    return (
      <>
        <Accordion value={value} onChange={(value) => onChange(value)}>
          {[...new Array(3)].map((_, index) => (
            <Accordion.Item value={index} key={index} disabled={index === 2}>
              <Accordion.Item.Toggle pb={2}>
                <Accordion.Item.ToggleButton>
                  <Accordion.Item.Chevron mr={2} />
                  Section {index + 1}
                </Accordion.Item.ToggleButton>
              </Accordion.Item.Toggle>
              <Accordion.Item.Collapse preserveNode>
                <Box p='12px 24px 24px'>{`Hello Section ${index + 1}`}</Box>
              </Accordion.Item.Collapse>
            </Accordion.Item>
          ))}
        </Accordion>
      </>
    );
  },
};

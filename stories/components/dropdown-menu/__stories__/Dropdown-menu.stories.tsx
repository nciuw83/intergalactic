import type { Meta, StoryObj } from '@storybook/react';

import DropdownMenu from '@semcore/dropdown-menu';

import BasicExample from './docs-examples/basic';
import DropdownMenuExample from './docs-examples/dropdown-menu';
import ItemActionsExample from './docs-examples/item_actions';
import ListItemTypesExample from './docs-examples/list_item_types';
import NestedExample from './docs-examples/nested';
import NestedWithFocusableExample from './docs-examples/nested_with_focusable';
import TheSecondMethodExample from './docs-examples/the_second_method';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/Dropdown Menu',
  component: DropdownMenu,
};
export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Basic: Story = {
  render: BasicExample,
};

export const DropdownMenuStory: Story = {
  render: DropdownMenuExample,
};

export const ItemActions: Story = {
  render: ItemActionsExample,
};

export const ListItemTypes: Story = {
  render: ListItemTypesExample,
};

export const Nested: Story = {
  render: NestedExample,
};

export const NestedWithFocusable: Story = {
  render: NestedWithFocusableExample,
};

export const TheSecondMethod: Story = {
  render: TheSecondMethodExample,
};

import React from 'react';
import DropdownMenu from '@semcore/dropdown-menu';
import Select from '@semcore/select';
import Input from '@semcore/input';
import MathPlusM from '@semcore/icon/MathPlus/m';
import { Hint } from '@semcore/ui/tooltip';
import { Flex } from '@semcore/flex-box';
import Button, { ButtonLink } from '@semcore/button';
import { FilterTrigger } from '@semcore/base-trigger';
import CloseM from '@semcore/icon/Close/m';
import SearchM from '@semcore/icon/Search/m';

type FilterSelectProps = {
  value: string;
  options: string[];
  onClear: () => void;
  onChange: (value: string) => void;
  name: string;
};

const FilterSelect = ({ value, onClear, onChange, options, name }: FilterSelectProps) => {
  const selectPopperRef = React.useRef<HTMLDivElement>();

  const isEscapeKeyDown = (e) => {
    return e.key === 'Escape';
  };

  return (
    <Select interaction={'focus'} value={value} onChange={onChange} placeholder={name}>
      <Select.Trigger
        autoFocus
        onKeyDown={(e) => {
          if (isEscapeKeyDown(e) && !value) {
            onClear();
          }
        }}
        onBlur={(e) => {
          if (!value && !selectPopperRef.current?.contains(e.relatedTarget)) {
            onClear();
          }
        }}
        tag={FilterTrigger}
        onClear={onClear}
      >
        {value}
      </Select.Trigger>
      <Select.Popper ref={selectPopperRef}>
        <Select.List>
          {options.map((option, idx) => (
            <Select.Option value={option} key={idx}>
              {option}
            </Select.Option>
          ))}
        </Select.List>
      </Select.Popper>
    </Select>
  );
};

type Filter = {
  id: string;
  name: string;
  values: string[];
};
type FilterData = Record<string, string>;

const Demo = () => {
  const [selectedFilters, setSelectedFilters] = React.useState<Filter[]>([]);
  const [filterData, setFilterData] = React.useState<FilterData>({});
  const [addFilterVisible, setAddFilterVisible] = React.useState<boolean>(false);

  const updateFilterFields = (filter: Filter) => {
    setSelectedFilters((prevFilters) => [...prevFilters, filter]);
  };

  const updateFilterData = (value: string, name: string) => {
    setFilterData((prevData) => {
      return { ...prevData, ...{ [name]: value } };
    });
  };

  const removeByName = (nameToRemove) => {
    setSelectedFilters((prevFields) => {
      return prevFields.filter(({ name }) => name !== nameToRemove);
    });

    setFilterData((prevData) => {
      const newData = { ...prevData };
      newData[nameToRemove];
      return newData;
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    setFilterData({});
  };

  const filtersWithoutSelected = React.useMemo(() => {
    return filters.filter((filter) => {
      return !selectedFilters.map((item) => item.name).includes(filter.name);
    });
  }, [filters, selectedFilters]);

  const hasFilterData = React.useMemo(() => {
    return Object.values(filterData).filter((v) => v).length > 0;
  }, [filterData]);

  return (
    <Flex gap={2} flexWrap>
      <Input w={160}>
        <Input.Addon>
          <SearchM />
        </Input.Addon>
        <Input.Value
          value={filterData['name']}
          onChange={(v) => updateFilterData(v, 'name')}
          placeholder='Filter by name'
          aria-label='Filter by name'
        />
        {filterData['name'] && (
          <Input.Addon>
            <Hint
              tag={ButtonLink}
              use='secondary'
              addonLeft={CloseM}
              title='Clear'
              onClick={() => removeByName('name')}
            />
          </Input.Addon>
        )}
      </Input>

      <Select value={filterData['size']} onChange={(v) => updateFilterData(v, 'size')}>
        <Select.Trigger
          empty={!filterData['size']}
          placeholder='Size'
          tag={FilterTrigger}
          onClear={() => removeByName('size')}
          aria-label='Select size'
        >
          Size: {filterData['size']}
        </Select.Trigger>
        <Select.Menu>
          {sizes.map((item, idx) => (
            <Select.Option key={idx} value={item}>
              {item}
            </Select.Option>
          ))}
        </Select.Menu>
      </Select>

      {selectedFilters.map(({ id, name, values }) => (
        <FilterSelect
          key={id}
          name={name}
          options={values}
          value={filterData[name]}
          onChange={(v) => updateFilterData(v, name)}
          onClear={() => removeByName(name)}
        />
      ))}

      {Boolean(filtersWithoutSelected.length) && (
        <DropdownMenu visible={addFilterVisible} onVisibleChange={setAddFilterVisible}>
          <DropdownMenu.Trigger tag={Button} use='tertiary' addonLeft={MathPlusM}>
            Add filter
          </DropdownMenu.Trigger>
          <DropdownMenu.Menu>
            {filtersWithoutSelected.map((filterItem) => (
              <DropdownMenu.Item
                key={filterItem.name}
                onClick={(e) => {
                  updateFilterFields(filterItem);
                  setAddFilterVisible(false);
                }}
              >
                {filterItem.name}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Menu>
        </DropdownMenu>
      )}
      {hasFilterData && (
        <Button onClick={clearAllFilters} use='tertiary' theme='muted' addonLeft={CloseM} ml='auto'>
          Clear filters
        </Button>
      )}
    </Flex>
  );
};

const filters: Filter[] = [
  {
    id: 'cbf46bbe-4c1d-47a8-b3fe-11d55298d97d',
    name: 'Colors',
    values: ['Blue', 'Gray', 'Green', 'Orange', 'Pink', 'Red', 'Salad', 'Violet', 'Yellow'],
  },
  {
    id: '254c8b3d-bd58-4019-ae45-0e0babfadd34',
    name: 'Devices',
    values: ['Desktop', 'Phone', 'Tablet'],
  },
  {
    id: 'bdf21be3-b398-4e0c-bcbe-6afa7fcab43e',
    name: 'Languages',
    values: ['Chinese', 'English', 'French', 'German', 'Italian', 'Korean', 'Spanish', 'Turkish'],
  },
  {
    id: 'e8409dcd-a3ad-405b-8840-4623e752cb92',
    name: 'Materials',
    values: ['Glass', 'Metal', 'Paper', 'Wood'],
  },
  {
    id: '80b9d5ae-882f-4457-9beb-f6481cfe26c6',
    name: 'Shapes',
    values: ['Circle', 'Rectangle', 'Star', 'Triangle'],
  },
];

const sizes = ['Small', 'Medium', 'Large'];

export default Demo;

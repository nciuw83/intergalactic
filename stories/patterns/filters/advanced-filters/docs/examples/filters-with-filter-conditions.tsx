import React from 'react';
import Dropdown from '@semcore/dropdown';
import Select from '@semcore/select';
import Input from '@semcore/input';
import MathPlusM from '@semcore/icon/MathPlus/m';
import { Hint } from '@semcore/ui/tooltip';
import { Flex } from '@semcore/flex-box';
import { Text } from '@semcore/typography';
import Divider from '@semcore/divider';
import Button from '@semcore/button';
import { FilterTrigger } from '@semcore/base-trigger';
import CloseM from '@semcore/icon/Close/m';
import TrashM from '@semcore/icon/Trash/m';
import { ScreenReaderOnly } from '@semcore/flex-box';

const makeOptions = (options: string[]) => options.map((value) => ({ value, children: value }));
interface FilterProps extends React.ComponentPropsWithoutRef<typeof Flex> {
  closable?: boolean;
  onClose?: () => void;
  id: string;
  name: string;
}
const Filter: React.FC<FilterProps> = ({ closable, onClose, id, name, ...props }) => (
  <Flex {...props} gap={2}>
    <Flex flexWrap gap={4} tag='fieldset' m={0} p={0} style={{ border: 'none' }}>
      <ScreenReaderOnly tag={'legend'}>
        <Text size={200} mb={2}>
          {name}
        </Text>
      </ScreenReaderOnly>
      <Flex direction='column' wMin={120} gap={2}>
        <ScreenReaderOnly>
          <Text tag='label' htmlFor={`${id}-condition`} size={200}>
            Condition
          </Text>
        </ScreenReaderOnly>
        <Select
          options={makeOptions(['Include', 'Exclude'])}
          id={`${id}-condition`}
          defaultValue={'Include'}
        />
      </Flex>
      <Flex direction='column' wMin={120} gap={2}>
        <ScreenReaderOnly>
          <Text tag='label' htmlFor={`${id}-type`} size={200}>
            Type
          </Text>
        </ScreenReaderOnly>
        <Select
          options={makeOptions(['Keyword', 'Backlink'])}
          id={`${id}-type`}
          defaultValue={'Keyword'}
        />
      </Flex>
      <Flex direction='column' wMin={120} gap={2}>
        <ScreenReaderOnly>
          <Text tag='label' htmlFor={`${id}-filter`} size={200}>
            Filter
          </Text>
        </ScreenReaderOnly>
        <Select
          options={makeOptions(['Containing', 'Not containing'])}
          id={`${id}-filter`}
          defaultValue={'Containing'}
        />
      </Flex>
      <Flex direction='column' wMin={120} gap={2}>
        <ScreenReaderOnly>
          <Text tag='label' htmlFor={`${id}-value`} size={200}>
            Enter value
          </Text>
        </ScreenReaderOnly>
        <Input w={120}>
          <Input.Value id={`${id}-label`} placeholder='Enter value' />
        </Input>
      </Flex>
    </Flex>
    {closable ? (
      <Button use='tertiary' theme='muted' onClick={onClose}>
        <Button.Addon tag={Hint} title={'Remove filter'} ignorePortalsStacking>
          <TrashM />
        </Button.Addon>
      </Button>
    ) : null}
  </Flex>
);

const Demo = () => {
  const [filtersCount, setFiltersCount] = React.useState<number>(1);
  const [visible, setVisible] = React.useState<boolean>(false);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (!buttonRef.current) return;
    buttonRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }, [filtersCount]);

  const clearAll = () => setFiltersCount(0);
  const addFilter = () => setFiltersCount(filtersCount + 1);
  const applyFilters = () => setVisible(false);
  const handleCloseFilter = () => setFiltersCount(filtersCount - 1);

  return (
    <Flex direction='column' gap={2}>
      <Text tag='label' htmlFor='advanced-filter' size={200}>
        Filter label
      </Text>
      <Dropdown visible={visible} onVisibleChange={setVisible}>
        <Dropdown.Trigger
          placeholder='Advanced filters'
          id='advanced-filter'
          empty={!filtersCount}
          onClear={clearAll}
          tag={FilterTrigger}
          w={200}
        >
          <FilterTrigger.Text>Advanced filters</FilterTrigger.Text>
          {!!filtersCount && (
            <FilterTrigger.Counter aria-label='Applied filters count'>
              {filtersCount}
            </FilterTrigger.Counter>
          )}
        </Dropdown.Trigger>
        <Dropdown.Popper aria-label='Advanced filter popup'>
          <Flex direction='column' gap={4} py={4}>
            {filtersCount > 0 && (
              <Flex direction='column' gap={4} px={4} alignItems='flex-start'>
                {[...new Array(filtersCount)].map((_, index) => (
                  <Filter
                    key={`${index}`}
                    name={`Condition #${index + 1}`}
                    id={`advanced-filter-condition-${index + 1}`}
                    closable
                    onClose={handleCloseFilter}
                  />
                ))}
              </Flex>
            )}
            <div>
              <Button use='tertiary' onClick={addFilter} ref={buttonRef} mx={4}>
                <Button.Addon>
                  <MathPlusM />
                </Button.Addon>
                <Button.Text>Add condition</Button.Text>
              </Button>
            </div>
            <Divider />
            <Flex px={4} justifyContent='space-between'>
              <Button use='primary' theme='info' onClick={applyFilters}>
                Apply
              </Button>
              <Button use='tertiary' theme='muted' onClick={clearAll}>
                <Button.Addon>
                  <CloseM />
                </Button.Addon>
                <Button.Text>Clear all</Button.Text>
              </Button>
            </Flex>
          </Flex>
        </Dropdown.Popper>
      </Dropdown>
    </Flex>
  );
};

export default Demo;

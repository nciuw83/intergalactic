import React from 'react';
import Slider from 'intergalactic/slider';
import InputNumber from 'intergalactic/input-number';
import Tooltip from 'intergalactic/tooltip';
import { Flex } from 'intergalactic/flex-box';

const Demo = () => {
  const [value, setValue] = React.useState(51);
  const [error, setError] = React.useState('');
  const min = 10;
  const max = 100;

  const handleInput = (value) => {
    if (!!value && (value > max || value < min)) {
      setError('Please enter a valid value');
      setValue(value);
    } else {
      setError('');
      setValue(value);
    }
  };

  return (
    <>
      <Flex direction="row" gap={4}>
        <Slider mb={4} value={value} onChange={setValue} step={1} min={min} max={max}>
          <Slider.Bar />
          <Slider.Knob />
        </Slider>
        <Tooltip
          title={`Please enter a valid value within ${min} and ${max}.`}
          visible={!!error}
          interaction='click'
          theme='warning'
          placement='right'
        >
          <InputNumber w={80} size='m' state={error ? 'invalid' : 'normal'}>
            <InputNumber.Value step={1} value={value.toString()} onChange={handleInput} />
            <InputNumber.Controls showControls />
          </InputNumber>
        </Tooltip>
      </Flex>
    </>
  );
};

export default Demo;

import React from 'react';
import Input from 'intergalactic/input';
import CloseM from 'intergalactic/icon/Close/m';
import { Text } from 'intergalactic/typography';

const Demo = () => {
  const [value, setValue] = React.useState('+');
  return (
    <>
      <Text tag='label' htmlFor='basic-example' size={200} mr={2}>
        Phone
      </Text>
      <Input w={180}>
        <Input.Value id='basic-example' value={value} onChange={(v) => setValue(v)} />
        {value.length > 1 && (
          <Input.Addon
            tag={CloseM}
            interactive
            aria-label='Clear field'
            onClick={() => setValue('+')}
          />
        )}
      </Input>
    </>
  );
};

export default Demo;

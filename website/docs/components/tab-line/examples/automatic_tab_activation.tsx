import React from 'react';
import TabLine from 'intergalactic/tab-line';
import Badge from 'intergalactic/badge';
import Tooltip from 'intergalactic/tooltip';
import LinkedInM from 'intergalactic/icon/LinkedIn/m';

const Demo = () => {
  const [value, setValue] = React.useState(0);

  return (
    <TabLine onChange={setValue} value={value} aria-label='Page'>
      <TabLine.Item value={0}>Overview</TabLine.Item>
      <TabLine.Item value={1}>Issues</TabLine.Item>
      <TabLine.Item value={2}>
        <TabLine.Item.Addon>
          <LinkedInM />
        </TabLine.Item.Addon>
        <TabLine.Item.Text>LinkedIn</TabLine.Item.Text>
        <TabLine.Item.Addon>
          <Badge bg='green-400'>new</Badge>
        </TabLine.Item.Addon>
      </TabLine.Item>
      <Tooltip title="Progress isn't available during collecting process" placement='top'>
        <TabLine.Item disabled value={3}>
          Progress
        </TabLine.Item>
      </Tooltip>
      <TabLine.Item value={4}>Statistics</TabLine.Item>
    </TabLine>
  );
};

export default Demo;

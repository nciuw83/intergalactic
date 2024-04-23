import React from 'react';
import TabPanel from 'intergalactic/tab-panel';
import Tooltip from 'intergalactic/tooltip';
import FacebookM from 'intergalactic/icon/Facebook/m';
import InstagramM from 'intergalactic/icon/Instagram/m';
import TwitterM from 'intergalactic/icon/Twitter/m';
import LinkedInM from 'intergalactic/icon/LinkedIn/m';
import Badge from 'intergalactic/badge';

const Demo = () => {
  const [value, onChange] = React.useState(1);
  return (
    <>
      <TabPanel value={value} onChange={onChange} aria-label='Social network reports'>
        <TabPanel.Item value={1} aria-controls='tab-panel-1'>
          <TabPanel.Item.Addon>
            <FacebookM />
          </TabPanel.Item.Addon>
          <TabPanel.Item.Text>Facebook</TabPanel.Item.Text>
        </TabPanel.Item>
        <TabPanel.Item value={2} aria-controls='tab-panel-2'>
          <TabPanel.Item.Addon>
            <InstagramM />
          </TabPanel.Item.Addon>
          <TabPanel.Item.Text>Instagram</TabPanel.Item.Text>
          <TabPanel.Item.Addon>
            <Badge bg='green-400'>new</Badge>
          </TabPanel.Item.Addon>
        </TabPanel.Item>
        <TabPanel.Item value={3} aria-controls='tab-panel-3'>
          <TabPanel.Item.Addon>
            <TwitterM />
          </TabPanel.Item.Addon>
          <TabPanel.Item.Text>Twitter</TabPanel.Item.Text>
        </TabPanel.Item>
        <Tooltip
          title='You can disable the tab to indicate that data is either being collected or unavailable.'
          placement='top'
        >
          <TabPanel.Item value={4} disabled>
            <TabPanel.Item.Addon>
              <LinkedInM />
            </TabPanel.Item.Addon>
            <TabPanel.Item.Text>LinkedIn</TabPanel.Item.Text>
          </TabPanel.Item>
        </Tooltip>
      </TabPanel>
      {
        [
          <div id='tab-panel-1' role='tabpanel' aria-labelledby='tab-label-1' tabIndex={-1}>
            <h3>Facebook</h3>
            <p>
              It's where your aunt's cat has more followers than you, and your high school nemesis
              still thinks they're relevant.
            </p>
          </div>,
          <div
            id='tab-panel-2'
            aria-hidden='true'
            role='tabpanel'
            aria-labelledby='tab-label-2'
            tabIndex={-1}
          >
            <h3>Instagram</h3>
            <p>
              It's where people spend hours perfecting their avocado toast just for a 'like', and
              your explore page thinks you need therapy based on your search history.
            </p>
          </div>,
          <div
            id='tab-panel-3'
            aria-hidden='true'
            role='tabpanel'
            aria-labelledby='tab-label-3'
            tabIndex={-1}
          >
            <h3>Twitter</h3>
            <p>
              It's where 280 characters can start a revolution or a feud over pineapple on pizza,
              and your timeline is a mix of breaking news and cat memes.
            </p>
          </div>,
        ][value - 1]
      }
    </>
  );
};

export default Demo;

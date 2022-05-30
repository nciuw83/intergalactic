import React from 'react';
import Link from '@semcore/link';
import YoutubeXS from '@semcore/icon/Youtube/m';
import ChatXS from '@semcore/icon/Chat/m';
import BookXS from '@semcore/icon/Book/m';
import MuseumXS from '@semcore/icon/Museum/m';
import MobileXS from '@semcore/icon/Mobile/m';
import BracketsCodeXS from '@semcore/icon/BracketsCode/m';
import MegaphoneXS from '@semcore/icon/Megaphone/m';
import NewsXS from '@semcore/icon/News/m';
import ChatQuestionXS from '@semcore/icon/ChatQuestion/m';
import QuestionAltXS from '@semcore/icon/Question/m';
import styled from 'styled-components';

import Header from '@semcore/product-head';

const HeaderRow = styled(Header.Row)`
  overflow: auto;
`;

export default () => {
  return (
    <>
      <Header>
        <HeaderRow>
          <Header.Links>
            <Link>
              <Link.Addon>
                <MuseumXS />
              </Link.Addon>
              <Link.Text>Old version</Link.Text>
            </Link>
            <Link>
              <Link.Addon>
                <MobileXS />
              </Link.Addon>
              <Link.Text>Position Tracking App</Link.Text>
            </Link>
            <Link>
              <Link.Addon>
                <BracketsCodeXS />
              </Link.Addon>
              <Link.Text>API</Link.Text>
            </Link>
            {/* <Link>
              <Link.Addon tag={GobletXS} />
              <Link.Text>Top 30 Advertisers & Publishers</Link.Text>
            </Link> */}
            <Link>
              <Link.Addon>
                <MegaphoneXS />
              </Link.Addon>
              <Link.Text>Check out best tips</Link.Text>
            </Link>
            <Link>
              <Link.Addon>
                <NewsXS />
              </Link.Addon>
              <Link.Text>News</Link.Text>
            </Link>
            <Link>
              <Link.Addon>
                <ChatQuestionXS />
              </Link.Addon>
              <Link.Text>FAQ</Link.Text>
            </Link>
            <Link>
              <Link.Addon>
                <QuestionAltXS />
              </Link.Addon>
              <Link.Text>Product tour</Link.Text>
            </Link>
            <Link>
              <Link.Addon>
                <YoutubeXS />
              </Link.Addon>
              <Link.Text>Video tutorial</Link.Text>
            </Link>
            <Link>
              <Link.Addon>
                <BookXS />
              </Link.Addon>
              <Link.Text>User manual</Link.Text>
            </Link>
            <Link>
              <Link.Addon>
                <ChatXS />
              </Link.Addon>
              <Link.Text>Send feedback</Link.Text>
            </Link>
          </Header.Links>
        </HeaderRow>
      </Header>
    </>
  );
};

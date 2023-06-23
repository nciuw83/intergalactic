import React from 'react';
import Button from '@semcore/ui/button';
import Switch from '@semcore/ui/switch';
import { Box, Flex } from '@semcore/ui/flex-box';
import { ThemeProvider } from '@semcore/utils/lib/ThemeProvider';

const styles = `
    .popper {
      box-shadow: var(--intergalactic-box-shadow-popper, 0px 1px 12px 0px rgba(25, 27, 35, 0.15));
      padding: var(--intergalactic-form-control-m, 28px) var(--intergalactic-form-control-l, 40px);
    }
    .kraken {
      position: absolute;
      top: 0;
      left: 80px;
    }
    .wrapper {
      position: relative;
    }
`;

const violetPrimaryButtonTheme = {
  '--intergalactic-control-primary-info': '#8649e1',
};

const CustomComponent = () => {
  const [visible, setVisible] = React.useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <ThemeProvider tokens={violetPrimaryButtonTheme}>
      <Flex className='wrapper' h={220} alignItems='flex-end'>
        <style>{styles}</style>
        <Box className='kraken' style={{ display: visible ? 'block' : 'none' }}>
          <Kraken />
        </Box>
        <Flex className='popper' h={40} alignItems='center'>
          <Switch size='xl' mr={2}>
            <Switch.Value onChange={toggleVisible} />
            <Switch.Addon>Release the Kraken!</Switch.Addon>
          </Switch>
          <Button size='l' theme='muted' use='tertiary' ml={10}>
            Close
          </Button>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
};
export default CustomComponent;

const Kraken = () => {
  return (
    <svg
      width='130'
      height='130'
      viewBox='0 0 130 130'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M44.1155 23.0443C22.1641 38.3376 35.7902 61.518 36.6345 77.4419C36.9979 84.0572 33.8131 88.0542 30.4146 89.0374C27.0161 90.0206 16.0938 86.5687 21.8649 72.2693C24.1626 78.0296 29.9337 75.2617 31.2268 73.9578C34.0055 71.1364 34.1337 59.6798 23.5855 60.4065C9.00824 61.4753 1.40968 86.9107 11.8296 98.0574C17.8358 104.47 31.494 104.993 43.5064 97.4268H75.4609L89.7283 78.9915C86.2015 74.7166 93.5009 63.6982 95.649 51.1087C97.5727 39.8551 94.7406 30.5466 86.5756 22.9801C82.6213 19.3251 61.7493 10.7647 44.1155 23.0443Z'
        fill='var(--intergalactic-control-primary-info)'
      />
      <path
        d='M65.9922 16.6748C58.1976 16.3832 50.5194 18.6337 44.1156 23.0871C25.0177 36.3498 32.862 55.5974 35.7903 70.9014C36.5812 65.5578 27.5933 44.1835 44.7248 27.8963C49.9615 22.9161 59.8791 17.4122 65.9922 16.6748Z'
        fill='white'
      />
      <path
        d='M40.5352 89.9673C32.8191 96.1017 23.3396 97.6514 17.825 93.975C10.515 89.0803 7.06304 71.2755 19.396 61.4647C7.70427 66.509 2.53169 88.0543 11.9043 98.1002C17.7929 104.395 31.0343 104.993 42.8971 97.8758L40.5352 89.9673Z'
        fill='black'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M40.5352 89.9673C32.8191 96.1017 23.3396 97.6514 17.825 93.975C10.515 89.0803 7.06304 71.2755 19.396 61.4647C7.70427 66.509 2.53169 88.0543 11.9043 98.1002C17.7929 104.395 31.0343 104.993 42.8971 97.8758L40.5352 89.9673Z'
        fill='black'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.9184 72.2692C24.2162 78.0296 29.9872 75.2616 31.2804 73.9578C31.9255 73.2246 32.3708 72.3375 32.5735 71.3822C32.5676 70.4817 32.2649 69.6083 31.7123 68.8973C31.1598 68.1863 30.3881 67.6774 29.517 67.4493C27.0162 66.4982 23.4788 68.7211 21.9184 72.2692Z'
        fill='black'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M40.8133 88.8877C34.1445 116.247 11.8939 97.1275 9.82056 104.833C8.40986 110.177 35.8652 134.757 56.6303 102.984L61.0227 84.4953'
        fill='var(--intergalactic-control-primary-info)'
      />
      <path
        d='M56.6514 102.984L58.169 96.572C58.0194 95.7384 57.8911 94.9048 57.8056 94.0712C34.1443 132.844 11.9791 102.375 9.8417 104.833C8.43099 110.155 35.8863 134.779 56.6514 102.984Z'
        fill='black'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M88.9589 73.9366C87.1207 82.9352 100.084 84.4955 102.04 81.8238C110.376 70.4313 85.6459 72.1198 87.4627 65.6113C89.6001 58.6754 99.7636 57.7456 107.619 61.6571C116.446 66.0495 121.191 76.6191 117.857 85.7673C114.266 95.5995 102.5 101.114 91.7376 97.0316L74.5206 86.5689'
        fill='var(--intergalactic-control-primary-info)'
      />
      <path
        d='M107.587 61.6569C100.651 58.205 91.9087 58.5576 88.5315 63.431C87.7941 68.7746 110.248 63.2279 116.521 76.8968C117.9 79.8892 117.729 84.0893 115.816 89.7214C116.665 88.4882 117.355 87.1523 117.868 85.7458C121.159 76.5976 116.414 66.0387 107.587 61.6569Z'
        fill='black'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M88.9588 73.9366C87.1206 82.9352 100.084 84.4955 102.04 81.8238C110.376 70.4313 85.6458 72.1198 87.4626 65.6113C89.6 58.6754 99.7635 57.7456 107.619 61.6571C116.446 66.0495 121.191 76.6191 117.857 85.7673C114.266 95.5995 102.499 101.114 91.7374 97.0316'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M86.8961 82.2191C88.1679 86.5687 91.2671 92.4894 95.4458 94.4024C102.841 97.7902 111.99 94.4024 117.301 95.1612C127.272 96.6253 122.645 113.051 114.971 111.716C112.962 111.374 114.693 105.464 114.8 105.036C114.202 105.784 107.522 115.435 97.6153 114.9C94.8089 114.7 92.0739 113.924 89.5806 112.62C87.0873 111.317 84.8893 109.514 83.1235 107.323L66.4195 104.117C65.5859 97.5907 64.7452 91.0645 63.8973 84.5382'
        fill='var(--intergalactic-control-primary-info)'
      />
      <path
        d='M97.2199 110.241C91.4752 109.353 86.291 106.292 82.7388 101.691L79.6609 106.65L83.1128 107.323C84.8786 109.514 87.0767 111.317 89.5699 112.62C92.0632 113.924 94.7982 114.7 97.6046 114.9C107.512 115.435 114.191 105.784 114.79 105.036C112.379 107.069 109.573 108.581 106.549 109.477C103.526 110.373 100.349 110.633 97.2199 110.241Z'
        fill='black'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M111.936 101.306C112.473 101.37 112.988 101.559 113.439 101.858C113.89 102.157 114.265 102.557 114.533 103.027C114.838 103.658 114.928 104.371 114.79 105.058'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M86.8962 82.2191C88.168 86.5687 91.2672 92.4894 95.4459 94.4024C102.841 97.7902 111.99 94.4024 117.301 95.1612C127.272 96.6253 122.645 113.051 114.971 111.716C112.962 111.374 114.693 105.464 114.8 105.036C114.202 105.784 107.522 115.435 97.6154 114.9C94.809 114.7 92.074 113.924 89.5807 112.62C87.0875 111.317 84.8894 109.514 83.1236 107.323L66.4196 104.117'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M52.3659 86.5688C49.9078 112.923 61.4286 116.204 67.563 116.835C90.6686 119.175 89.2152 90.4268 82.7815 89.5505C79.2227 89.0589 79.5754 96.8071 75.5463 102.984C69.615 103.369 66.4516 95.5032 66.8042 91.3887'
        fill='var(--intergalactic-control-primary-info)'
      />
      <path
        d='M52.0667 91.1855C51.3079 113.319 61.8027 116.247 67.5631 116.835C90.6687 119.175 89.2153 90.4267 82.7816 89.5504C79.2228 89.0588 79.5754 96.807 75.5464 102.984C69.615 103.369 66.4516 95.5031 66.8043 91.3886'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M68.226 108.541C69.9406 108.01 71.532 107.141 72.9069 105.987C73.9435 105.129 74.8411 104.116 75.568 102.984'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M83.6689 91.2496C80.2597 91.9764 80.9009 106.65 72.8 111.876C69.2946 114.131 60.7449 116.963 53.5097 104.929C56.4914 114.687 63.3098 116.396 67.5633 116.835C87.0674 118.801 89.0766 98.6665 85.3788 91.8054C85.0261 91.2176 84.5025 91.0786 83.6689 91.2496Z'
        fill='black'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M49.4056 24.5191C47.7003 23.5545 46.3456 22.0731 45.5369 20.2886C44.7282 18.5041 44.5074 16.5089 44.9063 14.5907C46.6453 16.0745 48.651 17.2134 50.8163 17.9465C53.0535 18.7017 55.418 19.0068 57.7736 18.8442'
        fill='white'
      />
      <path
        d='M51.6608 18.203C51.5131 17.6444 51.4306 17.0706 51.4149 16.4931C51.4045 15.8511 51.4836 15.2108 51.6501 14.5907C53.3451 15.2437 55.0937 15.7479 56.8761 16.0976C59.0519 16.5176 61.2649 16.7145 63.4807 16.6854L51.6501 21.6443'
        fill='white'
      />
      <path
        d='M49.4056 24.5191C47.7003 23.5545 46.3456 22.0731 45.5369 20.2886C44.7282 18.5041 44.5074 16.5089 44.9063 14.5907C46.6453 16.0745 48.651 17.2134 50.8163 17.9465C53.0535 18.7017 55.418 19.0068 57.7736 18.8442'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M51.6608 18.203C51.5131 17.6444 51.4306 17.0706 51.4149 16.4931C51.4045 15.8511 51.4836 15.2108 51.6501 14.5907C53.3451 15.2437 55.0937 15.7479 56.8761 16.0976C59.0327 16.6416 61.262 16.8399 63.4807 16.6854'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M46.2958 21.6443C45.4677 22.1069 44.6651 22.6135 43.8912 23.1619C42.8267 23.9107 41.8095 24.7244 40.8453 25.5986C42.1032 25.0807 43.4208 24.7217 44.7675 24.5299C46.3061 24.315 47.8671 24.315 49.4057 24.5299C48.6645 24.1043 47.9849 23.5793 47.3859 22.9696C46.9845 22.5605 46.6198 22.117 46.2958 21.6443Z'
        fill='black'
      />
      <path
        d='M50.0895 42.388C51.6123 42.388 52.8469 40.5793 52.8469 38.3482C52.8469 36.1171 51.6123 34.3085 50.0895 34.3085C48.5667 34.3085 47.3322 36.1171 47.3322 38.3482C47.3322 40.5793 48.5667 42.388 50.0895 42.388Z'
        fill='black'
      />
      <path
        d='M74.9158 42.388C76.4387 42.388 77.6731 40.5793 77.6731 38.3482C77.6731 36.1171 76.4387 34.3085 74.9158 34.3085C73.393 34.3085 72.1585 36.1171 72.1585 38.3482C72.1585 40.5793 73.393 42.388 74.9158 42.388Z'
        fill='black'
      />
      <path
        d='M38.9642 55.3515C39.2506 54.1909 39.9528 53.1757 40.9376 52.4982C41.9224 51.8206 43.1215 51.5278 44.3078 51.6751C49.7083 52.3152 55.1476 52.5688 60.5843 52.4339C67.39 52.3082 74.168 51.5317 80.8258 50.1148C84.0319 49.901 85.3892 53.1072 85.0151 56.8049C84.7024 59.3003 83.6574 61.6471 82.0122 63.5491C80.3669 65.4512 78.195 66.8232 75.7707 67.4921C66.825 70.1362 57.3405 70.3758 48.2727 68.1867C41.636 66.9577 37.8634 60.0538 38.9642 55.3515Z'
        fill='white'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M38.7721 56.9975C45.984 59.0689 53.4552 60.0982 60.9586 60.054C69.1494 60.0066 77.2832 58.687 85.0688 56.1425'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M74.1464 67.9838C76.1928 62.5501 77.0563 56.7424 76.6793 50.9485'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M67.4458 52.1455C67.5954 54.3364 67.6916 56.6555 67.6916 59.1136C67.6876 62.5225 67.5093 65.9291 67.1572 69.3198'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M60.4669 69.715C58.1057 64.2855 56.9184 58.4184 56.9829 52.498'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M48.7754 52.1455C48.2616 55.7211 48.6624 59.3685 49.9403 62.7472C50.8606 65.1362 52.2078 67.3379 53.9159 69.245'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M92.0583 44.44C92.6033 46.2996 91.9835 47.037 90.9896 47.3041C89.9957 47.5713 89.13 47.3041 88.585 45.4339C88.0399 43.5636 89.0231 40.5499 89.0231 40.5499C89.0231 40.5499 91.5133 42.527 92.0583 44.44Z'
        fill='white'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M73.9699 25.7637C75.6669 24.784 76.5451 23.1278 75.9312 22.0646C75.3174 21.0014 73.444 20.9337 71.747 21.9135C70.0499 22.8933 69.1718 24.5495 69.7857 25.6127C70.3995 26.6759 72.2728 26.7435 73.9699 25.7637Z'
        fill='white'
      />
      <path
        d='M65.6998 25.164C66.5522 24.6742 66.9298 23.7317 66.5432 23.059C66.1566 22.3863 65.1522 22.2381 64.2998 22.728C63.4474 23.2179 63.0698 24.1604 63.4564 24.8331C63.843 25.5058 64.8474 25.6539 65.6998 25.164Z'
        fill='white'
      />
      <path
        d='M73.559 30.5619C74.4075 30.072 74.8131 29.1859 74.4649 28.5828C74.1166 27.9796 73.1464 27.8878 72.2979 28.3777C71.4494 28.8676 71.0438 29.7537 71.3921 30.3568C71.7403 30.96 72.7105 31.0518 73.559 30.5619Z'
        fill='white'
      />
      <path
        d='M86.0854 33.2255C87.3409 31.8462 86.409 28.9534 84.004 26.7642C81.5989 24.575 78.6315 23.9185 77.376 25.2978C76.1204 26.6771 77.0523 29.5699 79.4574 31.7591C81.8624 33.9483 84.8299 34.6048 86.0854 33.2255Z'
        fill='white'
      />
      <path
        d='M85.3968 104.753C85.9798 102.447 85.548 100.349 84.4321 100.067C83.3163 99.7845 81.939 101.425 81.3559 103.731C80.7728 106.037 81.2047 108.136 82.3205 108.418C83.4364 108.7 84.8137 107.059 85.3968 104.753Z'
        fill='var(--intergalactic-control-primary-info)'
      />
      <path
        d='M78.6891 109.281C79.0866 108.443 78.9939 107.568 78.482 107.325C77.9702 107.082 77.233 107.563 76.8355 108.4C76.438 109.238 76.5308 110.113 77.0426 110.356C77.5545 110.599 78.2916 110.118 78.6891 109.281Z'
        fill='var(--intergalactic-control-primary-info)'
      />
      <path
        d='M97.4444 63.057C99.6224 63.057 101.388 62.3871 101.388 61.5608C101.388 60.7345 99.6224 60.0646 97.4444 60.0646C95.2665 60.0646 93.5009 60.7345 93.5009 61.5608C93.5009 62.3871 95.2665 63.057 97.4444 63.057Z'
        fill='var(--intergalactic-control-primary-info)'
      />
      <path
        d='M113.084 67.3559C113.438 66.609 112.678 65.5082 111.387 64.8974C110.095 64.2865 108.762 64.3968 108.409 65.1437C108.055 65.8907 108.816 66.9914 110.107 67.6023C111.398 68.2132 112.731 68.1029 113.084 67.3559Z'
        fill='var(--intergalactic-control-primary-info)'
      />
      <path
        d='M105.08 66.3058C105.148 65.8386 104.323 65.3309 103.237 65.1719C102.15 65.0128 101.214 65.2626 101.146 65.7299C101.078 66.1971 101.903 66.7047 102.989 66.8638C104.075 67.0228 105.011 66.773 105.08 66.3058Z'
        fill='var(--intergalactic-control-primary-info)'
      />
      <path
        d='M32.9047 118.94C35.3188 118.94 37.2757 118.151 37.2757 117.177C37.2757 116.203 35.3188 115.413 32.9047 115.413C30.4907 115.413 28.5337 116.203 28.5337 117.177C28.5337 118.151 30.4907 118.94 32.9047 118.94Z'
        fill='var(--intergalactic-control-primary-info)'
      />
      <path
        d='M25.5346 115.604C25.773 114.962 24.9659 114.07 23.732 113.612C22.4981 113.154 21.3046 113.303 21.0662 113.945C20.8279 114.587 21.635 115.478 22.8689 115.937C24.1028 116.395 25.2963 116.246 25.5346 115.604Z'
        fill='var(--intergalactic-control-primary-info)'
      />
      <path
        d='M11.0283 88.1933C11.5413 90.9185 11.0283 93.3017 9.842 93.5369C8.65573 93.772 8.00381 91.6239 7.49083 88.8986C6.97784 86.1734 6.82822 83.8971 7.99312 83.6726C9.15802 83.4482 10.5153 85.4788 11.0283 88.1933Z'
        fill='var(--intergalactic-control-primary-info)'
      />
      <path
        d='M15.8782 99.4909C16.6003 98.7689 16.333 97.331 15.2812 96.2792C14.2295 95.2275 12.7915 94.9602 12.0695 95.6822C11.3475 96.4042 11.6148 97.8422 12.6665 98.8939C13.7183 99.9457 15.1562 100.213 15.8782 99.4909Z'
        fill='var(--intergalactic-control-primary-info)'
      />
      <path
        d='M14.1309 93.8697C14.7948 93.659 15.1158 92.8041 14.8479 91.9603C14.5801 91.1164 13.8248 90.6031 13.161 90.8138C12.4971 91.0246 12.1761 91.8795 12.444 92.7233C12.7118 93.5672 13.4671 94.0805 14.1309 93.8697Z'
        fill='var(--intergalactic-control-primary-info)'
      />
      <path
        d='M46.2958 21.6443C45.5583 22.0718 44.8316 22.5421 44.1583 23.0444C22.2069 38.3377 35.833 61.5181 36.6773 77.442C37.0407 84.0573 33.8559 88.0543 30.4574 89.0375C27.0589 90.0207 16.1366 86.5688 21.9077 72.2694C24.2054 78.0298 29.9765 75.2618 31.2696 73.958C34.0483 71.1365 34.1765 59.6799 23.6283 60.4066C9.05104 61.4754 1.45247 86.9108 11.8724 98.0575C15.9336 102.396 24.2695 104.192 32.4452 102.461'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M93.5865 59.3593C94.4671 56.6502 95.1563 53.8825 95.6491 51.0768C97.5728 39.8232 94.7407 30.5147 86.5757 22.9482C83.9574 20.5222 73.9008 15.9481 62.2838 16.7069'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M89.7284 78.9915C88.1467 77.0785 88.7451 73.7975 90.081 69.6189'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M40.8133 88.8878C34.1446 116.247 11.8939 97.1276 9.82061 104.833C8.46334 109.942 33.6743 132.801 54.0547 106.596'
        stroke='black'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M87.3343 11C88.3176 18.9619 84.1282 23.9528 86.5007 29.6598C86.8952 30.5809 87.4707 31.4135 88.1932 32.1079C88.9156 32.8024 89.7701 33.3447 90.7061 33.7025C91.6422 34.0604 92.6405 34.2265 93.642 34.1911C94.6434 34.1557 95.6276 33.9195 96.536 33.4965C100.586 31.359 99.9986 25.9406 99.6673 24.5192C98.3742 18.9406 92.197 17.113 87.3343 11Z'
        fill='white'
        stroke='var(--intergalactic-control-primary-info)'
        strokeWidth='0.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M88.8626 19.5069C88.339 19.5069 87.5588 22.3604 87.7939 25.3528C88.168 29.5208 92.7848 33.443 93.9711 31.0918C94.5589 29.9162 91.8337 28.8475 90.3161 26.0154C88.5848 22.681 89.3863 19.5283 88.8626 19.5069Z'
        fill='var(--intergalactic-control-primary-info)'
      />
    </svg>
  );
};

import React from 'react';
import Skeleton from '../Skeleton';
import { ISkeletonProps } from '../index';

const RadialTreeChartSkeleton: React.FC<ISkeletonProps> = (props) => (
  <Skeleton visible viewBox="0 0 590 590" preserveAspectRatio="xMidYMid meet" {...props}>
    {({ gradientUrl }) => (
      <g>
        <path
          d="M233 296C233 286.059 241.059 278 251 278H341C350.941 278 359 286.059 359 296C359 305.941 350.941 314 341 314H251C241.059 314 233 305.941 233 296Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
        <path
          d="M408.046 22.9365C401.923 20.4003 394.903 23.3079 392.367 29.4308L375.146 71.0054C372.61 77.1283 375.518 84.148 381.641 86.6842L380.255 86.1101L330.315 206.676L333.086 207.824L383.026 87.2582L381.641 86.6842C387.764 89.2204 394.783 86.3127 397.319 80.1898L414.54 38.6152C417.076 32.4923 414.169 25.4727 408.046 22.9365Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
        <path
          d="M503.67 86.8304C498.983 82.1441 491.385 82.1441 486.699 86.8304L454.879 118.65C450.193 123.336 450.193 130.934 454.879 135.621L453.819 134.56L361.541 226.838L363.662 228.959L455.94 136.681L454.879 135.621C459.566 140.307 467.163 140.307 471.85 135.621L503.67 103.801C508.356 99.1146 508.356 91.5167 503.67 86.8304Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
        <path
          d="M567.564 182.454C565.027 176.331 558.008 173.423 551.885 175.96L510.31 193.18C504.187 195.717 501.28 202.736 503.816 208.859L503.242 207.473L382.676 257.414L383.824 260.185L504.39 210.245L503.816 208.859C506.352 214.982 513.372 217.89 519.495 215.354L561.069 198.133C567.192 195.597 570.1 188.577 567.564 182.454Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
        <path
          d="M590 295.25C590 288.623 584.627 283.25 578 283.25H533C526.373 283.25 521 288.623 521 295.25V293.75H390.5V296.75H521V295.25C521 301.877 526.373 307.25 533 307.25H578C584.627 307.25 590 301.877 590 295.25Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
        <path
          d="M567.564 408.046C570.1 401.923 567.192 394.903 561.069 392.367L519.495 375.146C513.372 372.61 506.352 375.518 503.816 381.641L504.39 380.255L383.824 330.315L382.676 333.086L503.242 383.027L503.816 381.641C501.28 387.764 504.188 394.783 510.31 397.32L551.885 414.54C558.008 417.077 565.028 414.169 567.564 408.046Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
        <path
          d="M503.67 503.67C508.356 498.984 508.356 491.385 503.67 486.699L471.85 454.879C467.164 450.193 459.566 450.193 454.88 454.879L455.94 453.819L363.663 361.541L361.542 363.663L453.819 455.94L454.88 454.879C450.193 459.566 450.193 467.164 454.88 471.85L486.699 503.67C491.386 508.356 498.984 508.356 503.67 503.67Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
        <path
          d="M408.046 567.563C414.169 565.027 417.077 558.008 414.54 551.885L397.32 510.31C394.783 504.187 387.764 501.28 381.641 503.816L383.027 503.242L333.086 382.675L330.315 383.823L380.255 504.39L381.641 503.816C375.518 506.352 372.61 513.372 375.147 519.495L392.367 561.069C394.903 567.192 401.923 570.1 408.046 567.563Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
        <path
          d="M295.25 590C301.877 590 307.25 584.627 307.25 578V533C307.25 526.373 301.877 521 295.25 521H296.75V390.5H293.75V521H295.25C288.623 521 283.25 526.373 283.25 533V578C283.25 584.627 288.623 590 295.25 590Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
        <path
          d="M182.454 567.563C188.577 570.1 195.597 567.192 198.133 561.069L215.354 519.495C217.89 513.372 214.982 506.352 208.859 503.816L210.245 504.39L260.185 383.823L257.414 382.675L207.474 503.242L208.859 503.816C202.736 501.28 195.717 504.187 193.181 510.31L175.96 551.885C173.424 558.008 176.331 565.027 182.454 567.563Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
        <path
          d="M86.8304 503.67C91.5167 508.356 99.1147 508.356 103.801 503.67L135.621 471.85C140.307 467.164 140.307 459.566 135.621 454.879L136.681 455.94L228.959 363.662L226.838 361.541L134.56 453.819L135.621 454.879C130.934 450.193 123.336 450.193 118.65 454.879L86.8304 486.699C82.1441 491.385 82.1441 498.983 86.8304 503.67Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
        <path
          d="M22.9364 408.046C25.4726 414.169 32.4922 417.077 38.6151 414.54L80.1897 397.32C86.3126 394.783 89.2203 387.764 86.6841 381.641L87.2581 383.027L207.824 333.086L206.676 330.315L86.11 380.255L86.6841 381.641C84.1478 375.518 77.1282 372.61 71.0053 375.146L29.4307 392.367C23.3078 394.903 20.4002 401.923 22.9364 408.046Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
        <path
          d="M0.5 295.25C0.5 301.877 5.87258 307.25 12.5 307.25H57.5C64.1274 307.25 69.5 301.877 69.5 295.25V296.75H200V293.75H69.5V295.25C69.5 288.623 64.1274 283.25 57.5 283.25H12.5C5.87258 283.25 0.5 288.623 0.5 295.25Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
        <path
          d="M22.9362 182.454C20.4 188.577 23.3076 195.597 29.4305 198.133L71.0051 215.354C77.1281 217.89 84.1477 214.982 86.6839 208.859L86.1099 210.245L206.676 260.185L207.824 257.414L87.2579 207.473L86.6839 208.859C89.2201 202.736 86.3125 195.717 80.1895 193.18L38.615 175.96C32.492 173.423 25.4724 176.331 22.9362 182.454Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
        <path
          d="M86.83 86.8302C82.1437 91.5165 82.1437 99.1145 86.83 103.801L118.65 135.621C123.336 140.307 130.934 140.307 135.62 135.621L134.56 136.681L226.837 228.959L228.958 226.837L136.681 134.56L135.62 135.621C140.307 130.934 140.307 123.336 135.62 118.65L103.801 86.8302C99.1143 82.1439 91.5163 82.1439 86.83 86.8302Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
        <path
          d="M182.454 22.9365C176.331 25.4727 173.423 32.4924 175.96 38.6153L193.18 80.1899C195.717 86.3128 202.736 89.2204 208.859 86.6842L207.473 87.2583L257.414 207.825L260.185 206.677L210.245 86.1102L208.859 86.6842C214.982 84.148 217.89 77.1284 215.353 71.0055L198.133 29.4309C195.597 23.308 188.577 20.4003 182.454 22.9365Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
        <path
          d="M295.25 0.5C288.623 0.5 283.25 5.87258 283.25 12.5V57.5C283.25 64.1274 288.623 69.5 295.25 69.5H293.75V200H296.75V69.5H295.25C301.877 69.5 307.25 64.1274 307.25 57.5V12.5C307.25 5.87258 301.877 0.5 295.25 0.5Z"
          fill={gradientUrl}
          fillRule="nonzero"
          fillOpacity="0.8"
        />
      </g>
    )}
  </Skeleton>
);

export default RadialTreeChartSkeleton;

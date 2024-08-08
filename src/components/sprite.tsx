import { FunctionComponent } from "react";

interface ISprite {
  logo?: boolean;
  signature?: boolean;
  bottomEmployeeCard?: boolean;
  className?: string;
}

export const Sprite: FunctionComponent<ISprite> = ({
  logo = false,
  signature = false,
  bottomEmployeeCard = false,
  className,
}) => {
  if (!logo && !signature && !bottomEmployeeCard) {
    return null;
  }

  return (
    <>
      {logo && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#3D3D3D"
          viewBox="0 0 796 179"
        >
          <path d="M33.7068 176.578H0V0H33.7068V176.578Z" fill="white"></path>
          <path
            d="M46.794 176.578V0H89.2307L170.224 126.681V0H203.446V176.578H164.162L80.2583 47.475V176.578H46.794Z"
            fill="white"
          ></path>
          <path
            d="M271.388 179C229.921 179 208.824 155.505 208.824 119.899V92.77H242.774V120.141C242.774 141.456 254.171 148.723 271.631 148.723C293.455 148.723 300.73 137.338 300.73 120.141V0H334.437V119.899C334.437 159.138 309.46 179 271.388 179Z"
            fill="white"
          ></path>
          <path
            d="M343.515 113.116V0H377.465V110.936C377.465 138.065 394.439 148.723 419.659 148.723C449.001 148.723 461.61 134.189 461.61 110.936V0H495.317V113.116C495.317 152.598 469.37 179 419.174 179C372.13 179 343.515 155.263 343.515 113.116Z"
            fill="white"
          ></path>
          <path
            d="M506.398 176.578V0H595.394C630.798 0 652.623 18.4087 652.623 48.2016C652.623 68.3058 641.71 84.2923 623.281 90.1055C646.56 94.9499 649.47 105.85 649.47 123.047V164.225C649.47 168.1 650.44 172.46 653.835 174.156V176.578H618.673C616.733 173.429 615.763 169.069 615.763 161.318V127.65C615.763 113.601 612.611 106.334 597.091 106.334H540.105V176.578H506.398ZM540.105 78.2368H588.846C607.034 78.2368 616.976 69.0325 616.976 53.5304C616.976 37.0595 606.306 29.0663 589.332 29.0663H540.105V78.2368Z"
            fill="white"
          ></path>
          <path
            d="M661.415 176.578V0H788.725V28.8241H695.122V72.6658H778.298V100.521H695.122V147.512H796V176.578H661.415Z"
            fill="white"
          ></path>
        </svg>
      )}
      {bottomEmployeeCard && (
        <svg
          className={className}
          width="100%"
          height="100%"
          viewBox="0 0 362 362"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_146_1212)" filter="url(#filter0_i_146_1212)">
            <rect
              width="384"
              height="362"
              fill="url(#paint0_linear_146_1212)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M82.7093 0H-1V109.18L82.7093 0ZM-1 138.849L105.457 0H137.709L-1 180.914V138.849ZM-1 233.053V407.858L311.709 0H177.685L-1 233.053ZM351.685 0L-1 459.997V516H56.0051L451.629 0H351.685ZM477.98 0L82.3569 516H397.441L546 322.239V0H477.98ZM546 356.608L423.792 516H503.441L546 460.491V356.608ZM546 494.861L529.792 516H546V494.861Z"
              fill="white"
              fillOpacity="0.02"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_146_1212"
              x="-5.24829"
              y="0"
              width="389.248"
              height="362"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-5.24829" />
              <feGaussianBlur stdDeviation="33.3266" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_146_1212"
              />
            </filter>
            <linearGradient
              id="paint0_linear_146_1212"
              x1="192"
              y1="0"
              x2="192"
              y2="362"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#285B86" />
              <stop offset="0.359" stopColor="#1C6FB1" />
              <stop offset="0.599" stopColor="#1C6FB1" />
              <stop offset="1" stopColor="#285B86" />
            </linearGradient>
            <clipPath id="clip0_146_1212">
              <rect width="384" height="362" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
};

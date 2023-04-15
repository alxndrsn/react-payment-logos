import * as React from "react";
import { SVGProps } from "react";
const SvgDiners = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={48}
    height={48}
    viewBox="0 0 780 500"
    {...props}
  >
    <path
      fill="#0079BE"
      d="M599.93 251.45c0-99.416-82.979-168.13-173.9-168.1h-78.241c-92.003-.033-167.73 68.705-167.73 168.1 0 90.931 75.729 165.64 167.73 165.2h78.241c90.913.437 173.9-74.293 173.9-165.2z"
    />
    <path
      fill="#fff"
      d="M348.28 97.432c-84.069.026-152.19 68.308-152.22 152.58.021 84.258 68.145 152.53 152.22 152.56 84.088-.025 152.23-68.301 152.24-152.56-.011-84.274-68.15-152.55-152.24-152.58z"
    />
    <path
      fill="#0079BE"
      d="M252.07 249.6c.08-41.18 25.747-76.296 61.94-90.25v180.48c-36.193-13.946-61.861-49.044-61.94-90.229zm131 90.275v-180.52c36.208 13.921 61.915 49.057 61.98 90.256-.066 41.212-25.772 76.322-61.98 90.269z"
    />
  </svg>
);
export default SvgDiners;

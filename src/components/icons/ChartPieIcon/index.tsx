import { SvgsIconsProps } from "@/types/svgicons";

const ChartPieIcon: React.FC<SvgsIconsProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="chart pie">
        <path
          id="primary"
          d="M10 14V3C12.9125 3.01576 15.7013 4.17974 17.7608 6.23924C19.8203 8.29873 20.9842 11.0875 21 14C20.9989 16.5773 20.0929 19.0725 18.44 21.05L10 14Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="primary_2"
          d="M15.53 18.62C14.7323 19.5021 13.7282 20.1725 12.6077 20.5712C11.4872 20.9699 10.2853 21.0844 9.10967 20.9045C7.93404 20.7246 6.8214 20.2559 5.87143 19.5403C4.92145 18.8248 4.16382 17.8847 3.66639 16.8044C3.16897 15.7241 2.9473 14.5373 3.02123 13.3503C3.09517 12.1633 3.4624 11.0132 4.09003 10.0029C4.71766 8.99271 5.58609 8.15395 6.61752 7.56181C7.64894 6.96966 8.81115 6.64262 10 6.60999"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
export default ChartPieIcon;

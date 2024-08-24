import { SvgsIconsProps } from "@/types/svgicons";

const WorkIcon: React.FC<SvgsIconsProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="work">
        <path
          id="primary"
          d="M13 15H11V13H13V15ZM16 4C16 3.73478 15.8946 3.48043 15.7071 3.29289C15.5196 3.10536 15.2652 3 15 3H9C8.73478 3 8.48043 3.10536 8.29289 3.29289C8.10536 3.48043 8 3.73478 8 4V7H16V4ZM21 20V8C21 7.73478 20.8946 7.48043 20.7071 7.29289C20.5196 7.10536 20.2652 7 20 7H4C3.73478 7 3.48043 7.10536 3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="primary_2"
          d="M11 14.0001H8.64C7.8639 13.9933 7.10654 13.7609 6.46021 13.3312C5.81389 12.9015 5.30654 12.2931 5 11.5801L3.18 7.43005"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="primary_3"
          d="M20.82 7.43005L19 11.5801C18.6935 12.2931 18.1861 12.9015 17.5398 13.3312C16.8935 13.7609 16.1361 13.9933 15.36 14.0001H13"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
export default WorkIcon;

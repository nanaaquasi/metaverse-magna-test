interface DashboardIconProps {
  className?: string;
  color?: string;
}

const DashboardIcon = (props: DashboardIconProps) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.4917 1.66669H10.625V6.66669V7.29169V11.4584H18.3333V7.29169V6.66669V6.50835C18.3333 3.47502 16.525 1.66669 13.4917 1.66669Z"
      fill={props?.color || "#929292"}
    />
    <path
      d="M1.66669 8.54169V12.7084V13.125V13.4917C1.66669 16.525 3.47502 18.3334 6.50835 18.3334H9.37502V13.125V12.7084V8.54169H1.66669Z"
      fill={props?.color || "#929292"}
    />
    <path
      d="M9.37502 1.66669V7.29169H1.66669V6.50835C1.66669 3.47502 3.47502 1.66669 6.50835 1.66669H9.37502Z"
      fill={props?.color || "#929292"}
    />
    <path
      d="M18.3333 12.7083V13.4916C18.3333 16.525 16.525 18.3333 13.4917 18.3333H10.625V12.7083H18.3333Z"
      fill={props?.color || "#929292"}
    />
  </svg>
);
export default DashboardIcon;

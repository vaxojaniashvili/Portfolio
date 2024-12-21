import { BurgerMenuProps } from "@/app/common/types/common";

const BurgerMenu = ({width, height, className, strokeColor,}: BurgerMenuProps) => {
  return (
      <svg
          className={className}
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M4 18L20 18"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M4 12L20 12"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M4 6L20 6"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
        />
      </svg>
  );
};

export default BurgerMenu;

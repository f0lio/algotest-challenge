import React from "react";
import classNames from "classnames";

interface ButtonProps {
  id: string;
  label: string;
  isDisabled?: boolean;
  isToggled?: boolean;
  className?: string;
  onClick: () => void;
}

const Button = ({
  id,
  label,
  isDisabled,
  isToggled,
  className,
  onClick,
}: ButtonProps) => (
  <button
    id={id}
    className={classNames(
      "px-5 py-2 rounded-2xl text-sm font-semibold border border-gray-200 hover:shadow-sm",
      {
        "bg-blue-500 text-white hover:bg-blue-600": isToggled,
        "bg-white text-gray-800 hover:bg-gray-100": !isToggled,
      },
      className
    )}
    disabled={isDisabled}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;

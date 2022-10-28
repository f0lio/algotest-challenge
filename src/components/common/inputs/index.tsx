import classNames from "classnames";
import React from "react";
import { FieldError } from "react-hook-form";

import Select from "react-select";

interface IOption {
  value: string;
  label: string;
}

interface InputProps {
  id: string;
  fieldName?: string;
  options?: IOption[];
  [x: string]: any;
  attributes?: any;
  className?: string;
  register?: any;
  error?: FieldError;
}

export const NumberInput = ({
  id,
  fieldName,
  required,
  defaultValue,
  className,
  error,
  register,
  ...attributes
}: InputProps) => (
  <div className="flex-col w-full">
    {fieldName && (
      <label
        htmlFor={id}
        className="block px-1 pb-2 text-sm font-semibold text-gray-800 min-w-max"
      >
        {fieldName} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <input
      id={id}
      type="number"
      defaultValue={defaultValue}
      className={classNames(
        "py-1.5 px-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent w-24 text-sm" ,
        className
      )}
      {...attributes}
      {...register}
      disabled={attributes.isDisabled}
    />
    {error && (
      <div className="flex items-center justify-between pt-1 text-red-400 rounded-xl">
        <p className="text-xs">{error.message}</p>
      </div>
    )}
  </div>
);

export const SelectInput = ({
  id,
  fieldName,
  options,
  required,
  defaultValue,
  className,
  register,
  highlighted,
  error,
  ...attributes
}: InputProps & { defaultValue: IOption }) => {
  // console.log('#', register)
  return (
    <div className={classNames("w-full flex-col flex px-2")}>
      {fieldName && (
        <label
          htmlFor={id}
          className="block px-1 pb-2 text-sm font-semibold text-gray-800 min-w-max"
        >
          {fieldName} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Select
        id={id}
        classNamePrefix="select"
        defaultValue={defaultValue || options?.[0]}
        options={options}
        styles={{
          control: (provided) => ({
            ...provided,
            border: "1px solid #e2e8f0",
            minWidth: "120px",
            borderRadius: "1rem",
            width: attributes.width,
            backgroundColor: highlighted ? attributes.isDisabled ? "#8caae6" : "#3b82f6" : "#fff",
            fontSize: "0.9rem",
          }),
          singleValue: (provided) => ({
            ...provided,
            color: highlighted ? "#fff" : "#1a202c",
          }),
          
        }}
        {...attributes}
        onChange={(e: any) => {
          const event = { target: { name: register.name, value: "" } };
          event.target.value = e?.value || "";
          register?.onChange(event);
        }}
      />
      {error && (
        <div className="flex items-center justify-between pt-1 text-red-400">
          <p className="text-xs">{error.message}</p>
        </div>
      )}
    </div>
  );
};
export default SelectInput;

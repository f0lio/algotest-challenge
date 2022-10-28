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
  <div className="w-full flex-col">
    {fieldName && (
      <label
        htmlFor={id}
        className="block min-w-max pb-2 px-1 text-sm font-semibold text-gray-800"
      >
        {fieldName} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <input
      id={id}
      type="number"
      defaultValue={defaultValue}
      className={classNames(
        "py-1.5 px-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent w-16",
        className
      )}
      {...attributes}
      {...register}
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
  error,
  ...attributes
}: InputProps & { defaultValue: IOption }) => {
  // console.log('#', register)
  return (
    <div className={classNames("w-full flex-col flex px-2")}>
      {fieldName && (
        <label
          htmlFor={id}
          className="block min-w-max pb-2 px-1 text-sm font-semibold text-gray-800"
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

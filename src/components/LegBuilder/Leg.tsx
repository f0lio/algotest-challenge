import { useForm, SubmitHandler } from "react-hook-form";

import { ILegSettings } from "@global/types";
import React from "react";
import SelectInput, { NumberInput } from "@components/common/inputs";
import LegBaseSettings from "./LegBaseSettings";
import { VscClose } from "react-icons/vsc";
import { BiCopy } from "react-icons/bi";
import LegAdvancedSettings from "./LegAdvancedSettings";

const Leg = ({
  legSettings,
  segment,
  onDelete,
  onCopy,
}: {
  legSettings: ILegSettings;
  segment: string;
  onDelete: () => void;
  onCopy: () => void;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILegSettings>({
    defaultValues: legSettings,
  });
  const formFields = watch();


  return (
    <div
      className="relative px-2 py-1"
    >
      <div className="absolute top-0 right-0 flex flex-col gap-y-2">
        <VscClose
          className="w-5 h-5 p-0.5 text-white duration-150 bg-red-400 rounded-full cursor-pointer hover:bg-red-500 hover:shadow-lg shadow-md"
          onClick={() => onDelete()}
        />
        <BiCopy
          className="w-5 h-5 p-1 text-white duration-150 bg-blue-400 rounded-full shadow-md cursor-pointer hover:bg-blue-500 hover:outline hover:shadow-lg"
        onClick={() => onCopy()}
        />
      </div>
      <div
        className="flex flex-col items-center justify-center p-5 my-2 rounded-lg bg-black/5"
      >
        <LegBaseSettings initialLegSettings={formFields} />
        <LegAdvancedSettings initialLegSettings={formFields} />
      </div>
    </div>
  );
};

export default Leg;

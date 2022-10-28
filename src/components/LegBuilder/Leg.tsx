import { useForm, SubmitHandler } from "react-hook-form";

import { ILegSettings } from "@interfaces/index";
import React from "react";
import SelectInput, { NumberInput } from "@components/common/inputs";
import LegBaseSettings from "./LegBaseSettings";
import { IoClose } from "react-icons/io5";

const Leg = ({
  legSettings,
  segment,
  onDelete,
}: {
  legSettings: ILegSettings;
  segment: string;
  onDelete: () => void;
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
  const onSubmit: SubmitHandler<ILegSettings> = (data) => console.log(data);

  return (
    <div
    className="bg-black/5 rounded-lg p-5 my-2 flex justify-center relative"
    >
      <div className="absolute top-2 right-2">
        <IoClose
          className="h-5 w-5  rounded-full bg-red-400 cursor-pointer text-white  hover:bg-red-500 hover:shadow-sm"
          onClick={() => onDelete()}
          />
      </div>
      <LegBaseSettings initialLegSettings={formFields} />
    </div>
  );
};

export default Leg;

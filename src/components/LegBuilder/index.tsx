import { useForm, SubmitHandler } from "react-hook-form";

import React from "react";
import SelectInput, { NumberInput } from "@components/common/inputs";
import { formatOptionType } from "utils/format-options";
import { ILegSettings } from "@global/types";
import Button from "@components/common/buttons";
import { strikeTypes } from "@global/types";
import { IoClose } from "react-icons/io5";
import LegBaseSettings from "./LegBaseSettings";

const initialLegSettings: ILegSettings = {
  id: -1, // to avoid conflict with added legs, which start from 0
  Segment: "Options",
  PositionType: "PositionType.Sell",
  Lots: 0,
  LegStopLoss: {
    Type: "LegTgtSLType.Percentage",
    Value: 0,
  },
  LegTarget: {
    Type: "LegTgtSLType.Percentage",
    Value: 0,
  },
  LegTrailSL: {
    Type: "None",
    Value: {
      InstrumentMove: 0,
      StopLossMove: 0,
    },
  },
  LegMomentum: {
    Type: "None",
    Value: 0,
  },
  ExpiryKind: "ExpiryType.Weekly",
  EntryType: "EntryType.EntryByStrikeType",
  StrikeParameter: 0,
  InstrumentKind: "LegType.CE",
  LegReentrySL: {
    Type: "ReentryType.ASAP",
    Value: 0,
  },
  LegReentryTP: {
    Type: "ReentryType.ASAP",
    Value: 0,
  },
};

const LegBuilder = (
  {
    onSubmit,
    onCancel,
  }: {
    onSubmit: (data: ILegSettings) => void;
    onCancel: () => void;
  }
) => {
  const [segment, setSegment] = React.useState("Options");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ILegSettings>({
    defaultValues: initialLegSettings,
  });

  const formFields = watch();

  console.log(formFields);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col items-center justify-center p-5 rounded-lg bg-gray-400/5"
    >
      <div className="flex flex-col justify-center gap-3 text-gray-700 sm:flex-row sm:items-center">
        <p className="font-semibold min-w-fit text-md">Select segments</p>
        <div className="min-w-fit">
          <Button
            id="Futures"
            label="Futures"
            className="rounded-r-none"
            isToggled={segment === "Futures"}
            onClick={() => {
              setSegment("Futures")
              setValue('Segment', 'Futures')
            }}
          />
          <Button
            id="Options"
            label="Options"
            className="rounded-l-none"
            isToggled={segment === "Options"}
            onClick={() => {
              setSegment("Options")
              setValue('Segment', 'Options')
            }}
          />
        </div>
      </div>

      <LegBaseSettings initialLegSettings={formFields} />

      <div className="flex gap-x-2">
        <Button
          id="Add Leg"
          label="Add Leg"
          isToggled
          className="px-10"
          onClick={handleSubmit(onSubmit)}
        />
        <Button
          id="Cancel"
          label="Cancel"
          className="px-10"
          onClick={() => {
            reset();
            onCancel();
          }}
        />
      </div>
    </form>
  );
};

export default LegBuilder;

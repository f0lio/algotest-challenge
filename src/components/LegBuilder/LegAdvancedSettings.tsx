import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { ILegSettings } from "@global/types";
import SelectInput, { NumberInput } from "@components/common/inputs";

const LegAdvancedSettings = ({
  initialLegSettings,
}: {
  initialLegSettings: ILegSettings;
}) => {
  const [enabledSettings, setEnabledSettings] = React.useState<{
    [key: string]: boolean;
  }>({} as any);
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

  const onSubmit: SubmitHandler<ILegSettings> = (data) => console.log(data);
  const formFields = watch();

  console.log(formFields);
  console.log(`formFields.LegTrailSL.Type: ${formFields.LegTrailSL.Type}`);

  return (
    <div className="flex flex-wrap justify-center py-5 rounded-lg gap-x-2 md:flex-nowrap">
      <div className="flex flex-col items-start justify-center gap-y-2">
        <div className="flex items-center justify-center px-2 gap-x-2">
          <input type="checkbox"
            id={`LegMomentum-${formFields.id}`}
            onChange={(e) => setEnabledSettings({
              ...enabledSettings
              , LegMomentum: e.target.checked
            })}
          />
          <label htmlFor={`LegMomentum-${formFields.id}`}>Simple Momentum</label>
        </div>
        <div className="flex gap-x-2">
          <SelectInput
            id={`LegMomentum-${formFields.id}`}
            width="200px"
            defaultValue={
              { value: "LegMomentum.PointsUp", label: "Points Up" }
            }
            options={[
              { value: "LegMomentum.PointsUp", label: "Points Up" },
              { value: "LegMomentum.PointsDown", label: "Points Down" },
              { value: "LegMomentum.PercentUp", label: "Percentage Up" },
              { value: "LegMomentum.PercentDown", label: "Percentage Down" },
              { value: "LegMomentum.UnderlyingPointsUp", label: "Underlying Points Up" },
              { value: "LegMomentum.UnderlyingPointsDown", label: "Underlying Points Down" },
              { value: "LegMomentum.UnderlyingPercentUp", label: "Underlying Percentage Up" },
              { value: "LegMomentum.UnderlyingPercentDown", label: "Underlying Percentage Down" },
            ]}
            register={register("LegMomentum.Type", { required: false })}
            isDisabled={!enabledSettings.LegMomentum}
            highlighted
          />
          <NumberInput
            id={`LegMomentum.Type-${formFields.id}`}
            defaultValue={0}
            register={register("LegMomentum.Value", {
              valueAsNumber: true,
            })}
            isDisabled={!enabledSettings.LegMomentum}
          />
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-y-2">
        <div className="flex items-center justify-center px-2 gap-x-2">
          <input type="checkbox"
            id={`LegTrailSL-${formFields.id}`}
            onChange={(e) => setEnabledSettings({
              ...enabledSettings
              , LegTrailSL: e.target.checked
            })}
          />
          <label htmlFor={`LegTrailSL-${formFields.id}`}>Trail SL</label>
        </div>
        <div className="flex gap-x-2">
          <SelectInput
            id={`LegTrailSL-${formFields.id}`}
            width="200px"
            defaultValue={
              { value: "LegTrailSL.Points", label: "Points" }
            }
            options={[
              { value: "LegTrailSL.Points", label: "Points" },
              { value: "LegTrailSL.Percent", label: "Percentage" },

            ]}
            register={register("LegTrailSL.Type", { required: false })}
            isDisabled={!enabledSettings.LegTrailSL}
            highlighted
          />
          <NumberInput
            id={`LegTrailSL.Min-${formFields.id}`}
            defaultValue={0}
            register={register("LegTrailSL.Value.InstrumentMove", {
              valueAsNumber: true,
            })}
            isDisabled={!enabledSettings.LegTrailSL}
          />
          <NumberInput
            id={`LegTrailSL.Min-${formFields.id}`}
            defaultValue={0}
            register={register("LegTrailSL.Value.StopLossMove", {
              valueAsNumber: true,
            })}
            isDisabled={!enabledSettings.LegTrailSL}
          />
        </div>
      </div>

    </div>
  );
};

export default LegAdvancedSettings;

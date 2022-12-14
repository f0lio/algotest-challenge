import SelectInput, { NumberInput } from "@components/common/inputs";
import { ILegSettings } from "@global/types";
import { strikeTypes } from "@global/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { formatOptionType } from "utils/format-options";

const LegBaseSettings = ({
  initialLegSettings,
}: {
  initialLegSettings: ILegSettings;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<ILegSettings>({
    defaultValues: initialLegSettings,
  });
  const onSubmit: SubmitHandler<ILegSettings> = (data) => console.log(data);
  const formFields = watch();

  return (
    <div className="flex flex-wrap justify-center p-5 rounded-lg gap-x-2 md:flex-nowrap">
      <NumberInput
        fieldName="Total lot"
        id={`total-lot-${formFields.id}`}
        min={0}
        defaultValue={formFields.Lots}
        register={register("Lots", {
          required: true,
          min: 0,
          valueAsNumber: true,
        })}
      />
      <SelectInput
        id={`PositionType-${formFields.id}`}
        fieldName="Position"
        defaultValue={{
          value: formFields.PositionType,
          label: formFields.PositionType.split(".")[1],
        }}
        options={[
          { value: "PositionType.Sell", label: "Sell" },
          { value: "PositionType.Buy", label: "Buy" },
        ]}
        register={register("PositionType", {
          required: true,
        })}
      />
      {initialLegSettings.Segment === "Options" && (
        <>
          <SelectInput
            id={`OptionType-${formFields.id}`}
            fieldName="Option Type"
            defaultValue={{ value: "LegType.CE", label: "Call" }}
            options={[
              { value: "LegType.CE", label: "Call" },
              { value: "LegType.PE", label: "Put" },
            ]}
            register={register("InstrumentKind", {
              required: true,
            })}
          />
          <SelectInput
            id={`ExpiryType-${formFields.id}`}
            fieldName="Expiry"
            defaultValue={formatOptionType(formFields.ExpiryKind)}
            options={[
              { value: "ExpiryType.Weekly", label: "Weekly" },
              { value: "ExpiryType.Monthly", label: "Monthly" },
            ]}
            register={register("ExpiryKind", {
              required: true,
            })}
          />
          <SelectInput
            id={`EntryType-${formFields.id}`}
            fieldName="Select Strike Criteria"
            defaultValue={{
              value: "EntryType.EntryByStrikeType",
              label: "Strike Type",
            }}
            options={[
              { value: "EntryType.EntryByStrikeType", label: "Strike Type" },
              {
                value: "EntryType.EntryByPremiumRange",
                label: "Premium Range",
              },
              {
                value: "EntryType.EntryByPremium",
                label: "Closest Premium",
              },
              {
                value: "EntryType.EntryByStraddleWidth",
                label: "Straddle Width",
              },
            ]}
            register={register("EntryType", {
              required: true,
            })}
          />

          {formFields.EntryType === "EntryType.EntryByStrikeType" && (
            <SelectInput
              id={`StrikeType-${formFields.id}`}
              fieldName="Strike Type"
              defaultValue={{
                value: "StrikeType.ATM",
                label: "ATM",
              }}
              options={strikeTypes.map((type) => ({
                value: type,
                label: type,
              }))}
              register={register("StrikeParameter", {
                required: true,
              })}
            />
          )}
          {formFields.EntryType === "EntryType.EntryByPremiumRange" && (
            <>
              <NumberInput
                id={`LowerRange-${formFields.id}`}
                fieldName="Lower Range"
                defaultValue={50}
                register={register("StrikeParameter.Lower", {
                  // required: true,
                  valueAsNumber: true,
                })}
              />
              <NumberInput
                id={`UpperRange-${formFields.id}`}
                fieldName="Upper Range"
                defaultValue={200}
                register={register("StrikeParameter.Upper", {
                  // required: true,
                  valueAsNumber: true,
                })}
              />
            </>
          )}
          {formFields.EntryType === "EntryType.EntryByPremium" && (
            <NumberInput
              id={`Premium-${formFields.id}`}
              fieldName="Premium"
              defaultValue={50}
              register={register("StrikeParameter", {
                valueAsNumber: true,
              })}
            />
          )}
          {formFields.EntryType === "EntryType.EntryByStraddleWidth" && (
            <div className="flex items-end">
              <div className="flex items-center gap-x-2">
                <p className="min-w-max">{"[ ATM Strike"}</p>
                <SelectInput
                  id={`StraddleWidthType-${formFields.id}`}
                  defaultValue={{
                    value: "Plus",
                    label: "+",
                  }}
                  options={[
                    { value: "Minus", label: "-" },
                    { value: "Plus", label: "+" },
                  ]}
                  register={register("StrikeParameter.Adjustment", {
                    valueAsNumber: true,
                  })}
                />
                <p className="min-w-max">(</p>
                <NumberInput
                  id={`StraddleWidth-${formFields.id}`}
                  className="w-24"
                  defaultValue={0.5}
                  register={register("StrikeParameter.Multiplier", {
                    valueAsNumber: true,
                  })}
                />
                <p className="min-w-max">{") x ATM Straddle Price )]"}</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LegBaseSettings;

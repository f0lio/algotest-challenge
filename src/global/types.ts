export const strikeTypes = [
  "ITM20",
  "ITM19",
  "ITM18",
  "ITM17",
  "ITM16",
  "ITM15",
  "ITM14",
  "ITM13",
  "ITM12",
  "ITM11",
  "ITM10",
  "ITM9",
  "ITM8",
  "ITM7",
  "ITM6",
  "ITM5",
  "ITM4",
  "ITM3",
  "ITM2",
  "ITM1",
  "ATM",
  "OTM1",
  "OTM2",
  "OTM3",
  "OTM4",
  "OTM5",
  "OTM6",
  "OTM7",
  "OTM8",
  "OTM9",
  "OTM10",
  "OTM11",
  "OTM12",
  "OTM13",
  "OTM14",
  "OTM15",
  "OTM16",
  "OTM17",
  "OTM18",
  "OTM19",
  "OTM20",
] as const;

export type TypeValue<T, V> = {
  Type: T;
  Value: V;
};

export type StrikeType = typeof strikeTypes[number];

export type PositionType = "PositionType.Sell" | "PositionType.Buy";

export type LegTgtSLType =
  | "LegTgtSLType.Percentage"
  | "LegTgtSLType.Points"
  | "LegTgtSLType.UnderlyingPercentage";
export type LegTrailSLType =
  | "None"
  | "TrailStopLossType.Points"
  | "TrailStopLossType.Percentage";

  export type ExpiryKindType = "ExpiryType.Weekly" | "ExpiryType.Monthly";
  export type EntryKindType =
  | "EntryType.EntryByStrikeType"
  | "EntryType.EntryByPremium"
  | "EntryType.EntryByPremiumRange"
  | "EntryType.EntryByStraddleWidth";
  
  export type LegMomentumType =
  | "SimpleMomentum.PointsUp"
  | "SimpleMomentum.PointsDown"
  | "SimpleMomentum.UnderlyingPointsUp"
  | "SimpleMomentum.UnderlyingPointsDown"
  | "SimpleMomentum.PercentageUp"
  | "SimpleMomentum.PercentageDown"
  | "SimpleMomentum.UnderlyingPercentageUp"
  | "SimpleMomentum.UnderlyingPercentageDown"
  | "None"


export type StrikeParameterType =
  | StrikeType
  | number
  | IPremiumRange
  | IStraddleWidth;

export type InstrumentKindType = "LegType.CE" | "LegType.PE";

export interface IStraddleWidth {
  Adjustment: "Plus" | "Minus";
  Multiplier: number;
}

export interface IPremiumRange {
  Lower: number;
  Upper: number;
}

export interface ILegTarget extends TypeValue<LegTgtSLType, number> {}

export interface ILegTrailSL {
  Type: LegTrailSLType;
  Value: {
    InstrumentMove: number;
    StopLossMove: number;
  };
}

export interface ILegMomentum extends TypeValue<LegMomentumType, number> {}

export interface ILegReentry
  extends TypeValue<"ReentryType.ASAP" | "ReentryType.ASAPReverse", number> {}

// // //

export interface ILegSettings {
  // should not be sent to server, just for UI
  id: number;
  Segment: string;
  // // // // //
  PositionType: PositionType;
  Lots: number;
  LegStopLoss: ILegTarget;
  LegTarget: ILegTarget;
  LegTrailSL: ILegTrailSL;
  LegMomentum: ILegMomentum;
  ExpiryKind: ExpiryKindType;
  EntryType: EntryKindType;
  StrikeParameter: StrikeParameterType;
  InstrumentKind: InstrumentKindType;
  LegReentrySL: ILegReentry;
  LegReentryTP: ILegReentry;
}

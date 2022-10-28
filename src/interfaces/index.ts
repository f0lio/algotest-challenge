import {
  EntryKindType,
  ExpiryKindType,
  InstrumentKindType,
  LegMomentumType,
  LegTgtSLType,
  LegTrailSLType,
  PositionType,
  StrikeParameterType,
} from "./types";

export type TypeValue<T, V> = {
  Type: T;
  Value: V;
};

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
  // // //
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

import Button from "@components/common/buttons";
import { ILegSettings } from "@interfaces/index";
import React from "react";
import LegBuilder from ".";
import Leg from "./Leg";

const LegBuilderContainer = () => {
  const [showLegBuilder, setShowLegBuilder] = React.useState(false);
  const [legs, setLegs] = React.useState<ILegSettings[]>([]);
  console.log(legs);
  return (
    <div>
      <div className="flex justify-between items-center py-2">
        <p>Legs</p>
        <Button
          id="add leg"
          label="Add Leg"
          onClick={() => setShowLegBuilder(!showLegBuilder)}
          isToggled={!showLegBuilder}
        />
      </div>
      {showLegBuilder && (
        <LegBuilder
          onSubmit={(data) => setLegs([...legs, { ...data, id: legs.length }])}
          onCancel={() => setShowLegBuilder(false)}
        />
      )}

      {legs.map((leg) => (
        <Leg
          segment={leg.Segment}
          key={leg.id}
          legSettings={leg}
          onDelete={() => setLegs(legs.filter((l) => l.id !== leg.id))}
        />
      ))}
    </div>
  );
};

export default LegBuilderContainer;

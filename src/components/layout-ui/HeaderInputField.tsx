import React from "react";
import { Input } from "../ui/input";
import ButtonComponent from "./Button";
import { FaMagnifyingGlass } from "react-icons/fa6";
import SelectField from "./SelectField";
export default function HeaderInputField({ type }: { type: string }) {
  return (
    <div
      className={`flex justify-between gap-2 bg-primary-1 max-w-[40%] ${
        type === "left" ? "rounded-l-full" : "rounded-r-full"
      }   p-1.5 `}
    >
      {type === "left" && (
        <ButtonComponent
          className={`bg-secondary-1 text-primary-1`}
          type="rounded-button"
        >
          <FaMagnifyingGlass />
        </ButtonComponent>
      )}
      <Input
        className="border-none text-lg text-secondary-2 font-inter "
        placeholder={
          type === "left" ? "Search credlist..." : "Search Locations..."
        }
      />
      <SelectField
        placeholder={type === "left" ? "All Categories" : "Location"}
        values={
          type === "left"
            ? [
                { name: "Market", value: "market" },
                { name: "Placement", value: "placement" },
              ]
            : [
                { name: "London", value: "london" },
                { name: "US", value: "us" },
                { name: "Nigeria", value: "nigeria" },
              ]
        }
      />
      {type === "right" && (
        <ButtonComponent
          className={`bg-primary-2 text-primary-1`}
          type="rounded-button"
        >
          <FaMagnifyingGlass />
        </ButtonComponent>
      )}
    </div>
  );
}

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Value = {
  name: string;
  value: string;
};

export default function SelectField({
  placeholder,
  type,
  values,
}: {
  placeholder: string;
  type: string;
  values: Array<Value>;
}) {
  return (
    <Select>
      <SelectTrigger
        className={`${
          type === "footer" &&
          "text-base border border-primary-5 bg-primary-7 !text-primary-4"
        } w-[180px] border-none text-base text-secondary-3  font-inter`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent
        className={
          type === "footer"
            ? "bg-primary-2 text-primary-4 border-primary-3"
            : "bg-primary-1"
        }
      >
        {values.map((value) => (
          <SelectItem
            key={value.name}
            className="hover:bg-secondary-1 font-inter cursor-pointer transition-all duration-500 hover:text-primary-1"
            value={value.value}
          >
            {value.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

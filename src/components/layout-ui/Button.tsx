import React, { ReactNode } from "react";
import { Button } from "../ui/button";

export default function ButtonComponent({
  type,
  children,
  className,
}: {
  children: string | ReactNode;
  className?: string;
  type: string;
}) {
  if (type === "primary")
    return (
      <Button className="rounded-3xl bg-primary-1 font-inter text-secondary-1">
        {children}
      </Button>
    );
  if (type === "rounded-button")
    return (
      <Button
        className={`rounded-full ${className} font-inter p-3.5 py-[22px]`}
      >
        {children}
      </Button>
    );
}

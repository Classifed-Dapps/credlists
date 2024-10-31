import React from "react";
import ButtonComponent from "./Button";
import InputContainer from "./InputContainer";

export default function Header() {
  return (
    <div className="flex justify-between gap-4 items-center bg-secondary-1 px-9 py-4 fixed w-full">
      <h1 className="font-mansalva font-[400] text-4xl text-primary-1">
        CredList
      </h1>
      <InputContainer />
      <ButtonComponent type="primary">Connect Wallet</ButtonComponent>
    </div>
  );
}

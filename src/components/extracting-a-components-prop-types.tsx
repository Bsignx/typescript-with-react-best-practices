import { ComponentPropsWithoutRef } from "react";
import { listOfAddresses, Person } from ".";

export const CustomComponent = (
  props: ComponentPropsWithoutRef<typeof Person>
) => {
  return <div>{props.name}</div>;
};

export const ExtractingComponentsPropTypesExample = () => (
  <CustomComponent name="John Doe" age={10} listOfAddresses={listOfAddresses} />
);

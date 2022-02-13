import { ComponentProps, ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<ComponentProps<"button">, "children">;

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};

type InputProps = ComponentPropsWithoutRef<"input">;

export const Input = (props: InputProps) => {
  return <input {...props} />;
};

// example of use
export const WrappingHtmlElementsExample = () => (
  <>
    <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
      Button Label
    </CustomButton>
    <Input aria-label="cool" />
  </>
);

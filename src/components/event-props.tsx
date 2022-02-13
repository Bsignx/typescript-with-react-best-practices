import { ChangeEvent, MouseEvent, PropsWithChildren } from "react";

export const EventPropsExample = () => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    alert(`${event.type} on ${event.currentTarget.tagName}`);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    alert(`${event.type} on ${event.currentTarget.tagName}`);
  };
  return (
    <>
      <Button onClick={handleClick}>Event Props</Button>
      <Input onChange={handleChange} />
    </>
  );
};

// button example

type ButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ onClick, children }: PropsWithChildren<ButtonProps>) => (
  <button onClick={onClick}>{children}</button>
);

// input example

type InputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ onChange }: PropsWithChildren<InputProps>) => (
  <input type="text" onChange={onChange} />
);

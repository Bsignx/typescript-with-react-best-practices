import { ComponentType } from "react";

type PrivateProps = {
  isLoggedIn: boolean;
  Component: ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="John Doe" />;
  } else {
    return <Login />;
  }
};

type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return <div>Private Profile component. Name is {name}</div>;
};

const Login = () => {
  return <div>Please login to continue</div>;
};

// example of use
export const ComponentPropExample = () => (
  <Private isLoggedIn={false} Component={Profile} />
);

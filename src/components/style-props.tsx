import { CSSProperties, PropsWithChildren } from "react";

type ContainerProps = {
  style?: CSSProperties;
};

const Container = ({ children, style }: PropsWithChildren<ContainerProps>) => (
  <div style={style}>{children}</div>
);

// example of use

export const StylePropsExample = () => (
  <Container>Text content goes here</Container>
);

import React from "react";

import {
  EventPropsExample,
  BasicPropsExample,
  Counter as UseReducerExample,
  StylePropsExample,
  UseStateExample,
  UseContextExample,
  CounterClass as ClassComponentExample,
  ComponentPropExample,
  UseRefExample,
  GenericPropsExample,
  WrappingHtmlElementsExample,
  PolymorphicExample,
  RestrictingPropsExample,
  TemplateLiteralsAndExcludeExample,
  ExtractingComponentsPropTypesExample,
} from "./components";

function App() {
  return (
    <>
      <BasicPropsExample />
      <EventPropsExample />
      <StylePropsExample />
      <UseStateExample />
      <UseReducerExample />
      <UseRefExample />
      <UseContextExample />
      <ClassComponentExample />
      <ComponentPropExample />
      <GenericPropsExample />
      <WrappingHtmlElementsExample />
      <PolymorphicExample />
      <RestrictingPropsExample />
      <TemplateLiteralsAndExcludeExample />
      <ExtractingComponentsPropTypesExample />
    </>
  );
}

export default App;

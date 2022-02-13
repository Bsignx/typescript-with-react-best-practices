import { useState } from "react";

type UserState = {
  name: string;
  age: number;
  email: string;
};

export const UseStateExample = () => {
  // inference of type of useState
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isMarried, setIsMarried] = useState(false);
  const [user, setUser] = useState<UserState>({} as UserState);
  const [user2, setUser2] = useState<UserState | null>(null);

  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{isMarried ? "Married" : "Not Married"}</p>
      <h1>{user?.name}</h1>
      <h1>{user2?.name}</h1>
    </>
  );
};

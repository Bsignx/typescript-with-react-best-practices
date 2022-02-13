import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: Dispatch<SetStateAction<AuthUser | null>>;
};

type UserContextProviderProps = {
  children: ReactNode;
};

// export const UserContext = createContext<UserContextType | null>(null)
export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserContextProvider");
  }
  return context;
};

// example of use context

export const UseContextExample = () => (
  <UserContextProvider>
    <Login />
  </UserContextProvider>
);

const Login = () => {
  const { user, setUser } = useUser();
  return (
    <>
      <h1>{user?.name}</h1>
      <button
        onClick={() =>
          setUser({
            name: "John Doe",
            email: "johndoe@gmail.com",
          })
        }
      >
        Log in
      </button>
    </>
  );
};

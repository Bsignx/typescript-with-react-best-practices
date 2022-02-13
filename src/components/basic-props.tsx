export const listOfAddresses = [
  {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
  {
    street: "124 Main St",
    city: "Anytown",
    state: "CA",
  },
];

export const BasicPropsExample = () => (
  <Person
    age={42}
    name="John Doe"
    isMarried
    listOfAddresses={listOfAddresses}
  />
);

// extract the type of the listOfAddresses for separate file
type ListOfAddresses = {
  street: string;
  city: string;
  state: string;
};

type PersonProps = {
  name: string;
  age: number;
  job?: string;
  isMarried?: boolean;
  listOfAddresses: ListOfAddresses[];
};

export const Person = ({
  age,
  listOfAddresses,
  name,
  job,
  isMarried = false,
}: PersonProps) => (
  <div>
    <h1>{name}</h1>
    <p>{age}</p>
    <p>{job}</p>
    <p>{isMarried ? "Married" : "Not Married"}</p>
    {listOfAddresses.map(({ city, state, street }) => (
      <>
        <p>{street}</p>
        <p>{city}</p>
        <p>{state}</p>
      </>
    ))}
  </div>
);

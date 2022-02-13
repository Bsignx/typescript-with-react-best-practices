type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends { id: number }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id}
          </div>
        );
      })}
    </div>
  );
};

// example of use
export const GenericPropsExample = () => (
  <List
    items={[
      {
        id: 1,
        first: "Bruce",
        last: "Wayne",
      },
      {
        id: 2,
        first: "Clark",
        last: "Kent",
      },
      {
        id: 3,
        first: "Princess",
        last: "Diana",
      },
    ]}
    onClick={(item) => console.log(item)}
  />
);

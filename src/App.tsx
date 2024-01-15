import { useState } from "react";

type TypographyProps = {
  children: React.ReactNode;
  size?: "small" | "large";
};

type ParagraphProps = {
  color: string;
};

const Paragraph = ({
  children,
  size,
  color,
}: TypographyProps & ParagraphProps) => {
  return (
    <p
      style={{
        fontSize: size === "small" ? "1.5rem" : "3rem",
        color: color,
      }}
    >
      {children}
    </p>
  );
};

const Title = ({
  children,
  size,
}: {
  children: React.ReactNode;
  size?: "small" | "large";
}) => {
  return (
    <h1
      style={{
        fontSize: size === "small" ? "1.5rem" : "3rem",
      }}
    >
      {children}
    </h1>
  );
};

const titleDefaultProps = {
  size: "small",
};

Title.defaultProps = titleDefaultProps;

const user = {
  id: 1,
  name: "John Doe",
  age: 30,
  isAdmin: true,
  birthDate: new Date("1980-01-01"),
};

type UserProps = typeof user;

function sumNumbers(a: number, b: number) {
  return a + b;
}

function List<ItemType>({
  items,
  render,
}: {
  items: ItemType[];
  render: (items: ItemType, index: number) => React.ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => {
        return render(item, index);
      })}
    </ul>
  );
}

function App() {
  const [count, setCount] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Doe",
    },
  ];

  return (
    <>
      <Title size="large">
        <p>
          name: <b>Gustavo</b>
        </p>
      </Title>
      <Paragraph color="red" size="small">
        ola
      </Paragraph>

      <List
        items={items}
        render={(item, index) => {
          if (item.id === 1) {
            return <p>{item.name}</p>;
          }

          return <h3>{item.name}</h3>;
        }}
      />
    </>
  );
}

export default App;

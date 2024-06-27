type UserAddress = {
  city: string;
  country: string;
};

interface User {
  [key: string]: string | number | UserAddress;
}

export const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

export const poly: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

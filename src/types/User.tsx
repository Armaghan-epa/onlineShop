export type User = {
  id: number;
  email: string;
  username: string;
  password: String;
  name: {
    firstname: String;
    lastname: String;
  };
  address: {
    city: string;
    street: String;
    number: String;
    zipcode: String;
    geolocation: {
      lat: String;
      long: String;
    };
  };
  phone: string;
};
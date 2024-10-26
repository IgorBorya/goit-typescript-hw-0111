type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  const user: User = {
    name: "Default Name",
    surname: "Default Surname",
    email: "default@mail.com",
    password: "defaultPassword",
  };

  Object.assign(user, initialValues);

  console.log("Оновлений користувач:", user);
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

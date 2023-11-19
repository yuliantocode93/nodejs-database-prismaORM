function tagFunction(array, ...args) {
  console.log(array);
  console.log(args);
}

test("tag function", () => {
  const firstName = "yuli";
  const lastName = "anto";

  tagFunction`Hello ${firstName} ${lastName}!, How are you`;
  tagFunction`Bye ${firstName} ${lastName}!, see you later`;
});

test("tag function sql", () => {
  const name = "yuli';DROP table users;";
  const age = 30;

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});

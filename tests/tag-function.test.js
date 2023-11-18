function tagFunction(array, ...args) {
  console.log(array);
  console.log(args);
}

test("tag function", () => {
  const name = "yuli";
  const lastName = "anto";

  tagFunction`Hello ${name} ${lastName}!, How are you`;
  tagFunction`Bye ${name} ${lastName}!, see you later`;
});

test("tag function sql", () => {
  const name = "yuli';DROP table users;";
  const age = 30;

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});

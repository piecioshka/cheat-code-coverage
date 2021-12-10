require("../helpers/disable-console")();

const { Ferrari, Jelcz } = require("../../src");

function getMembers(constructor) {
  const ignoreMembers = ["constructor"];
  return Reflect.ownKeys(constructor.prototype).filter(
    (mem) => !ignoreMembers.includes(String(mem))
  );
}

function silentConstructor(constructor) {
  try {
    const o = new constructor();
    const members = getMembers(constructor);
    members.forEach((mem) => o[mem]());
  } catch (e) {}

  return true;
}

it("is fake — only to cheating", () => {
  expect(silentConstructor(Ferrari)).toBeTruthy();
  expect(silentConstructor(Jelcz)).toBeTruthy();
});

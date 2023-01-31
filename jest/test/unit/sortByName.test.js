const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ]

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]

    const result = sorting.sortByName(input)
    expect(result).toEqual(expected);
  });


it("Equal books names not sorted", () => {
  expect(sorting.sortByName(["Властелин Колец", "Властелин Колец"])).toEqual([
    "Властелин Колец",
    "Властелин Колец"
  ]);
});
});
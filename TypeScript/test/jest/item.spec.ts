import { Item } from "@/item";

describe("Item", () => {
  it("should create new Item", () => {
    const item = new Item("foo", 5, 5);
    expect(item.name).toStrictEqual("foo");
    expect(item.sellIn).toStrictEqual(5);
    expect(item.quality).toStrictEqual(5);
  });
});

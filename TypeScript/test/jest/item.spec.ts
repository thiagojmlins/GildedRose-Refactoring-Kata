import { Item, AgedBrie, BackstagePasses, Sulfuras, Conjured } from "@/item";

describe("createItem", () => {
  it("should convert into AgedBrie item type", () => {
    const item = Item.createItem("Aged Brie", 5, 40);
    expect(item instanceof AgedBrie).toBeTruthy();
  });

  it("should convert into BackstagePasses item type", () => {
    const item = Item.createItem(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      40
    );
    expect(item instanceof BackstagePasses).toBeTruthy();
  });

  it("should convert into Sulfuras item type", () => {
    const item = Item.createItem("Sulfuras, Hand of Ragnaros", 5, 40);
    expect(item instanceof Sulfuras).toBeTruthy();
  });

  it("should convert into Item type", () => {
    const item = Item.createItem("Elixir of the Mongoose", 5, 40);
    expect(item instanceof Item).toBeTruthy();
  });

  it("should convert into Conjured item type", () => {
    const item = Item.createItem("Conjured Mana Cake", 5, 40);
    expect(item instanceof Conjured).toBeTruthy();
  });
});

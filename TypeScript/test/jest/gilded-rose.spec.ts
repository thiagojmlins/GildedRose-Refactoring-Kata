import { Item } from "@/item";
import { GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  describe("Regular items", () => {
    it("should decrease one unit in sellIn and quality for +5 Dexterity Vest", () => {
      const gildedRose = new GildedRose([
        Item.createItem("+5 Dexterity Vest", 10, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].quality).toEqual(19);
    });

    it("should decrease two units in quality when sellIn equals zero for Elixir of the Mongoose", () => {
      const gildedRose = new GildedRose([
        Item.createItem("Elixir of the Mongoose", 0, 6),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(4);
    });

    it("should not decrease quality of Elixir of the Mongoose when equals zero", () => {
      const gildedRose = new GildedRose([
        Item.createItem("Elixir of the Mongoose", 0, 0),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  });

  describe("Aged Brie", () => {
    it("should increase quality and reduce sellIn for Aged Brie", () => {
      const gildedRose = new GildedRose([Item.createItem("Aged Brie", 1, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(2);
      expect(items[0].sellIn).toEqual(0);
    });

    it("should not increase Aged Brie quality when equals 50", () => {
      const gildedRose = new GildedRose([Item.createItem("Aged Brie", 1, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    });
  });

  describe("Backstage passes", () => {
    it("should increase Backstage passes to a TAFKAL80ETC concert quality in 1 when sellIn is greater than 10", () => {
      const gildedRose = new GildedRose([
        Item.createItem("Backstage passes to a TAFKAL80ETC concert", 15, 12),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(13);
    });

    it("should increase Backstage passes to a TAFKAL80ETC concert quality in 2 when sellIn is greater than 5 and lower than 10", () => {
      const gildedRose = new GildedRose([
        Item.createItem("Backstage passes to a TAFKAL80ETC concert", 9, 12),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(14);
    });

    it("should increase Backstage passes to a TAFKAL80ETC concert quality in 2 when sellIn is 10", () => {
      const gildedRose = new GildedRose([
        Item.createItem("Backstage passes to a TAFKAL80ETC concert", 10, 12),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(14);
    });

    it("should increase Backstage passes to a TAFKAL80ETC concert quality in 3 when sellIn is greater than 0 and lower than 5", () => {
      const gildedRose = new GildedRose([
        Item.createItem("Backstage passes to a TAFKAL80ETC concert", 4, 12),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(15);
    });

    it("should increase Backstage passes to a TAFKAL80ETC concert quality in 3 when sellIn is 5", () => {
      const gildedRose = new GildedRose([
        Item.createItem("Backstage passes to a TAFKAL80ETC concert", 5, 12),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(15);
    });

    it("should decrease Backstage passes to a TAFKAL80ETC concert to zero when sellIn equals zero", () => {
      const gildedRose = new GildedRose([
        Item.createItem("Backstage passes to a TAFKAL80ETC concert", 0, 12),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    it("should not decrease Backstage passes to a TAFKAL80ETC concert when quality and sellIn equals zero", () => {
      const gildedRose = new GildedRose([
        Item.createItem("Backstage passes to a TAFKAL80ETC concert", 0, 0),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  });

  describe("Sulfuras, Hand of Ragnaros", () => {
    it("should not alter quality or sellIn for Sulfuras", () => {
      const gildedRose = new GildedRose([
        Item.createItem("Sulfuras, Hand of Ragnaros", 0, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(80);
    });

    it("should not alter quality or sellIn for Sulfuras when quality is negative", () => {
      const gildedRose = new GildedRose([
        Item.createItem("Sulfuras, Hand of Ragnaros", -1, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(80);
    });
  });

  describe.skip("Conjured items", () => {
    it("should decrease quality in 2 for Conjured Mana Cake", () => {
      const gildedRose = new GildedRose([
        Item.createItem("Conjured Mana Cake", 5, 10),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(8);
    });

    it("should decrease quality in 4 for Conjured Mana Cake when sellIn equals 0", () => {
      const gildedRose = new GildedRose([
        Item.createItem("Conjured Mana Cake", 0, 10),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(6);
    });
  });
});

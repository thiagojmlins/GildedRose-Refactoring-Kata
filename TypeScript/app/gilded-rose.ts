import { Item } from "@/item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    const items = this.doUpdateQuality();
    return items;
  }

  doUpdateQuality() {
    for (let item of this.items) {
      switch (item.name) {
        case "Aged Brie":
          updateQualityForAgedBrie(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          updateQualityForBackstagePasses(item);
          break;
        case "Sulfuras, Hand of Ragnaros":
          updateQualityForSulfuras(item);
          break;
        default:
          updateQualityForNormalItem(item);
          break;
      }
      item.sellIn--;
    }

    return this.items;
  }
}

const isQualityNotMaximum = (item: Item) => item.quality < 50;
const isQualityNotMinimum = (item: Item) => item.quality > 0;

const increaseQuality = (item: Item) => item.quality++;
const decreaseQuality = (item: Item) => item.quality--;

const updateQualityForBackstagePasses = (item: Item) => {
  increaseQuality(item);
  if (item.sellIn < 11 && isQualityNotMaximum(item)) {
    increaseQuality(item);
  }
  if (item.sellIn < 6 && isQualityNotMaximum(item)) {
    increaseQuality(item);
  }

  if (item.sellIn <= 0) {
    item.quality = 0;
  }
};

const updateQualityForAgedBrie = (item: Item) => {
  if (isQualityNotMaximum(item)) {
    increaseQuality(item);
  }

  if (item.sellIn <= 0) {
    item.quality++;
  }
};

const updateQualityForNormalItem = (item: Item) => {
  if (isQualityNotMinimum(item)) {
    decreaseQuality(item);
  }

  if (item.sellIn <= 0) {
    if (isQualityNotMinimum(item)) {
      decreaseQuality(item);
    }
  }
};

const updateQualityForSulfuras = (item: Item) => {
  item.quality = 80;
};

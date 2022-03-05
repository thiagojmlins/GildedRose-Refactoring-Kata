export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  static createItem(name: string, sellIn: number, quality: number): Item {
    switch (name) {
      case "Aged Brie":
        return new AgedBrie(sellIn, quality);
      case "Backstage passes to a TAFKAL80ETC concert":
        return new BackstagePasses(sellIn, quality);
      case "Sulfuras, Hand of Ragnaros":
        return new Sulfuras(sellIn);
      default:
        return new Item(name, sellIn, quality);
    }
  }

  updateQuality() {
    if (this.quality > 0) {
      this.quality--;
    }

    if (this.sellIn <= 0) {
      if (this.quality > 0) {
        this.quality--;
      }
    }
  }
}

export class AgedBrie extends Item {
  constructor(sellIn: number, quality: number) {
    super("Aged Brie", sellIn, quality);
  }

  updateQuality() {
    if (this.quality < 50) {
      this.quality++;
    }

    if (this.sellIn <= 0 && this.quality < 50) {
      this.quality++;
    }
  }
}

export class BackstagePasses extends Item {
  constructor(sellIn: number, quality: number) {
    super("Backstage passes to a TAFKAL80ETC concert", sellIn, quality);
  }

  updateQuality() {
    this.quality++;
    if (this.sellIn < 11 && this.quality < 50) {
      this.quality++;
    }
    if (this.sellIn < 6 && this.quality < 50) {
      this.quality++;
    }

    if (this.sellIn <= 0) {
      this.quality = 0;
    }
  }
}

export class Sulfuras extends Item {
  constructor(sellIn: number) {
    super("Sulfuras, Hand of Ragnaros", sellIn, 80);
  }

  updateQuality() {}
}

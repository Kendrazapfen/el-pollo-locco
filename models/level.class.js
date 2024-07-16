class Level {
  enemies;
  clouds;
  bottles;
  backgroundObjects;
  level_end_x = 2200;
  coins;

  constructor(
    enemies,
    clouds,
    coins,
    bottles,
    backgroundObjects,
    collectedCoins
  ) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.coins = coins;
    this.bottles = bottles;
    this.collectedCoins = collectedCoins;
    this.backgroundObjects = backgroundObjects;
  }
}

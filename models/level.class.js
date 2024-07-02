class Level {
  enemies;
  clouds;
  bottle;
  backgroundObjects;
  level_end_x = 2200;
  coins;

  constructor(
    enemies,
    clouds,
    coins,
    bottle,
    backgroundObjects,
    collectedCoins
  ) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.coins = coins;
    this.bottle = bottle;
    this.collectedCoins = collectedCoins;
    this.backgroundObjects = backgroundObjects;
  }
}

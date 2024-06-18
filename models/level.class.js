class Level {
  enemies;
  clouds;
  bottle;
  backgroundObjects;
  level_end_x = 2200;
  coin;

  constructor(
    enemies,
    clouds,
    coin,
    bottle,
    backgroundObjects,
    collectedCoins
  ) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.coin = coin;
    this.bottle = bottle;
    this.collectedCoins = collectedCoins;
    this.backgroundObjects = backgroundObjects;
  }
}

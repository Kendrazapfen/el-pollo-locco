class Level {
  enemies;
  clouds;
  coin;
  bottle;
  backgroundObjects;
  level_end_x = 2200;

  constructor(enemies, clouds, coin, bottle, backgroundObjects) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.coin = coin;
    this.bottle = bottle;
    this.backgroundObjects = backgroundObjects;
  }
}

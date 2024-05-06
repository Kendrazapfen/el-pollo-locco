class StatusbarCoins extends Statusbar {
  IMAGES = [
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
    'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 30;
    this.y = 5;
    this.width = 170;
    this.height = 70;
    this.setPercentage(100);
  }
}

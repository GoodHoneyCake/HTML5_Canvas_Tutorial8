export class Point {
  constructor(x, y) {
    this.x = x || 100;
    this.y = y || 100;
  }
  add(point) {
    this.x += point.x;
    this.y += point.y;
    return this;
  }

  subtract(point) {
    this.x -= point.x;
    this.y -= point.y;
    return this;
  }

  reduce(value) {
    this.x *= value;
    this.y *= value;
    return this;
  }

  collide(point, width, height) {
    if (
      this.x >= point.x &&
      this.x <= point.x + width &&
      this.y >= point.y &&
      this.y <= point.y + height
    ) {
      return true;
    } else {
      return false;
    }
  }
  clone() {
    return new Point(this.x, this.y);
  }
}

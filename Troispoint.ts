import { Point } from "./point";

export class TroisPoint {
  private _p1: Point;
  private _p2: Point;
  private _p3: Point;

  constructor(p1: Point, p2: Point, p3: Point) {
    this._p1 = p1;
    this._p2 = p2;
    this._p3 = p3;
  }

  get p1(): Point {
    return this._p1;
  }
  set p1(value: Point) {
    this._p1 = value;
  }

  get p2(): Point {
    return this._p2;
  }
  set p2(value: Point) {
    this._p2 = value;
  }

  get p3(): Point {
    return this._p3;
  }
  set p3(value: Point) {
    this._p3 = value;
  }

  calculerPerimetre(): number {
    return (
      Point.distance(this.p1, this.p2) +
      Point.distance(this.p2, this.p3) +
      Point.distance(this.p3, this.p1)
    );
  }

  calculerAire(): number {
    const a = Point.distance(this.p1, this.p2);
    const b = Point.distance(this.p2, this.p3);
    const c = Point.distance(this.p3, this.p1);
    const s = (a + b + c) / 2; // demi-périmètre

    // Formule de Héron
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }

  afficher(): string {
    return `TroisPoint[${this.p1.afficher()}, ${this.p2.afficher()}, ${this.p3.afficher()}]`;
  }
}

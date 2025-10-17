export class Point {
    private _abs: number;
    private _ord: number;

    constructor(abs: number, ord: number) {
        this._abs = abs;
        this._ord = ord;
    }

    get abs(): number { return this._abs; }
    set abs(value: number) { this._abs = value; }

    get ord(): number { return this._ord; }
    set ord(value: number) { this._ord = value; }

    calculateDistance(p: Point): number {
        return Math.sqrt(Math.pow(this.abs - p.abs, 2) + Math.pow(this.ord - p.ord, 2));
    }

    static distance(p1: Point, p2: Point): number {
        return Math.sqrt(Math.pow(p1.abs - p2.abs, 2) + Math.pow(p1.ord - p2.ord, 2));
    }

    calculateMiddle(p: Point): Point {
        const xmid = (this.abs + p.abs) / 2;
        const ymid = (this.ord + p.ord) / 2;
        return new Point(xmid, ymid);
    }

    afficher(): string {
        return `(${this.abs}, ${this.ord})`;
    }
}

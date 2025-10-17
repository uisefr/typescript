import { Point } from "./point";
import { TroisPoint } from "./troispoint";

export class TestExercice {
  static main(): void {
    const p1 = new Point(0, 0);
    const p2 = new Point(3, 4);

    console.log(`Distance entre ${p1.afficher()} et ${p2.afficher()} : ${p1.calculateDistance(p2)}`);
    console.log(`Distance (static) entre ${p1.afficher()} et ${p2.afficher()} : ${Point.distance(p1, p2)}`);

    const pm = p1.calculateMiddle(p2);
    console.log(`Point milieu entre ${p1.afficher()} et ${p2.afficher()} : ${pm.afficher()}`);

    const p3 = new Point(6, 0);
    const triangle = new TroisPoint(p1, p2, p3);

    console.log(`\nTriangle : ${triangle.afficher()}`);
    console.log(`Périmètre : ${triangle.calculerPerimetre().toFixed(2)}`);
    console.log(`Aire : ${triangle.calculerAire().toFixed(2)}`);
  }
}

// Lancer le programme
TestExercice.main();

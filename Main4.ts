import MaDate from "./MaDate";

export class Main {
  public static main(): void {
    const d1 = new MaDate(31, 12, 2016);
    console.log("Date initiale :", d1.afficher());
    d1.ajouterUnJour();
    console.log("Après ajout d’un jour :", d1.afficher()); // 01/01/2017

    const d2 = new MaDate(28, 2, 2018);
    console.log("\nDate initiale :", d2.afficher());
    d2.ajouterUnJour();
    console.log("Après ajout d’un jour :", d2.afficher()); // 01/03/2018

    const d3 = new MaDate(28, 2, 2020); // année bissextile
    console.log("\nDate initiale :", d3.afficher());
    d3.ajouterUnJour();
    console.log("Après ajout d’un jour :", d3.afficher()); // 29/02/2020

    const d4 = new MaDate(15, 1, 2023);
    console.log("\nDate initiale :", d4.afficher());
    d4.ajouterPlusieursJours(50);
    console.log("Après ajout de 50 jours :", d4.afficher());

    const d5 = new MaDate(31, 1, 2024);
    console.log("\nDate initiale :", d5.afficher());
    d5.ajouterUnMois();
    console.log("Après ajout d’un mois :", d5.afficher()); // 29/02/2024 (année bissextile)
    d5.ajouterUnAn();
    console.log("Après ajout d’un an :", d5.afficher()); // 28/02/2025
  }
}

Main.main();

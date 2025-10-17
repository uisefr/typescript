"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Formation_1 = require("./Formation");
const stagiaire_1 = require("./stagiaire");
class Main {
    static main() {
        const formation = Main.initialiserDonnees();
    }
    static initialiserDonnees() {
        const s1 = new stagiaire_1.Stagiaire("Dupont", [12, 14, 16]);
        const s2 = new stagiaire_1.Stagiaire("Durand", [10, 11, 9]);
        const s3 = new stagiaire_1.Stagiaire("Dupond", [15, 18, 17]);
        const s4 = new stagiaire_1.Stagiaire("Duran", [8, 7, 6]);
        const formation = new Formation_1.Formation("TypeScript", 5, [s1, s2, s3, s4]);
        console.log(`Moyenne de la formation ${formation.getIntitule()} : ${formation.calculerMoyenneFormation().toFixed(2)}`);
        console.log(`Le meilleur stagiaire est ${formation.getStagiaires()[formation.getIndexMax()].getNom()} avec une moyenne de ${formation.getStagiaires()[formation.getIndexMax()].calculerMoyenne().toFixed(2)}`);
        formation.afficherNomMax();
        return formation;
    }
}
exports.Main = Main;

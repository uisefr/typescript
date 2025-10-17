"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formation = void 0;
class Formation {
    constructor(intitule, nbrJours, stagiaires) {
        this.intitule = intitule;
        this.nbrJours = nbrJours;
        this.stagiaires = stagiaires;
    }
    // Getters et Setters
    getIntitule() {
        return this.intitule;
    }
    setIntitule(intitule) {
        this.intitule = intitule;
    }
    getNbrJours() {
        return this.nbrJours;
    }
    setNbrJours(nbrJours) {
        this.nbrJours = nbrJours;
    }
    getStagiaires() {
        return this.stagiaires;
    }
    setStagiaires(stagiaires) {
        this.stagiaires = stagiaires;
    }
    // Moyenne globale de la formation
    calculerMoyenneFormation() {
        if (this.stagiaires.length === 0)
            return 0;
        const total = this.stagiaires.reduce((acc, s) => acc + s.calculerMoyenne(), 0);
        return total / this.stagiaires.length;
    }
    // Index du stagiaire ayant la meilleure moyenne
    getIndexMax() {
        let indexMax = 0;
        let maxMoyenne = this.stagiaires[0].calculerMoyenne();
        for (let i = 1; i < this.stagiaires.length; i++) {
            const moyenne = this.stagiaires[i].calculerMoyenne();
            if (moyenne > maxMoyenne) {
                maxMoyenne = moyenne;
                indexMax = i;
            }
        }
        return indexMax;
    }
    // Afficher le nom du meilleur stagiaire
    afficherNomMax() {
        const index = this.getIndexMax();
        console.log("Stagiaire avec la meilleure moyenne :", this.stagiaires[index].getNom());
    }
    // Afficher la note minimale du meilleur stagiaire
    afficherMinMax() {
        const index = this.getIndexMax();
        console.log("Note minimale du meilleur stagiaire :", this.stagiaires[index].trouverMin());
    }
    // Afficher la moyenne d’un stagiaire par son nom
    trouverMoyenneParNom(nom) {
        const stagiaire = this.stagiaires.find((s) => s.getNom() === nom);
        if (stagiaire) {
            console.log(`Moyenne de ${nom} : ${stagiaire.calculerMoyenne().toFixed(2)}`);
        }
        else {
            console.log(`Aucun stagiaire trouvé avec le nom ${nom}.`);
        }
    }
}
exports.Formation = Formation;

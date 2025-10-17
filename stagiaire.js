"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stagiaire = void 0;
class Stagiaire {
    constructor(nom, notes) {
        this.nom = nom;
        this.notes = notes;
    }
    // Getters et Setters
    getNom() {
        return this.nom;
    }
    setNom(nom) {
        this.nom = nom;
    }
    getNotes() {
        return this.notes;
    }
    setNotes(notes) {
        this.notes = notes;
    }
    // Calcul de la moyenne
    calculerMoyenne() {
        if (this.notes.length === 0)
            return 0;
        const somme = this.notes.reduce((acc, note) => acc + note, 0);
        return somme / this.notes.length;
    }
    // Trouver la note max
    trouverMax() {
        return Math.max(...this.notes);
    }
    // Trouver la note min
    trouverMin() {
        return Math.min(...this.notes);
    }
}
exports.Stagiaire = Stagiaire;

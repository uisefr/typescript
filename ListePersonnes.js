"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListePersonnes {
    constructor(personnes) {
        this._personnes = personnes;
    }
    get personnes() {
        return this._personnes;
    }
    set personnes(value) {
        this._personnes = value;
    }
    //Rechercher par nom
    findByNom(s) {
        const found = this._personnes.find(p => p.nom === s);
        return found || null;
    }
    // Vérifier la présence d’un code postal
    findByCodePostal(cp) {
        return this._personnes.some(p => p.adresses.some(a => a.codePostal === cp));
    }
    //Compter les personnes ayant une adresse dans une ville donnée
    countPersonneVille(ville) {
        return this._personnes.filter(p => p.adresses.some(a => a.ville === ville)).length;
    }
    // Modifier un nom de personne
    editPersonneNom(oldNom, newNom) {
        this._personnes.forEach(p => {
            if (p.nom === oldNom) {
                p.nom = newNom;
            }
        });
    }
    //Modifier la ville de toutes les adresses d’une personne donnée
    editPersonneVille(nom, newVille) {
        this._personnes.forEach(p => {
            if (p.nom === nom) {
                p.adresses.forEach(a => {
                    a.ville = newVille;
                });
            }
        });
    }
    afficher() {
        console.log("Liste des personnes :");
        this._personnes.forEach(p => console.log(" -", p.afficher()));
    }
}
exports.default = ListePersonnes;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Personne {
    constructor(nom, sexe, adresses) {
        this._nom = nom;
        this._sexe = sexe;
        this._adresses = adresses;
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
    get sexe() {
        return this._sexe;
    }
    set sexe(value) {
        this._sexe = value;
    }
    get adresses() {
        return this._adresses;
    }
    set adresses(value) {
        this._adresses = value;
    }
    afficher() {
        const adressesStr = this._adresses.map(a => a.afficher()).join(" | ");
        return `${this._nom} (${this._sexe}) -> ${adressesStr}`;
    }
}
exports.default = Personne;

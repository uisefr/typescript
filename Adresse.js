"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Adresse {
    constructor(rue, ville, codePostal) {
        this._rue = rue;
        this._ville = ville;
        this._codePostal = codePostal;
    }
    get rue() {
        return this._rue;
    }
    set rue(value) {
        this._rue = value;
    }
    get ville() {
        return this._ville;
    }
    set ville(value) {
        this._ville = value;
    }
    get codePostal() {
        return this._codePostal;
    }
    set codePostal(value) {
        this._codePostal = value;
    }
    afficher() {
        return `${this._rue}, ${this._ville} (${this._codePostal})`;
    }
}
exports.default = Adresse;

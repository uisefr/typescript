import Adresse from "./Adresse";

export default class Personne {
  private _nom: string;
  private _sexe: string; // 'M' ou 'F'
  private _adresses: Adresse[];

  constructor(nom: string, sexe: string, adresses: Adresse[]) {
    this._nom = nom;
    this._sexe = sexe;
    this._adresses = adresses;
  }

  get nom(): string {
    return this._nom;
  }
  set nom(value: string) {
    this._nom = value;
  }

  get sexe(): string {
    return this._sexe;
  }
  set sexe(value: string) {
    this._sexe = value;
  }

  get adresses(): Adresse[] {
    return this._adresses;
  }
  set adresses(value: Adresse[]) {
    this._adresses = value;
  }

  afficher(): string {
    const adressesStr = this._adresses.map(a => a.afficher()).join(" | ");
    return `${this._nom} (${this._sexe}) -> ${adressesStr}`;
  }
}

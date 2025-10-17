export default class MaDate {
  private _jour: number;
  private _mois: number;
  private _annee: number;

  constructor(jour: number, mois: number, annee: number) {
    this._jour = jour;
    this._mois = mois;
    this._annee = annee;
  }

  // --- Getters et setters ---
  get jour(): number {
    return this._jour;
  }
  set jour(value: number) {
    this._jour = value;
  }

  get mois(): number {
    return this._mois;
  }
  set mois(value: number) {
    this._mois = value;
  }

  get annee(): number {
    return this._annee;
  }
  set annee(value: number) {
    this._annee = value;
  }

  // --- Vérifie si une année est bissextile ---
  private estBissextile(): boolean {
    return (this._annee % 4 === 0 && this._annee % 100 !== 0) || this._annee % 400 === 0;
  }

  // --- Retourne le nombre de jours dans le mois actuel ---
  private getJoursDansMois(): number {
    switch (this._mois) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        return 31;
      case 4: case 6: case 9: case 11:
        return 30;
      case 2:
        return this.estBissextile() ? 29 : 28;
      default:
        throw new Error("Mois invalide !");
    }
  }

  // --- Ajoute un jour en tenant compte du changement de mois/année ---
  public ajouterUnJour(): void {
    this._jour++;

    if (this._jour > this.getJoursDansMois()) {
      this._jour = 1;
      this._mois++;
      if (this._mois > 12) {
        this._mois = 1;
        this._annee++;
      }
    }
  }

  // --- Ajoute plusieurs jours ---
  public ajouterPlusieursJours(n: number): void {
    for (let i = 0; i < n; i++) {
      this.ajouterUnJour();
    }
  }

  // --- Ajoute un mois ---
  public ajouterUnMois(): void {
    this._mois++;
    if (this._mois > 12) {
      this._mois = 1;
      this._annee++;
    }

    // Ajuster le jour si le nouveau mois a moins de jours
    const joursMax = this.getJoursDansMois();
    if (this._jour > joursMax) {
      this._jour = joursMax;
    }
  }

  // --- Ajoute une année ---
  public ajouterUnAn(): void {
    this._annee++;
    // Ajuste si le 29 février devient invalide
    if (this._mois === 2 && this._jour === 29 && !this.estBissextile()) {
      this._jour = 28;
    }
  }

  public afficher(): string {
    const j = this._jour.toString().padStart(2, "0");
    const m = this._mois.toString().padStart(2, "0");
    return `${j}/${m}/${this._annee}`;
  }
}

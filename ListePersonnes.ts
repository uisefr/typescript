import Personne from "./Personne";

export default class ListePersonnes {
  private _personnes: Personne[];

  constructor(personnes: Personne[]) {
    this._personnes = personnes;
  }

  get personnes(): Personne[] {
    return this._personnes;
  }
  set personnes(value: Personne[]) {
    this._personnes = value;
  }

  //Rechercher par nom
  findByNom(s: string): Personne | null {
    const found = this._personnes.find(p => p.nom === s);
    return found || null;
  }

  // Vérifier la présence d’un code postal
  findByCodePostal(cp: string): boolean {
    return this._personnes.some(p =>
      p.adresses.some(a => a.codePostal === cp)
    );
  }

  //Compter les personnes ayant une adresse dans une ville donnée
  countPersonneVille(ville: string): number {
    return this._personnes.filter(p =>
      p.adresses.some(a => a.ville === ville)
    ).length;
  }

  // Modifier un nom de personne
  editPersonneNom(oldNom: string, newNom: string): void {
    this._personnes.forEach(p => {
      if (p.nom === oldNom) {
        p.nom = newNom;
      }
    });
  }

  //Modifier la ville de toutes les adresses d’une personne donnée
  editPersonneVille(nom: string, newVille: string): void {
    this._personnes.forEach(p => {
      if (p.nom === nom) {
        p.adresses.forEach(a => {
          a.ville = newVille;
        });
      }
    });
  }

  afficher(): void {
    console.log("Liste des personnes :");
    this._personnes.forEach(p => console.log(" -", p.afficher()));
  }
}

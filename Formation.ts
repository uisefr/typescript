import { Stagiaire } from "./stagiaire";

export class Formation {
  private intitule: string;
  private nbrJours: number;
  private stagiaires: Stagiaire[];

  constructor(intitule: string, nbrJours: number, stagiaires: Stagiaire[]) {
    this.intitule = intitule;
    this.nbrJours = nbrJours;
    this.stagiaires = stagiaires;
  }

  // Getters et Setters
  public getIntitule(): string {
    return this.intitule;
  }

  public setIntitule(intitule: string): void {
    this.intitule = intitule;
  }

  public getNbrJours(): number {
    return this.nbrJours;
  }

  public setNbrJours(nbrJours: number): void {
    this.nbrJours = nbrJours;
  }

  public getStagiaires(): Stagiaire[] {
    return this.stagiaires;
  }

  public setStagiaires(stagiaires: Stagiaire[]): void {
    this.stagiaires = stagiaires;
  }

  // Moyenne globale de la formation
  public calculerMoyenneFormation(): number {
    if (this.stagiaires.length === 0) return 0;
    const total = this.stagiaires.reduce((acc, s) => acc + s.calculerMoyenne(), 0);
    return total / this.stagiaires.length;
  }

  // Index du stagiaire ayant la meilleure moyenne
  public getIndexMax(): number {
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
  public afficherNomMax(): void {
    const index = this.getIndexMax();
    console.log("Stagiaire avec la meilleure moyenne :", this.stagiaires[index].getNom());
  }

  // Afficher la note minimale du meilleur stagiaire
  public afficherMinMax(): void {
    const index = this.getIndexMax();
    console.log(
      "Note minimale du meilleur stagiaire :",
      this.stagiaires[index].trouverMin()
    );
  }

  // Afficher la moyenne d’un stagiaire par son nom
  public trouverMoyenneParNom(nom: string): void {
    const stagiaire = this.stagiaires.find((s) => s.getNom() === nom);
    if (stagiaire) {
      console.log(`Moyenne de ${nom} : ${stagiaire.calculerMoyenne().toFixed(2)}`);
    } else {
      console.log(`Aucun stagiaire trouvé avec le nom ${nom}.`);
    }
  }
}

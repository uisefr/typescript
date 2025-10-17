export class Stagiaire {
  private nom: string;
  private notes: number[];

  constructor(nom: string, notes: number[]) {
    this.nom = nom;
    this.notes = notes;
  }

  // Getters et Setters
  public getNom(): string {
    return this.nom;
  }

  public setNom(nom: string): void {
    this.nom = nom;
  }

  public getNotes(): number[] {
    return this.notes;
  }

  public setNotes(notes: number[]): void {
    this.notes = notes;
  }

  // Calcul de la moyenne
  public calculerMoyenne(): number {
    if (this.notes.length === 0) return 0;
    const somme = this.notes.reduce((acc, note) => acc + note, 0);
    return somme / this.notes.length;
  }

  // Trouver la note max
  public trouverMax(): number {
    return Math.max(...this.notes);
  }

  // Trouver la note min
  public trouverMin(): number {
    return Math.min(...this.notes);
  }
}

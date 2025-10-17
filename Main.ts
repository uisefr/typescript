import { Formation } from "./Formation";
import { Stagiaire } from "./stagiaire";

export class Main {
    public static main(): void {
            const formation=Main.initialiserDonnees();
        }
    
        public static initialiserDonnees():Formation{
            const s1=new Stagiaire("Dupont",[12,14,16]);
            const s2=new Stagiaire("Durand",[10,11,9]);
            const s3=new Stagiaire("Dupond",[15,18,17]);
            const s4=new Stagiaire("Duran",[8,7,6]);
            const formation=new Formation("TypeScript",5,[s1,s2,s3,s4]);
            console.log(`Moyenne de la formation ${formation.getIntitule()} : ${formation.calculerMoyenneFormation().toFixed(2)}`);
            console.log(`Le meilleur stagiaire est ${formation.getStagiaires()[formation.getIndexMax()].getNom()} avec une moyenne de ${formation.getStagiaires()[formation.getIndexMax()].calculerMoyenne().toFixed(2)}`);
            formation.afficherNomMax();
            return formation;
        }
    }

export interface Commentaire {
    id_comment:number;
    profil_img:string;
    nom: string;
    data: string;
    titre: string;
    message: string;
    image_associer: string[];
    nbre_etoile: number;
    isVerified:boolean;
  }
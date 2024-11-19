import { Commentaire } from "./commentaire"
import { Detailproduits } from "./detailProduit"
import { Informations } from "./information"

export interface products {
    id: number;
    img: string[];
    categorie: string;
    nom: string;
    note: number;
    nbrAvis: number;
    prix_unitaire: number;
    prix_reduit: number;
    etiquette?: string;
    remise?: string;
    poids: string[];
    stock: boolean;
    type: string;
    quantite:number;
    commentaires: Commentaire[];
    detail_produits: Detailproduits;
    informations: Informations;
}
import { Doador } from "./doador";
import { Item } from "./item";

export class Doacao {
    id: number;
	doador: Doador;
	itens: Item[];
}
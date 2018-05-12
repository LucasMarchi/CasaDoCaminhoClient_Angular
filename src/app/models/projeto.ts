import { Voluntario } from "./voluntario";
import { Beneficiario } from "./beneficiario";
import { Doador } from "./doador";

export class Projeto {
	id: number;
	nome: String;
	justificativa: String;
	objetivoGeral: String;
	objetivoEspecifico: String;
	metodologia: String;
	publicoAlvo: String;
	recursosCasaDoCaminho: String;
	sustentabilidadeDoProjeto: String;
	cronogramaAtividades: String;
	equipeExecutora: String;
	voluntarios: Voluntario[];
	beneficiarios: Beneficiario[];
	doadores: Doador[];
}
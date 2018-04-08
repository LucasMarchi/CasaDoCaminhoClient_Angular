import { Perfil } from "./perfil";

export class Beneficiario {
    id: number;
    nome: String
	idade: number
	sexo: String
	cidadeNatal: String
	anoMigracao: String
	endereco: String
	bairro: String
	cep: String
	cidade: String
	estado: String
	estadoCivil: String
	quantidadeFilhos: number
	profissao: String
	estaTrabalhando: String
	localTrabalho: String
	enederecoComercial: String
	telefoneComercial: String
	telefoneResidencial: String
	identidade: String
	cpf: String
	perfil: Perfil;
}
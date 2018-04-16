import { ProblemasFamiliares } from "./ProblemasFamiliares";
import { BensFamiliares } from "./BensFamiliares";
import { DespesasFamiliares } from "./DespesasFamiliares";

export class Perfil {
    id: number;
    escolaridade: String;
    moradia: String;
    agua: String;
    esgoto: String;
    coletaDeLixo: String;
    banheiroDentro: String;
    chuveiro: String;
    correio: String;
    janelas: String;
    tanque: String;
    problemasFamiliares: ProblemasFamiliares;
    bensFamiliares: BensFamiliares;
    despesasFamiliares: DespesasFamiliares;
    recebeBeneficioPublico: String;
    beneficioPublico: String;
    recebeBeneficioParticular: String;
    beneficioParticular: String;
}
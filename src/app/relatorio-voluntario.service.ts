import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import { Voluntario } from './models/voluntario';
import { RelatorioUtils } from './consts/relatorio.const';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable()
export class RelatorioVoluntarioService {
  constructor() { }

  gerarPDF(voluntario: Voluntario) {
    var docDefinition = {
      content: [
        { text: 'CENTRO ESPÍRITA CASA DO CAMINHO', style: 'header' },
        { text: 'Termo de Adesão ao Serviço Voluntário', style: 'subHeader' },
        {
          style: 'content',
          table: {
            widths: [70, 200, 70, '*'],
            body: [
              ['Nome:', voluntario.nome, 'Nacionalidade:', voluntario.nacionalidade],
              ['Estado Civil:', voluntario.estadoCivil, 'Telefone:', voluntario.telefone],
              ['CPF', voluntario.cpf, 'Identidade', voluntario.identidade],
              ['Endereço:', voluntario.endereco, '', ''],
              ['Bairro:', voluntario.bairro, 'CEP:', voluntario.cep],
            ]
          },
          layout: 'noBorders'
        },
        {
          text:
            'por intermédio do presente TERMO DE ADESÃO, regido pela Lei nº. 9608, de 18/02/98, compromete-se a prestar serviços de natureza voluntária em favor do Centro Espírita Casa do Caminho, estabelecido na Rua Dr. Clemente Ferreira, nº 637 – Centro – Bragança Paulista/SP, entidade de fins filantrópicos, inscrita no CNPJ/MF nº , que consistirão em:',
          style: 'paragrafo'
        },
        {
          ol: [
            {
              text: 'Objeto: _______________________________________________________________________________________________________',
              style: 'paragrafo'
            },
            {
              text: 'Condições – os serviços serão prestados em horários estabelecidos de comum acordo e sem controle de freqüência, por prazo indeterminado, ficando as partes dispensadas de qualquer pré-aviso formal, que implique em qualquer espécie de indenização em caso de desinteresse na continuidade da relação advinda do presente Termo.',
              style: 'paragrafo'
            },
            {
              text: 'O voluntário, abaixo assinado, declara que:',
              style: 'paragrafo'
            },
            {
              type: 'lower-alpha',
              ol: [
                {
                  text: 'dentro das condições acima estipuladas possui disponibilidade de tempo e capacidade física e emocional para o desempenho das atividades as quais ora se compromete;',
                  style: 'paragrafo2'
                },
                {
                  text: 'está ciente de que os serviços acima descritos serão prestados de forma voluntária, sem percepção de remuneração, bem como da inexistência  de vínculo empregatício, nem obrigação de natureza trabalhista, previdenciária ou afim;',
                  style: 'paragrafo2'
                },
                {
                  text: 'está ciente de que o ressarcimento de eventuais despesas realizadas em razão do desempenho das atividades, somente será feito se as mesmas forem expressamente autorizadas por escrito, pela entidade beneficiária dos serviços, nos limites desta autorização e mediante prestação de contas;',
                  style: 'paragrafo2'
                },
                {
                  text: 'na hipótese de o desempenho das atividades ora compromissadas virem a acarretar danos a terceiros, se decorrentes de dolo ou culpa, manifesta ciência de que poderá ficar sujeito a arcar com os conseqüentes prejuízos.',
                  style: 'paragrafo2'
                },
              ]
            },
          ]
        },
        {
          text: 'Local onde o voluntário vai prestar o serviço: ',
          style: 'paragrafo'
        },
        {
          text: 'Departamento do Centro Espírita: ',
          style: 'paragrafo'
        },
        {
          text: 'Endereço:  Rua Dr. Clemente Ferreira, nº 637 – Centro – Bragança Paulista / SP',
          style: 'paragrafo'
        },
        {
          text: 'Bragança Paulista, _______ de __________________________  de 2018.',
          style: 'paragrafoDireita'
        },
        {
          table: {
            headerRows: 1,
            body: [
              [{ text: '______________________________________________________', style: 'paragrafo' }, ''],
              [{ text: 'Assinatura do voluntário \n Se menor, assinar também o responsável \n ', style: 'assinatura' }, ''],
              [{ text: '______________________________________________________', style: 'paragrafo' }, { text: '______________________________________________________', style: 'paragrafo' },],
              [{ text: 'Responsável pela Instituição', style: 'assinatura' }, { text: 'Cargo	', style: 'assinatura' }],
              ['', ' '],
              [{ text: '______________________________________________________', style: 'paragrafo' }, { text: '______________________________________________________', style: 'paragrafo' },],
              [{ text: 'Testemunhas', style: 'assinatura' }, { text: 'Testemunhas', style: 'assinatura' }],
            ]
          },
          layout: 'noBorders'
        },

        //Outra Página
        { text: 'LEI DO SERVIÇO VOLUNTÁRIO', style: 'header' },
        { text: '(Lei Nº 9.608, de 18 de fevereiro de 1998)', style: 'paragrafoCentro' },
        { text: 'Dispõe sobre o serviço voluntário e dá outras providências', style: 'paragrafoCentro' },
        {
          text: 'Art.1º  Considera-se serviço voluntário, para fins desta Lei, a atividade não remunerada, prestada por pessoa física a entidade pública de qualquer natureza, ou a Instituição privada de fins não lucrativos, que tenha objetivos cívicos, culturais educacionais, científicos, recreativos ou de assistência social, inclusive mutualidade.',
          style: 'paragrafo'
        },
        {
          text: 'Parágrafo único. O serviço voluntário não gera vínculo empregatício, nem obrigação de natureza trabalhista, previdenciária ou afim.',
          style: 'paragrafo'
        },
        {
          text: 'Art.2º  O serviço voluntário será exercido mediante a celebração de Termo de Adesão entre a entidade, pública ou privada, e o prestador do serviço voluntário, dele devendo constar o objeto e as condições de seu exercício.',
          style: 'paragrafo'
        },
        {
          text: 'Art.3º O prestador de serviço voluntário poderá ser ressarcido pelas despesas que comprovadamente realizar no desempenho das atividades voluntárias.',
          style: 'paragrafo'
        },
        {
          text: 'Parágrafo único. As despesas a serem ressarcidas deverão estar expressamente autorizadas pela entidade a que for prestada o serviço voluntário.',
          style: 'paragrafo'
        },
        {
          text: 'Art.4º   Esta Lei entra em vigor na data de sua publicação.',
          style: 'paragrafo'
        },
        {
          text: 'Art.5º   Revogam-se as disposições em contrário.',
          style: 'paragrafo'
        },
        {
          text: '(Lei assinada pelo Presidente da República Fernando Henrique Cardoso, em Brasília, no dia 18 de fevereiro de 1998).',
          style: 'paragrafo'
        },

      ],
      styles: RelatorioUtils.style,
      pageMargins: [35, 22, 35, 20],
    };

    pdfMake.createPdf(docDefinition).download('Termo Voluntariado.pdf');

  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Beneficiario } from '../models/beneficiario'; '../models/beneficiario';
import { BeneficiarioService } from '../beneficiarios.service';
import { Perfil } from '../models/perfil';
import { EscolaridadeOpcoes } from '../consts/escolaridade.const';
import { MoradiaOpcoes } from '../consts/moradia.const';
import { AguaOpcoes } from '../consts/agua.const';
import { EsgotoOpcoes } from '../consts/esgoto.const';
import { ProblemasFamiliares } from '../models/ProblemasFamiliares';
import { BensFamiliares } from '../models/BensFamiliares';
import { DespesasFamiliares } from '../models/DespesasFamiliares';

@Component({
  selector: 'app-beneficiario-perfil',
  templateUrl: './beneficiario-perfil.component.html',
  styleUrls: ['./beneficiario-perfil.component.css']
})
export class BeneficiarioPerfilComponent implements OnInit {

  @Input() beneficiario: Beneficiario;

  formulario: FormGroup;

  escolaridadeOpcoes: String[] = EscolaridadeOpcoes;
  moradiaOpcoes: String[] = MoradiaOpcoes;
  aguaOpcoes: String[] = AguaOpcoes;
  esgotoOpcoes: String[] = EsgotoOpcoes;

  constructor(
    private route: ActivatedRoute,
    private beneficiarioService: BeneficiarioService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.getBeneficiario();
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      escolaridade: ['', Validators.required], moradia: ['', Validators.required], agua: ['', Validators.required],
      esgoto: ['', Validators.required], coletaDeLixo: ['', Validators.required], banheiroDentro: ['', Validators.required],
      chuveiro: ['', Validators.required], correio: ['', Validators.required], janelas: ['', Validators.required],
      tanque: ['', Validators.required], alcoolismo: [''], outrasDoencas: [''], morte: [''], abandono: [''],
      desemprego: [''], subemprego: [''], mudancaEmprego: [''], mudancaMoradia: [''], mudancaCidade: [''], violenciaDomestica: [''],
      deficienciaFisica: [''], deficienciaMental: [''], 
      
      carro: [''], moto: [''], televisao: [''], dvd: [''], tvPagaBens: [''],
      geladeira: [''], lavRoupas: [''], secRoupas: [''], lavLouca: [''], computador: [''], videoGame: [''], internetBens: [''],
      freezer: [''], microondas: [''], apGinastica: [''], outrosBens: [''],

      aluguel: [''], prestacaoCasa: [''], alimentacao: [''], remedios: [''], roupas: [''], calcados: [''], transportePublico: [''],
      combustivel: [''], mensalidadeEscolar: [''], convenioMedico: [''], academia: [''], cursosLinguas: [''],
      tvPagaDespesas: [''], internetDespesas: [''], outrosDespesas: [''],

      recebeBeneficioPublico: [''], beneficioPublico: [''], recebeBeneficioParticular: [''], beneficioParticular: ['']
    });
  }

  getBeneficiario(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.beneficiarioService.getById(id)
      .subscribe(beneficiario => {
        this.beneficiario = beneficiario;
        if (this.beneficiario.perfil == null) this.beneficiario.perfil = new Perfil();
        if (this.beneficiario.perfil.problemasFamiliares == null) this.beneficiario.perfil.problemasFamiliares = new ProblemasFamiliares();
        if (this.beneficiario.perfil.bensFamiliares == null) this.beneficiario.perfil.bensFamiliares = new BensFamiliares();
        if (this.beneficiario.perfil.despesasFamiliares == null) this.beneficiario.perfil.despesasFamiliares = new DespesasFamiliares();
      });
  }

  update(): void {
    console.log(this.beneficiario);
    this.beneficiarioService.update(this.beneficiario)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}

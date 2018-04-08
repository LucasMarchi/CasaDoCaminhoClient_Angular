import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Beneficiario } from '../models/beneficiario'; '../models/beneficiario';
import { BeneficiarioService } from '../beneficiarios.service';

@Component({
  selector: 'app-beneficiario-detalhe',
  templateUrl: './beneficiario-detalhe.component.html',
  styleUrls: ['./beneficiario-detalhe.component.css']
})
export class BeneficiarioDetalheComponent implements OnInit {

  @Input() beneficiario: Beneficiario;

  formulario: FormGroup;

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
      nome: ['', Validators.required],
      idade: [''],
      sexo: [''],
      cidadeNatal: [''],
      anoMigracao: [''],
      endereco: [''],
      bairro: [''],
      cep: [''],
      cidade: [''],
      estado: [''],
      estadoCivil: [''],
      quantidadeFilhos: [''],
      profissao: [''],
      estaTrabalhando: [''],
      localTrabalho: [''],
      enederecoComercial: [''],
      telefoneComercial: [''],
      telefoneResidencial: [''],
      identidade: [''],
      cpf: ['']
    });
  }

  getBeneficiario(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.beneficiarioService.getById(id)
      .subscribe(beneficiario => this.beneficiario = beneficiario);
  }

  update(): void {
    this.beneficiarioService.update(this.beneficiario)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}

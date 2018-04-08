import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Beneficiario } from '../models/beneficiario';
import { BeneficiarioService } from '../beneficiarios.service';

@Component({
  selector: 'app-beneficiario-cadastro',
  templateUrl: './beneficiario-cadastro.component.html',
  styleUrls: ['./beneficiario-cadastro.component.css']
})
export class BeneficiarioCadastroComponent implements OnInit {

  beneficiario: Beneficiario = new Beneficiario();
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

  add(): void {
    this.beneficiarioService.add(this.beneficiario)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}

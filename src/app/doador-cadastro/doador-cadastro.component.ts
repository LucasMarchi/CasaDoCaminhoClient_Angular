import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Doador } from '../models/doador';
import { DoadorService } from '../doador.service';
import { CPF, CNPJ } from '../consts/utils.const';

@Component({
  selector: 'app-doador-cadastro',
  templateUrl: './doador-cadastro.component.html',
  styleUrls: ['./doador-cadastro.component.css']
})
export class DoadorCadastroComponent implements OnInit {

  doador: Doador = new Doador();
  formulario: FormGroup;
  public mask = null;

  constructor(
    private route: ActivatedRoute,
    private doadorService: DoadorService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.doador.tipo = "Física";
    this.mask = CPF;
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      tipo: ['', Validators.required],
      nome: ['', Validators.required],
      documento: ['', Validators.required],
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      cep: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  onDocumentoChange() {
    if (this.mask == CPF) {
      this.mask = CNPJ;
    } else {
      this.mask = CPF;
    }
  }

  add(): void {
    this.doadorService.add(this.doador)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}

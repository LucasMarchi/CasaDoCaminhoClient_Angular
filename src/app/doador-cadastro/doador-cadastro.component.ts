import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Doador } from '../models/doador';
import { DoadorService } from '../doador.service';

@Component({
  selector: 'app-doador-cadastro',
  templateUrl: './doador-cadastro.component.html',
  styleUrls: ['./doador-cadastro.component.css']
})
export class DoadorCadastroComponent implements OnInit {

  doador: Doador = new Doador();
  formulario: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private doadorService: DoadorService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required]
    });
  }

  add(): void {
    this.doadorService.add(this.doador)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}

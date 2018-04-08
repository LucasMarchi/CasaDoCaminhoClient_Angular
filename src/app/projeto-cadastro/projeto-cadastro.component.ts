import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Projeto } from '../models/projeto';
import { ProjetoService } from '../projeto.service';

@Component({
  selector: 'app-projeto-cadastro',
  templateUrl: './projeto-cadastro.component.html',
  styleUrls: ['./projeto-cadastro.component.css']
})
export class ProjetoCadastroComponent implements OnInit {

  projeto: Projeto = new Projeto();
  formulario: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private projetoService: ProjetoService,
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
      justificativa: [''],
      objetivoGeral: [''],
      objetivoEspecifico: [''],
      metodologia: [''],
      publicoAlvo: [''],
      recursosCasaDoCaminho: [''],
      sustentabilidadeDoProjeto: [''],
      cronogramaAtividades: [''],
      equpeExecutora: ['']
    });
  }

  add(): void {
    this.projetoService.add(this.projeto)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Voluntario } from '../models/voluntario';
import { VoluntarioService } from '../voluntario.service';
import { CPF } from '../consts/utils.const';

@Component({
  selector: 'app-voluntario-cadastro',
  templateUrl: './voluntario-cadastro.component.html',
  styleUrls: ['./voluntario-cadastro.component.css']
})
export class VoluntarioCadastroComponent implements OnInit {

  voluntario: Voluntario = new Voluntario();
  formulario: FormGroup;
  public mask = CPF;

  constructor(
    private route: ActivatedRoute,
    private voluntarioService: VoluntarioService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required ],
      identidade: [''],
      cpf: ['', Validators.required],
      nacionalidade: [''],
      endereco: [''],
      bairro: [''],
      cep: [''],
      estadoCivil: [''],
      telefone: [''],
    });
  }

  add(): void {
    this.voluntarioService.addVoluntario(this.voluntario)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.router.navigate(['/voluntarios']);
  }

}

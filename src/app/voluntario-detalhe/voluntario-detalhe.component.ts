import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Voluntario } from '../models/voluntario'; '../models/voluntario';
import { VoluntarioService } from '../voluntario.service';

@Component({
  selector: 'app-voluntario-detalhe',
  templateUrl: './voluntario-detalhe.component.html',
  styleUrls: ['./voluntario-detalhe.component.css']
})
export class VoluntarioDetalheComponent implements OnInit {

  @Input() voluntario: Voluntario;

  formulario: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private voluntarioService: VoluntarioService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.getVoluntario();
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      identidade: [''],
      cpf: [''],
      nacionalidade: [''],
      endereco: [''],
      bairro: [''],
      cep: [''],
      estadoCivil: [''],
      telefone: [''],
    });
  }

  getVoluntario(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.voluntarioService.getVoluntario(id)
      .subscribe(voluntario => this.voluntario = voluntario);
  }

  update(): void {
    this.voluntarioService.updateVoluntario(this.voluntario)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}


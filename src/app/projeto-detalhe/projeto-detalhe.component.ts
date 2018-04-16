import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Projeto } from '../models/projeto';
import { ProjetoService } from '../projeto.service';

@Component({
  selector: 'app-projeto-detalhe',
  templateUrl: './projeto-detalhe.component.html',
  styleUrls: ['./projeto-detalhe.component.css']
})
export class ProjetoDetalheComponent implements OnInit {

  @Input() projeto: Projeto;

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
    this.getProjeto();
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
      equipeExecutora: ['']
    });
  }

  getProjeto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projetoService.getById(id)
      .subscribe(projeto => this.projeto = projeto);
  }

  update(): void {
    this.projetoService.update(this.projeto)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}

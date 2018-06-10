import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Voluntario } from '../models/voluntario'; '../models/voluntario';
import { VoluntarioService } from '../voluntario.service';
import { RelatorioVoluntarioService } from '../relatorio-voluntario.service';
import { CPF } from '../consts/utils.const';

@Component({
  selector: 'app-voluntario-detalhe',
  templateUrl: './voluntario-detalhe.component.html',
  styleUrls: ['./voluntario-detalhe.component.css']
})
export class VoluntarioDetalheComponent implements OnInit {

  @Input() voluntario: Voluntario;

  formulario: FormGroup;
  public mask = CPF;

  constructor(
    private route: ActivatedRoute,
    private voluntarioService: VoluntarioService,
    private router: Router,
    private formBuilder: FormBuilder,
    private relatorioVoluntarioService: RelatorioVoluntarioService
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
      cpf: ['', Validators.required],
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

  download(event){
    event.preventDefault();
    this.relatorioVoluntarioService.gerarPDF(this.voluntario);
  }

  goBack(): void {
    this.router.navigate(['/voluntarios']);
  }

}


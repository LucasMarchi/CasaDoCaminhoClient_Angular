import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Doador } from '../models/doador';
import { DoadorService } from '../doador.service';

@Component({
  selector: 'app-doador-detalhe',
  templateUrl: './doador-detalhe.component.html',
  styleUrls: ['./doador-detalhe.component.css']
})
export class DoadorDetalheComponent implements OnInit {

  @Input() doador: Doador;

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
    this.getDoador();
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required]
    });
  }

  getDoador(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.doadorService.getById(id)
      .subscribe(doador => this.doador = doador);
  }

  update(): void {
    this.doadorService.update(this.doador)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}

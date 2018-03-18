import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Voluntario } from '../voluntarios/voluntario';
import { VoluntarioService } from '../voluntario.service';


@Component({
  selector: 'app-voluntario-cadastro',
  templateUrl: './voluntario-cadastro.component.html',
  styleUrls: ['./voluntario-cadastro.component.css']
})
export class VoluntarioCadastroComponent implements OnInit {

  voluntario: Voluntario = new Voluntario();

  constructor(
    private route: ActivatedRoute,
    private voluntarioService: VoluntarioService,
    private location: Location
  ) {}

  ngOnInit() {
  }

  add(voluntario: Voluntario): void {
    this.voluntarioService.addVoluntario(this.voluntario)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}

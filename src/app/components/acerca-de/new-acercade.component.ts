import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acercade } from 'src/app/model/acercade';
import { SAcercadeService } from 'src/app/service/s-acercade.service';

@Component({
  selector: 'app-new-acercade',
  templateUrl: './new-acercade.component.html',
  styleUrls: ['./new-acercade.component.css']
})
export class NewAcercadeComponent implements OnInit {
  tituloA: string;
  descripcionA: string;

  constructor(private acercadeS: SAcercadeService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const acercade = new Acercade(this.tituloA, this.descripcionA);
    this.acercadeS.save(acercade).subscribe(
      data =>{
        alert("Información añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Hardysoftskills } from 'src/app/model/hardysoftskills';
import { SHardysoftskillsService } from 'src/app/service/s-hardysoftskills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hardysoftskills',
  templateUrl: './hardysoftskills.component.html',
  styleUrls: ['./hardysoftskills.component.css']
})
export class HardysoftskillsComponent implements OnInit {
hyss: Hardysoftskills[] = [];

  constructor(private sHardysoftskills: SHardysoftskillsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void{
    this.sHardysoftskills.lista().subscribe(data =>{this.hyss = data})
  }

  delete(id?: number){
    if(id != undefined){
      this.sHardysoftskills.delete(id).subscribe(
        data => {
          this.cargarSkill();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }

}

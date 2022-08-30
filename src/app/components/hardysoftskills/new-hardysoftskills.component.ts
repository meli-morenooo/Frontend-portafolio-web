import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hardysoftskills } from 'src/app/model/hardysoftskills';
import { SHardysoftskillsService } from 'src/app/service/s-hardysoftskills.service';

@Component({
  selector: 'app-new-hardysoftskills',
  templateUrl: './new-hardysoftskills.component.html',
  styleUrls: ['./new-hardysoftskills.component.css']
})
export class NewHardysoftskillsComponent implements OnInit {
  nombreS: string = '';
  porcentajeS: number;

  constructor(private sHardysoftskills: SHardysoftskillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hys = new Hardysoftskills(this.nombreS, this.porcentajeS);
    this.sHardysoftskills.save(hys).subscribe(data => {
      alert("Skill añadida");
      this.router.navigate(['']);
  }, err => {
    alert("Falló");
    this.router.navigate(['']);
  })}
}

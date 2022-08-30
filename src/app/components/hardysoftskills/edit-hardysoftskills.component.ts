import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hardysoftskills } from 'src/app/model/hardysoftskills';
import { SHardysoftskillsService } from 'src/app/service/s-hardysoftskills.service';

@Component({
  selector: 'app-edit-hardysoftskills',
  templateUrl: './edit-hardysoftskills.component.html',
  styleUrls: ['./edit-hardysoftskills.component.css']
})
export class EditHardysoftskillsComponent implements OnInit {
  skillpers: Hardysoftskills = null;

  constructor(private sHardysoftskills: SHardysoftskillsService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHardysoftskills.detail(id).subscribe(
      data =>{
        this.skillpers = data;
      }, err =>{
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHardysoftskills.update(id, this.skillpers).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar la skill");
         this.router.navigate(['']);
      }
    )
  }

}

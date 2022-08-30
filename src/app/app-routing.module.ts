import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade.component';
import { NewAcercadeComponent } from './components/acerca-de/new-acercade.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditHardysoftskillsComponent } from './components/hardysoftskills/edit-hardysoftskills.component';
import { NewHardysoftskillsComponent } from './components/hardysoftskills/new-hardysoftskills.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'nuevoproy', component: NewProyectoComponent},
  { path: 'editproy/:id', component: EditProyectoComponent},
  { path: 'nuevahyss', component: NewHardysoftskillsComponent},
  { path: 'edithyss/:id', component: EditHardysoftskillsComponent},
  { path: 'nuevoacerc', component: NewAcercadeComponent},
  { path: 'editacercad/:id', component: EditAcercadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

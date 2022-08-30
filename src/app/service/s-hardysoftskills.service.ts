import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hardysoftskills } from '../model/hardysoftskills';

@Injectable({
  providedIn: 'root'
})
export class SHardysoftskillsService {
  hyssURL = 'http://localhost:8080/skills/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Hardysoftskills[]>{
    return this.httpClient.get<Hardysoftskills[]>(this.hyssURL + 'lista');
  }

  public detail(id: number): Observable<Hardysoftskills> {
    return this.httpClient.get<Hardysoftskills>(this.hyssURL + `detail/${id}`);
  }

  public save(skill: Hardysoftskills): Observable<any> {
    return this.httpClient.post<any>(this.hyssURL + 'create', skill);
   }

   public update(id: number, skill: Hardysoftskills): Observable<any> {
    return this.httpClient.put<any>(this.hyssURL + `update/${id}`, skill);
   }

   public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.hyssURL + `delete/${id}`);
   }
}

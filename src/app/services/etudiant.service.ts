import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl = 'http://localhost:8080/etudiant/etudiants';

  constructor(private http: HttpClient) { }

  getEtudiantsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}

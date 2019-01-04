import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private adminUrl = 'http://localhost:8080/api/test/admin';
  private etudiantUrl = 'http://localhost:8080/api/test/etudiant';
  private formateurUrl = 'http://localhost:8080/api/test/formateur';
  private personnelUrl = 'http://localhost:8080/api/test/personnel';

  constructor(private http: HttpClient) { }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

  getEtudiantBoard(): Observable<string> {
    return this.http.get(this.etudiantUrl, { responseType: 'text' });
  }
  getFormateurBoard(): Observable<string> {
    return this.http.get(this.formateurUrl, { responseType: 'text' });
  }
  getPeronnelBoard(): Observable<string> {
    return this.http.get(this.personnelUrl, { responseType: 'text' });
  }
}

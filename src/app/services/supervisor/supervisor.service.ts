import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(private http: HttpClient) { }

  async getSupervisors(): Promise<any> {
    return await this.http.get<any>(
      `${environment.BACKEND_URL}${environment.PORT}/supervisor`
    ).toPromise();
  }
}

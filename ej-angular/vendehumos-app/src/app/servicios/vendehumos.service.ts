import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class VendehumosService {

  constructor(private httClient: HttpClient) { }

  getVendehumos() {
    return this.httClient.get(`${environment.BASE_URL_API}/vendehumos`);
  }

  votar(vendehumoId: number, votos: number) {
    return this.httClient.patch(`${environment.BASE_URL_API}/vendehumos/${vendehumoId}`, {votos: votos+1})
  }

  getVendeHumosbyId(id: number) {
    return this.httClient.get('${environment.BASE_URL_API}/vendehumos/' + id);
  }
}

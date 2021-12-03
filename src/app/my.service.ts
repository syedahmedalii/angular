import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http: HttpClient) { }

  get_posts(url: string) {
    const started = Date.now();
    let ok: string;

    return this.http.get(url).pipe(map(values=> values));
  }
}

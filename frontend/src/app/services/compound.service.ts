import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compound, CompoundResponse } from '../compound';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root',
})
export class CompoundService {
  constructor(private http:HttpClient) { }
  private apiUrl = 'http://localhost:5000/api/compounds';

  // constructor(private http: HttpClient) {}

  getOneCompound(id: any): Observable<Compound> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Compound>(url);
  }

  getCompound(page: number, limit: number): Observable<CompoundResponse> {
    const url = `${this.apiUrl}?pg=${page}`;
    return this.http.get<CompoundResponse>(url);
  }

  addCompound(compound:Compound): Observable<Compound> {
    return this.http.post<Compound>(this.apiUrl, compound, httpOptions);
  }

  // addCompound(obj: Compound): Observable<Compound> {
  //   return this.http.post<Compound>(this.apiUrl, obj, httpOptions);
  // }

  editCompound(obj: any, id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, obj);
  }

  deleteCompound(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}

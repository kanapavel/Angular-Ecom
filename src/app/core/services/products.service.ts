import { Injectable } from '@angular/core';
import { products } from '../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  
  getAllProducts(){
    return this.http.get<products[]>(`${environment.apiUrl}`)
    .pipe(
      map((res:products[])=>{
      return res;
    }))
  }

  getProductById(id:string){
    return this.http.get<products>(`${environment.apiUrl}/${id}`)
  }
}

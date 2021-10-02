import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category';
import baseURL from './Helper';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  viewallcategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${baseURL}category/getallcategories`);
  }
  

  deletecat(cid:number):Observable<any>{
    return this.http.delete(`${baseURL}category/deletecategorybyid/`+cid);
  }

  addCategory(category:Category):Observable<Category>{
   return this.http.post<Category>(`${baseURL}category/`,category);
  }

  updateCategory(category:Category):Observable<Category>{
    return this.http.put<Category>(`${baseURL}category/updatecategory`,category);
   }

   getCategoryByid(cid:number):Observable<Category>{
     return this.http.get<Category>(`${baseURL}category/getcategorybyid/`+cid);
   }
}

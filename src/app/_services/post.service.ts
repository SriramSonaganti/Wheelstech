import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../models/post.model';


const Url = 'https://cc346efa61fb.ngrok.io/api/'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(Url + "all")
  }


  createPost(data: any): Observable<any> {
    return this.http.post(Url+'create', data);
  }

  getSinglePost(title: any): Observable<Post[]> {
    return this.http.get<Post[]>(`${Url}get/?title=${title}`);
  }

  
  get(id: any): Observable<Post> {
    return this.http.get(Url + 'get/' +`${id}`);
  }
  
}

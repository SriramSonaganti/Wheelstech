import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../models/post.model';


const Url = 'http://localhost:8080/api/'

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

  updatePost( id:any, data:any): Observable<any> {
    return this.http.put(Url + 'update/' +`${id}`,data);
  }

  deletePost( id:any): Observable<any> {
    return this.http.delete(Url +'delete/' +`${id}`);
  }
  
}

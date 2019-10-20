import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { Comment } from '../model/comment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private BASE_API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // POST HTTP REQUESTS
  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${this.BASE_API_URL}/posts`);
  }
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.BASE_API_URL}/posts/${id}`);
  }
  addPost(post: Post): Observable<Post> {
    return this.http.post(`${this.BASE_API_URL}/posts`, post);
  }

  // COMMENT HTTP REQUESTS
  getCommentsByPostId(postId: number): Observable<Array<Comment>> {
    const param = new HttpParams()
    .set('postId', postId + '');
    return this.http.get<Array<Comment>>(`${this.BASE_API_URL}/comments`, {params: param});
  }
}

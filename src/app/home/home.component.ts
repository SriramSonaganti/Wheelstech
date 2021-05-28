import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  post?: Post[]

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.retreivePosts();
  }

  retreivePosts(): void {
    this.postService.getAll().subscribe(
      data => {
        this.post = data;
        console.log(data);
        console.log(this.post);
    })
  }


}

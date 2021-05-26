import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  post?:Post[];
  currentPost?:Post;
  currentIndex = -1;
  title = '';
  subtitle = '';
  description = ''
  img = '';
  username = '';
  id='';

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

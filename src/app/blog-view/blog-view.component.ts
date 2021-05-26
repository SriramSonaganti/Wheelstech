import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  currentPost : Post = {
    title:'',
    description:'',
    subtitle:'',
    img:'',
  };
  message = '';

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router)  { }

  ngOnInit(): void {
    this.message = '';
    this.getPost(this.route.snapshot.params.id)
    

  }

  getPost(id:string):void {
    this.postService.get(id).
    subscribe(data => {
      this.currentPost = data;
      console.log(data)
    })
  }



}

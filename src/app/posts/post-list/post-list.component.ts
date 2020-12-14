import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: " first Post" , content : " First post content "},
  //   { title: " Second Post" , content : " Second post content "},
  //   { title: " Third Post" , content : " Third post content "}
  // ];
  posts: Post[] = [];
  private postsub: Subscription;

  constructor(public postServive: PostService) {

  }
  ngOnInit() {
    this.postServive.getPosts();
    this.postsub = this.postServive.getPostUpdatedListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
  onDelete(postId: string) {
    this.postServive.deletePost(postId);
  }
  ngOnDestroy() {
    this.postsub.unsubscribe();
  }
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent {
  constructor(private route: ActivatedRoute, private contentfulService:ContentfulService) {}

  blogPosts$: Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
        const id = params['id'];
        this.blogPosts$ = this.contentfulService.getEntryById(id);
      }
    )
  }
}

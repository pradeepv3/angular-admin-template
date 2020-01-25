import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'socialshare',
  template: `<div class="card social-share">
    <div class="card-body">
        <div class="col-12 share-icon {{shareName}}">
          <i [ngClass]="'fa fa-'+ shareName" ></i>
        </div>
        <div class="row share-count">
        <div class="col-6 ">{{followersCount}} <span>followers</span></div>
        <div class="col-6">{{likesCount}} <span>Likes</span></div>
        </div>
  </div></div>`
})
export class SocialShareComponent implements OnInit {
   constructor() {}
 
  @Input() followersCount: string;
  @Input() likesCount: string;
  @Input() shareName: string;
  ngOnInit(){}
}
import {Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html'
})

export class CardsComponent  implements OnInit  {
  constructor(private cd: ChangeDetectorRef) {}

  @Input() cardWrapperClass: string;
  @Input() cardImage: string;
  @Input() cardHeader: boolean;
  @Input() cardFooter: boolean;
  showHeader = true;
  showFooter = true;
  @ViewChild('cardHeaderContent')  cardHeaderContent : ElementRef;
  @ViewChild('cardFooterContent')  cardFooterContent : ElementRef;
    
  changed(){
    this.showHeader = (this.cardHeaderContent.nativeElement.innerHTML.length == 0) ? false : true;
    this.showFooter = (this.cardFooterContent.nativeElement.innerHTML.length == 0) ? false : true;
  }
  ngOnInit() {
    this.cd.detectChanges();
    this.changed()
  }
}
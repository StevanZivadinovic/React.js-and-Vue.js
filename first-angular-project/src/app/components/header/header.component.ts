import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'First Angular Project';
   a:string = 'Kako si?'
  constructor() { }

  ngOnInit(): void {
  }

}

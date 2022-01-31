import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

@Input() text:string;
@Input() color:string;

mojaPrvaAFunkcija=(prviParametar:any)=>{
  console.log(prviParametar)
}
  constructor() { }

  ngOnInit(): void {
  }

}

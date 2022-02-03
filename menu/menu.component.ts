import { Component, OnInit } from '@angular/core';
import { CreateServiceService } from '../service/create-service.service';
CreateServiceService
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:CreateServiceService) { }
menuOrder:any;
essenOrder:any;
drinkOrder:any;
  ngOnInit(): void {

    this.menuOrder = this.service.foodDescription;

    this.essenOrder = this.service.essenDescription;

    this.drinkOrder = this.service.drinksDescription;

  }

}

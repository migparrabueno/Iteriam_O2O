import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  constructor(private beersService: BeersService) { }

  filterBeers = '';
  beers = [];

  ngOnInit(): void {
    this.beersService.getBeers('https://api.punkapi.com/v2/beers').subscribe((res: any) => {
      this.beers = res
    })
  }

}

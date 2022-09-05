import { Component, OnInit } from '@angular/core';
import { BeersService } from '../services/beers/beers.service';
import {IBeer} from '../interfaces/beer.interface';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public filterBeers = '';
  public beers: Array<IBeer> = [];
  public selectedBeer: IBeer = {} as IBeer;

  constructor(private beersService: BeersService, private toastr: ToastrService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.beersService.getBeers().subscribe((res: Array<IBeer>) => {
      this.toastr.success('Correct loading', 'The API has been successfully called');
      this.beers = res;
    })
  }

  open(content:any, beer: IBeer) {
    this.selectedBeer = beer;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
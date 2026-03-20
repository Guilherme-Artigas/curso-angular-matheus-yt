import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DetailService } from './detail.service';
import { Car } from 'src/app/interfaces/Car';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public car: Car = { id: 0, model: '', color: '', year: 0, showYear: true };

  constructor(private detailService: DetailService, private activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneCar();
  }

  public getOneCar(): void {
    const id: number = Number(this.activatedRout.snapshot.paramMap.get('id')) || 0;
    this.detailService.getOneCar(id).subscribe((car) => this.car = car);
  }
}

import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moment';
import { HomeService } from './home.service';
import { MessageService } from '../../message/message.service';
import { Response } from 'src/app/interfaces/Response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allMoments: Moment[] = [];
  public momentsFiltered: Moment[] = [];

  constructor(
    private readonly homeService: HomeService,
    private readonly messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.homeService.getAll().subscribe({
      next: (response: Response<Moment[]>) => {
        this.allMoments = response.data;
      },
      error: (err) => {
        this.messageService.showMessage('Erro ao buscar momentos.');
        console.error('Erro ao buscar momentos: ', err);
      }
    });
  }

}

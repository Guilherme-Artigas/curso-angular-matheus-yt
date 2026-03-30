import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moment';
import { HomeService } from './home.service';
import { MessageService } from '../../message/message.service';
import { Response } from 'src/app/interfaces/Response';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public apiUrl: string = environment.apiUrl;

  public allMoments: Moment[] = [];
  public momentsFiltered: Moment[] = [];
  public term: string = '';

  public faSearch = faSearch;

  constructor(
    private readonly homeService: HomeService,
    private readonly messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.homeService.getAll().subscribe({
      next: (response: Response<Moment[]>) => {
        this.allMoments = response.data;
        this.momentsFiltered = response.data;
      },
      error: (err) => {
        this.messageService.showMessage('Erro ao buscar momentos.');
        console.error('Erro ao buscar momentos: ', err);
      }
    });
  }

  public searchMoment(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.allMoments = this.momentsFiltered.filter((moment: Moment) => moment.title.toLowerCase().includes(value));
  }
}

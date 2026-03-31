import { Component, OnInit } from '@angular/core';
import { MomentService } from './moment.service';
import { Moment } from 'src/app/interfaces/Moment';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../message/message.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  public moment!: Moment;
  public id: number = 0;

  constructor(
    private readonly momentService: MomentService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.momentService.getOne(this.id).subscribe({
      next: (response) => {
        this.moment = response.data;
      },
      error: (err) => {
        this.messageService.showMessage('Houve erro ao buscar detalhes do momento.');
        console.error('Houve erro ao buscar detalhes do momento: ', err);
      }
    });
  }
}

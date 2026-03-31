import { Component, OnInit } from '@angular/core';
import { MomentService } from './moment.service';
import { Moment } from 'src/app/interfaces/Moment';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../message/message.service';
import { environment } from 'src/environments/environment';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  public readonly apiUrl: string = environment.apiUrl;
  public moment!: Moment;
  public id: number = 0;

  public faTimes = faTimes;
  public faEdit = faEdit;

  constructor(
    private readonly momentService: MomentService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly messageService: MessageService,
    private readonly router: Router
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

  public delete(id: number): void {
    this.momentService.delete(id).subscribe({
      next: (response) => {
        this.messageService.showMessage('Momento excluído com sucesso!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.messageService.showMessage('Erro ao excluir momento.');
        console.error('Erro ao excluir momento: ', err);
      }
    });
  }
}

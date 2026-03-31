import { Component, OnInit } from '@angular/core';
import { MomentService } from './moment.service';
import { Moment } from 'src/app/interfaces/Moment';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../message/message.service';
import { environment } from 'src/environments/environment';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Comment } from 'src/app/interfaces/Comment';

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

  public commentForm!: FormGroup;

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

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
    });
  }

  public get text() {
    return this.commentForm.get('text')!;
  }

  public get username() {
    return this.commentForm.get('username')!;
  }

  public createComment(formDirective: FormGroupDirective) {
    if (this.commentForm.invalid) return;

    const data: Comment = this.commentForm.value;

    data.momentId = Number(this.moment.id);

    this.momentService.newComment(data).subscribe({
      next: (response) => {
        this.messageService.showMessage('Comentário foi adicionado com sucesso!');
        this.commentForm.reset();
        formDirective.resetForm();
        this.moment.comments?.push(response.data);
      },
      error: (err) => {
        this.messageService.showMessage('Erro ao adicionar comentário!');
        console.error('Erro ao adicionar comentário: ', err);
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

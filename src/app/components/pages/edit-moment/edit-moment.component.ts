import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moment';
import { EditMomentService } from './edit-moment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../message/message.service';
import { MomentService } from '../moment/moment.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent implements OnInit {
  public moment!: Moment;
  public btnText: string = 'Editar';
  public id!: number;

  constructor(
    private readonly editMomentService: EditMomentService,
    private readonly momentService: MomentService,
    private readonly router: Router,
    private readonly activated: ActivatedRoute,
    private readonly messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.id = Number(this.activated.snapshot.paramMap.get('id'));

    this.momentService.getOne(this.id).subscribe({
      next: (response) => {
        this.moment = response.data;
      },
      error: (err) => {
        this.messageService.showMessage('Houve erro ao buscar momento.');
        console.error('Houve erro ao buscar momento: ', err);
      }
    });
  }

  public handleEdit(id: number, moment: Moment): void {
    const formData: FormData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) formData.append('image', moment.image);

    this.editMomentService.edit(id, formData).subscribe({
      next: (response) => {
        this.messageService.showMessage('Momento editado com sucesso!');
      },
      error: (err) => {
        this.messageService.showMessage('Erro ao editar momento!');
        console.error('Erro ao editar momento: ', err)
      },
    });
  }
}

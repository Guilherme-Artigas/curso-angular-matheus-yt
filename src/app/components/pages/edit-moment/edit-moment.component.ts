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
  public editMomentForm!: FormGroup;

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

    this.editMomentForm = new FormGroup({
      id: new FormControl(this.moment.id),
      title: new FormControl(this.moment.title, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      description: new FormControl(this.moment.description, [Validators.required, Validators.maxLength(50)]),
      image: new FormControl(this.moment.image),
    });
  }

  public get title() {
    return this.editMomentForm.get('title');
  }

  public get description() {
    return this.editMomentForm.get('description');
  }
}

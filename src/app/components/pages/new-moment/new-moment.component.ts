import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moment';
import { NewMomentService } from './new-moment.service';
import { MessageService } from '../../message/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  public btnText: string = 'Compartilhar!';

  constructor(
    private readonly newMomentService: NewMomentService,
    private readonly messageService: MessageService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  public createHandler(moment: Moment) {
    const formData: FormData = new FormData()

    formData.append('title', moment.title);
    formData.append('description', moment.description);
    if (moment.image) formData.append('image', moment.image);

    // 1. Enviar dados via service para cadastro no banco de dados.
    this.newMomentService.createMoment(formData).subscribe({
      next: (response) => {
        // Caso seja necessário executar alguma lógica, precisa ser feito aqui dentro.

        // 2. Exibir mensagem de sucesso ou erro ao enviar.
        this.messageService.showMessage('Novo momento adicionado com sucesso!');

        // 3. Fazer o redirecionamento para outra página.
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.messageService.showMessage('Houve um erro ao cadastrar o momento!');
        console.error('Erro ao cadastrar momento: ', err);
      }
    });
  }
}

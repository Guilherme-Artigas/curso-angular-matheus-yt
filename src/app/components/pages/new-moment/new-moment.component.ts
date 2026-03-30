import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moment';
import { NewMomentService } from './new-moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  public btnText: string = 'Compartilhar!';

  constructor(private readonly newMomentService: NewMomentService) { }

  ngOnInit(): void {
  }

  public createHandler(moment: Moment) {
    const formData: FormData = new FormData()

    formData.append('title', moment.title);
    formData.append('description', moment.description);
    if (moment.image) formData.append('image', moment.image);

    // TODO

    // 1. Enviar dados via service para cadastro no banco de dados.
    this.newMomentService.createMoment(formData).subscribe({
      next: (response) => {
        // Caso seja necessário executar alguma lógica, precisa ser feito aqui dentro.
      },
      error: (err) => {
        alert('Erro ao cadastrar momento.');
        console.error('Erro ao cadastrar momento: ', err);
      }
    });

    // 2. Exibir mensagem de sucesso ou erro ao enviar.
    // 3. Fazer o redirecionamento para outra página.
  }
}

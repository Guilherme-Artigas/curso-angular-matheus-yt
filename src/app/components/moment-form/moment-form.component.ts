import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/interfaces/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
  @Input() public btnText!: string;
  @Output() public onSubmit = new EventEmitter<Moment>();
  @Input() public momentData: Moment | null = null;

  public momentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    if (this.btnText === 'Compartilhar!') {
      this.momentForm = new FormGroup({
        id: new FormControl(''),
        title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
        description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        image: new FormControl(''),
      });
    } else {
      this.momentForm = new FormGroup({
        id: new FormControl(this.momentData?.id),
        title: new FormControl(this.momentData?.title, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
        description: new FormControl(this.momentData?.description, [Validators.required, Validators.maxLength(50)]),
        image: new FormControl(this.momentData?.image),
      });
    }
  }

  public get title() {
    return this.momentForm.get('title')!;
  }

  public get description() {
    return this.momentForm.get('description')!;
  }

  public handleFile(event: any) {
    const file: File = event.target.files[0];
    this.momentForm.patchValue({ image: file });
  }

  public submit() {
    if (this.momentForm.invalid) return;

    this.onSubmit.emit(this.momentForm.value);
  }
}

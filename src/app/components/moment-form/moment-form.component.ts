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
  public momentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      image: new FormControl(''),
    });
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

    // this.onSubmit.emit(this.momentForm.value);
  }
}

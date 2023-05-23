import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

declare var bootstrap: any;

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent implements OnInit {
  @Input() title!: string
  @Input() label!: string
  @Input() placeholder!: string
  @Output() callCreate: EventEmitter<any> =
    new EventEmitter<any>();
  createForm: FormGroup
  constructor() {
    this.createForm = new FormGroup({
      text: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }


  update(){
    this.callCreate.emit(this.createForm.value.text)
    let modal: any = document.getElementById("createModal");
    let modalB = bootstrap.Modal.getInstance(modal);
    modalB.hide();
    this.createForm.reset()
  }
}

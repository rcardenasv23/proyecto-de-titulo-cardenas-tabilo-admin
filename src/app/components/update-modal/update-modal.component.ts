import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

declare var bootstrap: any;

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateModalComponent implements OnInit {
  @Input() title!: string
  @Input() label!: string
  @Output() callUpdate: EventEmitter<any> =
  new EventEmitter<any>();
  @Input() idTarget:string | undefined
  @Input() initialValue:string | undefined
  updateForm: FormGroup

  constructor() {
    this.updateForm = new FormGroup({
      updated: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  update(){
    this.callUpdate.emit({id:this.idTarget, value:this.updateForm.value.updated})
    let modal: any = document.getElementById("updateModal");
    let modalB = bootstrap.Modal.getInstance(modal);
    modalB.hide();
    this.updateForm.reset()
  }

}

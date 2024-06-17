import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Wish } from '../../../models/wish';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrl: './modal-edit.component.scss'
})
export class ModalEditComponent {


 
  @Input() editedWish!: Wish;
  @Output() editedWishChange = new EventEmitter<Wish>();
  @Output() closeModal = new EventEmitter<void>();
  @Output() updateWish = new EventEmitter<void>();

  constructor() {}

  cancel() {
    this.closeModal.emit();
  }

  onSave() {
    this.updateWish.emit();
  }

}

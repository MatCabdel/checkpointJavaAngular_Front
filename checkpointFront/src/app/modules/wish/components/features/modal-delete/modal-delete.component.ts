import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Wish } from '../../../models/wish';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.scss'
})
export class ModalDeleteComponent {
  
  @Input() wish!: Wish;
  @Output() onCancel = new EventEmitter<void>();
  @Output() onDeleteWish = new EventEmitter<void>();

  cancel() {
    this.onCancel.emit();
  }

  confirmDelete() {
    this.onDeleteWish.emit();
  }
}

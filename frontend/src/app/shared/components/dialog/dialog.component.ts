import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Modal } from 'flowbite';
import { DIALOG_DATA } from '../../services/dialog/dialog-tokens';
import { DialogRef } from '../../services/dialog/dialog-ref';

@Component({
  selector: 'app-dialog',
  imports: [CommonModule],
  // providers: [{ provide: DIALOG_DATA, useValue: {} }],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  constructor(
    @Inject(DIALOG_DATA) public data: any,
    private dialogRef: DialogRef
  ) {

  }

  ngOnInit(): void {
    // console.log(this.data);
  }

  close(data: any) {
    this.dialogRef.close(data);
  }

}

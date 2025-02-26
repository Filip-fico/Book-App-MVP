import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TOAST_DATA } from '../../services/toast/toast-tokens';
import { ToastRef } from '../../services/toast/toast-ref';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {

  private autoCloseTimeout = 5000;

  constructor(
    @Inject(TOAST_DATA) public data: any,
    public toastRef: ToastRef
  ) {
    if (data.autoCloseTime) {
      this.autoCloseTimeout = data.autoCloseTime;
    }
    this.initAutoClose();
  }

  close(data: any) {
    this.toastRef.close(data);
  }

  initAutoClose() {
    setTimeout(() => {
      this.close(null);
    }, this.autoCloseTimeout);
  }


}

import { Overlay, ComponentType } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { ToastRef } from './toast-ref';
import { TOAST_DATA } from './toast-tokens';

export interface ToastConfig {
  data?: any;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private overlay: Overlay, private injector: Injector) { }

  /**
   * Open a custom component in an overlay
   */
  open<T>(component: ComponentType<T>, config?: ToastConfig): ToastRef {

    // Globally centered position strategy
    const positionStrategy = this.overlay
      .position()
      .global()
      .right('20px')
      .top('70px');

    // Create the overlay with customizable options
    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: false,
      backdropClass: 'overlay-backdrop',
      panelClass: 'overlay-panel',
    });

    // Create dialogRef to return
    const dialogRef = new ToastRef(overlayRef);

    // Create injector to be able to reference the DialogRef from within the component
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: ToastRef, useValue: dialogRef },
        { provide: TOAST_DATA, useValue: config?.data },
      ],
    });

    // Attach component portal to the overlay
    const portal = new ComponentPortal(component, null, injector);
    overlayRef.attach(portal);

    return dialogRef;
  }
}

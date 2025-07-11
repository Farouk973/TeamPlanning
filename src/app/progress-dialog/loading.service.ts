import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentRef, Injectable, Injector } from '@angular/core';
import { ProgressDialogComponent } from './progress-dialog.component';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

export class LoadingOverlayRef {
  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}
@Injectable()
export class LoadingService {

  constructor(private injector: Injector, private overlay: Overlay) {
  }
  open(): LoadingOverlayRef {
    const overlayRef = this.createOverlay();
    const dialogRef = new LoadingOverlayRef(overlayRef);
    const overlayComponent = this.attachDialogContainer(overlayRef, dialogRef);

    return dialogRef;
  }
  private createOverlay(): OverlayRef {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return this.overlay.create(overlayConfig);
  }
  private attachDialogContainer(overlayRef: OverlayRef, dialogRef: LoadingOverlayRef): ProgressDialogComponent {
    const injector = this.createInjector(dialogRef);
    const containerPortal = new ComponentPortal(ProgressDialogComponent, null, injector);
    const containerRef: ComponentRef<ProgressDialogComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private createInjector(dialogRef: LoadingOverlayRef): PortalInjector {
    const injectionTokens = new WeakMap();
    injectionTokens.set(LoadingOverlayRef, dialogRef);

    return new PortalInjector(this.injector, injectionTokens);
  }

}

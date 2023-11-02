import {ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit} from '@angular/core';
import {ProductsShoppersComponent} from "../products/products.component";
import {EventsComponent} from "../events/events.component";
import { ChatShopperComponent} from "../chat/chat.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) { }

  loadProductsShoppers() {
    this.loadComponent(ProductsShoppersComponent);
  }

  loadEvents() {
    this.loadComponent(EventsComponent);
  }

  loadChat() {
    this.loadComponent(ChatShopperComponent);
  }

  private loadComponent(component: any) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = factory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);

    const contentOutlet = document.querySelector('.content-outlet');
    if (contentOutlet) {
      contentOutlet.innerHTML = '';
      contentOutlet.appendChild(componentRef.location.nativeElement);
    } else {
      console.error('Content outlet not found. Ensure you have the correct class name in your HTML.');
    }
  }

  ngOnInit(): void {
    this.loadProductsShoppers();
  }
}

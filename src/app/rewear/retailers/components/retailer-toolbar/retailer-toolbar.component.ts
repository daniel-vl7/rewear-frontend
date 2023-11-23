import {ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit} from "@angular/core";
import {ProductsRetailerComponent} from "../products/products.component";
import {EventsRetailerComponent} from "../events/events.component";
import {ChatRetailerComponent} from "../chat/chat.component";
import {AdminPanelComponent} from "../admin-panel/admin-panel.component";

@Component({
    selector: 'retailer-toolbar',
    templateUrl: './retailer-toolbar.component.html',
    styleUrls: ['./retailer-toolbar.component.css']
})
export class RetailerToolbarComponent implements OnInit{
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private appRef: ApplicationRef
    ) { }

    loadRetailerProducts() {
        this.loadComponent(ProductsRetailerComponent);
    }

    loadRetailerEvents() {
        this.loadComponent(EventsRetailerComponent);
    }

    loadRetailerChat() {
        this.loadComponent(ChatRetailerComponent);
    }
    loadPanelAdmin() {
        this.loadComponent(AdminPanelComponent);
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
    ngOnInit() {
        this.loadRetailerProducts();
    }
}

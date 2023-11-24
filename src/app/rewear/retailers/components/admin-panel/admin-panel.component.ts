import {Component} from "@angular/core";


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'], // Puedes agregar estilos aquí
})
export class AdminPanelComponent {
  totalItems: number = 0;
  soldItems: number = 0;
  profit: number = 0;
}

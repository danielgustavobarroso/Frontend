import { Component } from '@angular/core';
import { FarmService } from './services/farm/farm.service';
import { Farm } from './entities/farm';
import { SimulatorDateService } from './services/simulator-date/simulator-date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema de Gestión de Granjas';
  farms:Farm[];
  farmName:String;
  newDate: String;

  constructor(private farmService: FarmService, private simulatorDateService: SimulatorDateService) {
    this.farms = [];
    this.farmName = 'Loading...';
    this.newDate = 'Loading...';
  }

  ngOnInit() {
    this.getFarms();
  }

  getFarms() {
    this.farmService.getFarms().subscribe({
      next: (resp) => {
        if (resp.length > 0) {
          this.farms = resp;
          this.farmName = this.farms[0].name.toUpperCase();
        } else {
          this.farmName = 'NO HAY DATOS';
        }
        this.showDate();
      },
      error: (err) => {
        this.farmName = 'DESCONOCIDO';
        this.newDate = 'DESCONOCIDA';
        alert('Error en la petición:\n\n' + err.message);
      }
    });
  }

  setDate(days: number) {
    this.simulatorDateService.setDate(days).subscribe({
      next: (resp: String) => {
        alert('Se sumó 1 día. ' + resp);
        this.showDate();
      },
      error: (err) => {
        alert('Error en la petición:\n\n' + err.message);
      }
    });
  }

  showDate() {
    this.simulatorDateService.getDate().subscribe({
      next: (resp: String) => {
        let year = resp.substring(0,4);
        let month = resp.substring(4,6);
        let day = resp.substring(6,8);
        this.newDate = year + '/' + month + '/' + day;
      },
      error: (err) => {
        this.newDate = 'DESCONOCIDA';
        alert('Error en la petición:\n\n' + err.message);
      }
    });
  }

}

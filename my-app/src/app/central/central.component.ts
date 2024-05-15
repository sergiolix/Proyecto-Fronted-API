import { Component, OnInit, inject } from '@angular/core';
import { ZonasService } from './zonas.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-central',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './central.component.html',
  styleUrl: './central.component.css'
})
export class CentralComponent implements OnInit {
 
   private zonasservice = inject(ZonasService);

   Zonas: any [] = [] ;

   ngOnInit(): void {
       this.zonasservice.getAll()
         .subscribe((Zonas: any ) => {this.Zonas = Zonas});
   }
}

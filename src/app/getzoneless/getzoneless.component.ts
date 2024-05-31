import { Component, OnInit, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-getzoneless',
  standalone: true,
  imports: [],
  templateUrl: './getzoneless.component.html',
  styleUrl: './getzoneless.component.scss'
})
export class GetzonelessComponent implements OnInit {


  counterSignal = signal(0);
  counter: number = 0;

  // ngOnInit(): void {
  //   setInterval(() => {
  //     this.counter++;
  //   }, 1000)
  // }

  ngOnInit(): void {
      setInterval(() => {
        this.counterSignal.update((counter) => counter + 1)
      }, 1000);
  }




  

}

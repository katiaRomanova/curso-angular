import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, Observer, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-cmp-observables',
  templateUrl: './cmp-observables.component.html',
  styleUrls: ['./cmp-observables.component.css']
})
export class CmpObservablesComponent implements OnInit {

  suscripciones: Array<Subscription> = [];
  mostrarComponente = true;

  constructor() { }

  ngOnInit(): void {
    //this.crearObservable();
    //this.ObservableConOperadores();
    //this.observableDeEvento();
  }

  toggleComponente() {
    this.mostrarComponente = !this.mostrarComponente;
  }

  crearObservable() {
    const miObservable = new Observable((observer: Observer<string>) => {
      observer.next('Te acabas de suscribir');

      /*eventEmitter..subscribe((datos) => {
        if(datos.jugadorQueTermina == 1) //5
        {
          observer.next ('Me toca');
        }
      })*/
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          observer.next('El mensaje ' + i)
        }, 1000 * i)
      }

      setTimeout(() => {
        //  observer.error(new Error('Ha ocurrido un error'))
        observer.complete();
      }, 7000)

      setTimeout(() => {
        observer.next('Este mensaje no se muestra')
      }, 7000)
    })

    //tenemos que subscribirnos al observable para que se ejecuta,
    const subs: Subscription = miObservable.subscribe(
      //cuando se llama al next
      (msg: string) => {
        console.log(msg);
      },
      //cuando se llama al rror
      (err) => {
        console.log(err);
      },
      //cuando se llama al complete
      () => {
        console.log('El observable se ha terminado')
      }
    )

    this.suscripciones.push(subs);
  }

  ObservableConOperadores() {
    let miObservable = interval(1000)
      //operadores siempre se usan con map,
      //orden es importante,
      //map despues de take para que estar seguro que,
      //se ejecuta con 5 números elegidos, no con todos,
      .pipe(
        filter(num => num % 2 == 0),
        //take(5),
        map(num => 'Número: ' + num)
      );

    const subs: Subscription = miObservable.subscribe((num) => {
      console.log(num);
    })

    this.suscripciones.push(subs);
  }

  observableDeEvento() {
    const miObservable = fromEvent(document.getElementsByTagName('h2'),
      'mouseenter');

    miObservable.subscribe((datos) => {
      console.log(datos);
    })
  }

  cancelarSuscripciones() {
    //this.suscripciones[0].unsubscribe();
    //this.suscripciones[1].unsubscribe();

    this.suscripciones.forEach((subs) => {
      subs.unsubscribe();
    })
  }
}

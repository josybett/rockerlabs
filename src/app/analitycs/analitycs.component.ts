import { Component, ViewChild } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppStore } from '../app.reducer';

import { AnalitycsService } from './analitycs.service';

@Component({
  selector: 'analitycs',
  templateUrl: './analitycs.component.html',
  styleUrls: ['./analitycs.component.css']
})
export class AnalitycsComponent {
    public data: any;
    iteraciones: number = 0;
    randomNumero: number;
    time: any;
    series: any;
    chartLinea: any;
    tiempo: any;
    barSource: any;
    promedioData: any;

    constructor(
        private ngRedux: NgRedux<IAppStore>,
        private analitycsService: AnalitycsService) {
          this.series = [
            { value: "Calle", name: "Calle 85" },
            { value: "Salitre", name: "Salitre plaza" },
            { value: "Parque", name: "Parque 93" },
            { value: "Calle80", name: "Calle 80" },
            { value: "Centro", name: "Centro" }
        ];
        this.chartLinea = [
            {
                time: 1466781876681,
                Calle: 10,
                Salitre: 8.5,
                Parque: 15,
                Calle80: 13.5,
                Centro: 9
            }
        ];
        this.barSource = [
            {
                zona: "Calle 85",
                count: 1
            }, {
                zona: "Salitre plaza",
                count: 2
            }, {
                zona: "Parque 93",
                count: 4
            }, {
                zona: "Calle 80",
                count: 3
            }, {
                zona: "Centro",
                count: 1
            }
        ];
        this.promedioData = [
            {
                zona: "Calle 85",
                promedio: 1
            }, {
                zona: "Salitre plaza",
                promedio: 2
            }, {
                zona: "Parque 93",
                prmedio: 4
            }, {
                zona: "Calle 80",
                promedio: 3
            }, {
                zona: "Centro",
                promedio: 1
            }
        ];
    }

    ngOnInit() {         
        this.ngRedux.dispatch({ type: 'ANALITYCS' }); 
        setInterval(() => {
            this.intervalo();            
          }, 60000);
    }

    intervalo(){
        if(this.iteraciones == 0){
            this.iteraciones = this.iteraciones + 1;
            this.analitycsService.getData().then(resp => {
                this.time = new Date (resp[0].data[0].time);
                this.tiempo = resp[0].data[0].time;
                let informacion = {
                    time: this.time,
                    Calle: 0,
                    Salitre: 0,
                    Parque: 0,
                    Calle80: 0,
                    Centro: 0
                };
                for(var i = 0; i < resp.length; i++){
                    for(var j = 0; j < resp[i].data.length; j++){                        
                        if (i === 0){
                            informacion.Calle = resp[i].data[j].speed;
                        } else if (i === 1) {
                            informacion.Salitre = resp[i].data[j].speed;                            
                        } else if (i === 2) {
                            informacion.Parque = resp[i].data[j].speed;                            
                        } else if (i === 3) {
                            informacion.Calle80 = resp[i].data[j].speed;                            
                        } else if (i === 4) {
                            informacion.Centro = resp[i].data[j].speed;                            
                        }
                    }
                }
                this.chartLinea[0] = informacion;
            })
        }else{
            this.iteraciones = this.iteraciones + 1;
            this.tiempo = this.tiempo + 1000;
            this.time = new Date(this.tiempo);
            let informacion = {
                time: this.time,
                Calle: 0,
                Salitre: 0,
                Parque: 0,
                Calle80: 0,
                Centro: 0
            };
            for(var i = 0; i < 5; i++){
                this.randomNumero =  Math.round(Math.random()*20) + 1;
                if (i === 0){
                    informacion.Calle = this.randomNumero;
                } else if (i === 1) {
                    informacion.Salitre = this.randomNumero;                            
                } else if (i === 2) {
                    informacion.Parque = this.randomNumero;                            
                } else if (i === 3) {
                    informacion.Calle80 = this.randomNumero;                            
                } else if (i === 4) {
                    informacion.Centro = this.randomNumero;                            
                }
            }
            this.chartLinea.push(informacion);
            console.log('ingresado', this.chartLinea);          
        }
        let contador = 1;
        let uno: number = 0;
        let dos = 0;
        let tres = 0;
        let cuatro = 0;
        let cinco = 0;
        for(let i = 0; i < this.chartLinea.length; i++) {
            uno = uno + this.chartLinea[i].Calle;
            dos = dos + this.chartLinea[i].Salitre;
            tres = tres + this.chartLinea[i].Parque;
            cuatro = cuatro + this.chartLinea[i].Calle80;
            cinco = cinco + this.chartLinea[i].Centro;
            contador++;
        }
        uno = (uno/contador);
        dos = (dos/contador);
        tres = (tres/contador);
        cuatro = (cuatro/contador);
        cinco = (cinco/contador);
        this.promedioData = [
            {
                zona: "Calle 85",
                promedio: uno
            }, {
                zona: "Salitre plaza",
                promedio: dos
            }, {
                zona: "Parque 93",
                prmedio: tres
            }, {
                zona: "Calle 80",
                promedio: cuatro
            }, {
                zona: "Centro",
                promedio: cinco
            }
        ];
    }

    pointClickHandler(arg) {
        arg.target.select();
    }

}
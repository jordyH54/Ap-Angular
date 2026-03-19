import { ChangeDetectionStrategy, Component, signal } from "@angular/core";



@Component({
    templateUrl: './counter.component.html',
    styles: `
    button{
    
    padding :5px;
    margin: 5px 10px;
    whidth : 75px; 
    background-color: #4c6baf; 
    color: white;
    }
    
    
    `,
 changeDetection :ChangeDetectionStrategy.OnPush,
})

export class CounterPagesComponet {

    counter = 10;
    counterSignal = signal(10);


    constructor() {
        setInterval(() => {
            this.counterSignal.update((v) => v + 1);
            console.log('Tick');
            
        }, 2000);
    }


    increaseBY(value: number) {

        this.counter += value;
        this.counterSignal.update((current) => current + value);
    }


    resetCounter() {
        this.counter = 10;
        this.counterSignal.set(0);
    }
}

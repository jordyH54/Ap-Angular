import { Component, computed, signal } from "@angular/core";
// import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";



interface Characters{
    id: number;
    name: string;
    power: number;
    
}

@Component({
    templateUrl: './dragonball-page.component.html',
    // imports: [NgClass],


})



export class DragonballPageComponet{


    name = signal ('Gohan')
    power = signal (100)


characters = signal<Characters[]>([

    {id:1, name:'Goku', power:9001},
    {id:2, name:'Vegeta', power:8000},
    {id:3, name:'Piccolo', power:3000},
    {id:4, name:'Yamcha', power:500},


]);

// powerClasses = computed (()=>{
//     return{
//         'texte-danger': true,
//     }
// })

addCharacter() {
if(!this.name() || !this.power() || this.power() <= 0 ){
    return;

}

const newCharacter: Characters = {
  id: this.characters().length + 1,
  name: this.name(),
  power: this.power(),
};

}

}
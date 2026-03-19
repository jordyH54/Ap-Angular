import { Component, signal } from "@angular/core";
import { CharacterList } from "../dragonball/character-list/character-list";



interface Character{
    id: number;
    name: string;
    power: number;
    
}

@Component({
    templateUrl: './dragonball-super-page.component.html',
    selector: 'dragonball-super',
    imports: [CharacterList],
    // imports: [NgClass],


})



export class DragonballSuperPageComponet{


    name = signal ('')
    power = signal (0)


characters = signal<Character[]>([

    {id:1, name:'Goku', power:9001},
    {id:2, name:'Vegeta', power:8000},



]);



addCharacter() {
if(!this.name() || !this.power() || this.power() <= 0 ){
    return;

}

const newCharacter: Character = {
  id: this.characters().length + 1,
  name: this.name(),
  power: this.power(),
};

//!opcion no recomendada
// this.characters().push(newCharacter);

//!opcion recomendada
this.characters.update((list)=> [...list, newCharacter]);
this.resetFieds(); 
}


resetFieds(){
    this.name.set('');
    this.power.set(0);

}

}
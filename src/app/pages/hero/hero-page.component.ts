import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";






@Component({
    templateUrl: './hero-page.component.html',
    imports: [UpperCasePipe],

    styles: `
  .container {
    margin-left: 60px; 
  }
`
})

export class HeroPageComponent {

    name = signal('Ironman');
    age = signal(22);


    heroDescription = computed(() =>{
        const description = `${this.name()} - ${this.age()}`;
        return description;
    });

    capitalizedName = computed(() => this.name().toUpperCase());


 


    changeHero() {
        this.name.set('spiderman');
        this.age.set(45);
    }


    chageAge() {
        this.age.set(60);


    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(22);
    }

}
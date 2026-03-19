import { Routes } from '@angular/router';
import { CounterPagesComponet, } from './pages/counter/counter.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponet } from './pages/dragonball/dragonball-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterPagesComponet,
        
    },


  {
    path: 'hero',
    component: HeroPageComponent,
  },


  {
    path: 'dragonball',
    component: DragonballPageComponet,
  },
  {
    path: '**',
    redirectTo: '',

  },

  


];

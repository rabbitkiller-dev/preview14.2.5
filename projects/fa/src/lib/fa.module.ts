import { NgModule } from '@angular/core';
import { FaComponent } from './fa.component';
import { Mod1 } from './mod1';
import { Mod2 } from './mod2';

const mod1: Mod1 = {
  name: '',
  mod2: undefined!,
}
const mod2: Mod2 = { name: '2', mod1: undefined!}
mod1.mod2 = mod2;
mod2.mod1 = mod1;

@NgModule({
  declarations: [
    FaComponent
  ],
  imports: [],
  exports: [
    FaComponent
  ]
})
export class FaModule {
}

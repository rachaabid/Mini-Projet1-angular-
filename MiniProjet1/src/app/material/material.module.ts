import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';

const Material = [
  MatSliderModule,
  MatToolbarModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }

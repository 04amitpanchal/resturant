import { RouterModule, Routes } from '@angular/router';
import { DishComponent } from './dish/dish.component';

const arr: Routes = [
{path: '', component: DishComponent}

];

export const routing = RouterModule.forRoot(arr);

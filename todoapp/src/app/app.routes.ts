import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Labs } from './pages/labs/labs';
import { Controlstructures } from './pages/controlstructures/controlstructures';

export const routes: Routes = [
    {
        path: '', 
        component: Home
    },
    {
        path: 'labs', 
        component: Labs
    }
    ,
    {
        path: 'constru', 
        component: Controlstructures
    }
];

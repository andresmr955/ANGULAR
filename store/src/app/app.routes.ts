import { Routes } from '@angular/router';
import { List } from './domains/products/pages/list/list';
import { ListB } from './domains/products/pages/list-b/list-b';
import { ListC } from './domains/products/pages/list-c/list-c';


import { About } from './domains/info/pages/about/about';

export const routes: Routes = [
    {
        path: '',
        component: List,
    },
    {
        path: 'ListB',
        component: ListB,
    },
    {
        path: 'ListC',
        component: ListC,
    },
    {
        path: 'about',
        component: About,
    }
];

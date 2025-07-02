import { Routes } from '@angular/router';
import { List } from './domains/products/pages/list/list';
import { ListB } from './domains/products/pages/list-b/list-b';
import { ListC } from './domains/products/pages/list-c/list-c';
import { About } from './domains/info/pages/about/about';
import { NotFound } from '@info/pages/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        component: ListC,
    },
    {
        path: 'list',
        component: List,
    },
    {
        path: 'listb',
        component: ListB,
    },
    {
        path: 'about',
        component: About,
    },
    {
        path: '**',
        component: NotFound
    }
];

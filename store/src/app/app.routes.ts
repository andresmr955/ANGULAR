import { Routes } from '@angular/router';
import { List } from './domains/products/pages/list/list';
// import { ListB } from './domains/products/pages/list-b/list-b';
import { ListC } from './domains/products/pages/list-c/list-c';
import { About } from './domains/info/pages/about/about';
import { NotFound } from '@info/pages/not-found/not-found';
import { Layout } from '@shared/components/layout/layout';
import { ProductDetail } from './domains/products/pages/product-detail/product-detail';
export const routes: Routes = [
    
    {
        path: '',
        component: Layout,
        children:[
            {
                path: '',
                component: ListC,
            },
            // {
            //     path: 'list',
            //     component: List,
            // },
            {
                path: 'list',
                loadComponent: () => import('./domains/products/pages/list/list').then(m => m.List),
             },
            // {
            //     path: 'listb',
            //     component: ListB,
            // }
            //
            
            {
                path: 'listb',
                loadComponent: () => import('./domains/products/pages/list-b/list-b')
            } 
            ,
            {
                path: 'about',
                component: About,
            },
            {
                path: 'product/:id',
                component: ProductDetail,
            },
                ]
    },
    {
        path: '**',
        component: NotFound
    }
];

import { Routes } from '@angular/router';
import { adminGuard } from './shared/guards/admin.guard';
import { loggedInGuard } from './shared/guards/logged-in.guard';
import { loggedoutGuard } from './shared/guards/loggedout.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./landing/landing.routes')
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes'),
        canActivate: [loggedoutGuard]
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.routes'),
        canActivate: [adminGuard]
    },
    {
        path: 'library',
        loadChildren: () => import('./library/library.routes'),
        canActivate: [loggedInGuard]
    }
];

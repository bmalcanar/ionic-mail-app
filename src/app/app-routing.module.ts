import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'pages/Inbox',
        pathMatch: 'full',
      },
      {
        path: 'pages/Inbox',
        loadChildren: () => import('./pages/inbox/inbox.module').then(m => m.InboxModule),
      },
      {
        path: 'pages/Outbox',
        loadChildren: () => import('./pages/outbox/outbox.module').then(m => m.OutboxModule),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

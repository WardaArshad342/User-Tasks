import { Routes } from '@angular/router';
import { FirstComponent } from './Routing/first/first.component';
import { SecondComponent } from './Routing/second/second.component';
import { RouterlinkComponent } from './Routing/routerlink/routerlink.component';

export const routes: Routes = [
    {path: 'app-first', component: FirstComponent},
    {path: 'app-second', component: SecondComponent},
    {path: 'app-routerlink', component: RouterlinkComponent}
];

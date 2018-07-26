import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { LifeCycleComponent } from './lifecyclecomponent/app.component.lifecycle';

const routes: Routes = [
    { path: "product/:id", component: LifeCycleComponent }
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);


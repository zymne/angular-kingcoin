import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";

import { ItemsListComponent } from "../items-list/items-list.component";
import { ItemFormComponent } from "../item-form/item-form.component";


const adminRoutes: Routes = [
    {
        path: 'admin', 
        component: DashboardComponent,
        children: [
            { path: '', component: ItemsListComponent },
            { path: 'items/create', component: ItemFormComponent }
        ]
    },
    { path: 'admin/items', component: ItemsListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}
import { NgModule } from "@angular/core";


import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminRoutingModule } from "./admin-routing.module";


@NgModule({
    
    imports: [
        AdminRoutingModule
    ],
    
    declarations: [
        DashboardComponent
    ]
})
export class AdminModule {

}
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'scheduler', component: SchedulerComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutesModule {}
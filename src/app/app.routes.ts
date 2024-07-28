import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {RobotsTableComponent} from "./components/robots-table/robots-table.component";
import {CustomersTableComponent} from "./components/customers-table/customers-table.component";
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'robots-table', component: RobotsTableComponent },
  { path: 'customers-table', component: CustomersTableComponent },
  { path: '', redirectTo:'',pathMatch:'full' },
];

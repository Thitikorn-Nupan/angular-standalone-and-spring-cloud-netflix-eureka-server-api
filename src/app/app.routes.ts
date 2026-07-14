import { Routes } from '@angular/router';
import {RobotsTableComponent} from "./components/robots-table/robots-table.component";
import {CustomersTableComponent} from "./components/customers-table/customers-table.component";
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'robots-data-table', component: RobotsTableComponent },
  { path: 'customers-data-table', component: CustomersTableComponent },
  /*
  The path-match strategy 'full' matches against the entire URL.
  It is important to do this when redirecting empty-path routes.
  Otherwise, because an empty path is a prefix of any URL,
  the router would apply the redirect even when navigating
  to the redirect destination, creating an endless loop.
  */
  { path: '', redirectTo:'',pathMatch:'full' },
];

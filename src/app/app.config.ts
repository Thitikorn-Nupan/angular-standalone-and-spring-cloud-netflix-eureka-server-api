import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
/* in standalone have to set provideHttpClient for use http client
With the recent changes in angular there is no app.module file. So with the new structure you will have to upate it in app.config file and ad*/
import { provideHttpClient } from '@angular/common/http' // for httpClient
import { routes } from './app.routes';
import {CustomerService} from "./services/customer-service";
import {RobotService} from "./services/robot-service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {provide : CustomerService},
    {provide : RobotService},
  ]
};

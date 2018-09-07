import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MorrisJsModule } from "angular-morris-js";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { ChartsModule } from "ng2-charts";

import { AppComponent } from "./app.component";

import { HeaderComponent } from "../shared/components/header/header.component";
import { LoginComponent } from "./authentication/login/login.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataCenterComponent } from './settings/data-center/data-center.component';

import { ProjectOverviewComponent } from './project-center/project-overview/project-overview.component';
import { ProjectSingleComponent } from './project-center/project-single/project-single.component';
import { ProjectCreateComponent } from './project-center/project-create/project-create.component';

import { CommenterComponent } from './commenter/commenter.component';


@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    DataCenterComponent,
    ProjectOverviewComponent,
    ProjectSingleComponent,
    ProjectCreateComponent,
    CommenterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    MorrisJsModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

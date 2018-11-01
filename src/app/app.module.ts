import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddDataComponent } from './add-data/add-data.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"addData", component:AddDataComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import { DetailpanelComponent } from './components/detailpanel/detailpanel.component';
import { ItempanelComponent } from './components/itempanel/itempanel.component';
import { GraphComponent } from './components/graph/graph.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolbarComponent,
    DetailpanelComponent,
    ItempanelComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

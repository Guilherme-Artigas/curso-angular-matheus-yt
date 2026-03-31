import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/events/events.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { SonComponent } from './components/son/son.component';
import { FatherComponent } from './components/father/father.component';
import { TrainingListsComponent } from './components/training-lists/training-lists.component';
import { TrainingPipesComponent } from './components/training-pipes/training-pipes.component';
import { TwoWayBindingsComponent } from './components/two-way-bindings/two-way-bindings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './components/detail/detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { MomentFormComponent } from './components/moment-form/moment-form.component';
import { MessageComponent } from './components/message/message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MomentComponent } from './components/pages/moment/moment.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventsComponent,
    EmitterComponent,
    ChangeNumberComponent,
    SonComponent,
    FatherComponent,
    TrainingListsComponent,
    TrainingPipesComponent,
    TwoWayBindingsComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    NewMomentComponent,
    MomentFormComponent,
    MessageComponent,
    MomentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }

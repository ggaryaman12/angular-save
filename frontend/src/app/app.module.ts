import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EditCompoundComponent } from './components/edit-compound/edit-compound.component';
import { CompoundItemComponent } from './components/compound-item/compound-item.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './pages/card/card.component';
import { CompoundsComponent } from './pages/compounds/compounds.component';
import { WrongrequestComponent } from './pages/wrongrequest/wrongrequest.component';
import { AddModalComponent } from './components/add-modal/add-modal.component';

const appRoutes: Routes = [
  { path: '', component: CompoundsComponent },
  { path: '', component: CardComponent },
  { path: 'compound/:id', component: CardComponent },
  { path: '**', component: WrongrequestComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditCompoundComponent,
    CompoundItemComponent,
    ButtonComponent,
    CardComponent,
    CompoundsComponent,
    WrongrequestComponent,
    AddModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

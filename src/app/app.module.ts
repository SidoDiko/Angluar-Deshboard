import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserMComponent } from './pages/user-m/user-m.component';
import { TarageComponent } from './pages/tarage/tarage.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { AccessCComponent } from './pages/access-c/access-c.component';
import { TaskMComponent } from './pages/task-m/task-m.component';
import { SecurComponent } from './pages/secur/secur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';




@NgModule({
  declarations: [
    AppComponent,
    UserMComponent,
    TarageComponent,
    GroupsComponent,
    AccessCComponent,
    TaskMComponent,
    SecurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatRadioModule,
    MatSliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsSourceComponent } from './components/news-source/news-source.component';
import { NewsComponent } from './components/news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule} from '@angular/material';
import { MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/create/create.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { NewsExtendedComponent } from './components/news-extended/news-extended.component';
import { FilterPipe } from './pipes/filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { SelectedPipePipe } from './pipes/selected-pipe.pipe';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NewsService } from './services/news.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsSourceComponent,
    NewsComponent,
    CreateComponent,
    HomeComponent,
    NewItemComponent,
    NewsExtendedComponent,
    FilterPipe,
    SelectedPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

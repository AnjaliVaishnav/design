import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { CountdownModule } from '@ciri/ngx-countdown';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider,FacebookLoginProvider,AmazonLoginProvider,VKLoginProvider,MicrosoftLoginProvider } from 'angularx-social-login';
import { FormComponent } from './form/form.component';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatTabsModule,
    MatListModule,
    MatExpansionModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule,
    CountdownModule,
    NgOtpInputModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    SocialLoginModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    // MatMomentDateModule,
    MatTableModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '846860329862-a4d1eotrq9lt3ot9ib05m591n7q9pr5d.apps.googleusercontent.com'
            ),
          },
          // {
          //   id: FacebookLoginProvider.PROVIDER_ID,
          //   provider: new FacebookLoginProvider('561602290896109'),
          // },
          // {
          //   id: AmazonLoginProvider.PROVIDER_ID,
          //   provider: new AmazonLoginProvider(
          //     'amzn1.application-oa2-client.f074ae67c0a146b6902cc0c4a3297935'
          //   ),
          // },
          // {
          //   id: VKLoginProvider.PROVIDER_ID,
          //   provider: new VKLoginProvider(
          //     '7624815'
          //   ),
          // },
          // {
          //   id: MicrosoftLoginProvider.PROVIDER_ID,
          //   provider: new MicrosoftLoginProvider('0611ccc3-9521-45b6-b432-039852002705'),
          // }
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

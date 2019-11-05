import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './external-login/login/login.component';
import { RegisterComponent } from './external-login/register/register.component';
import { PostsModule } from './posts/posts.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingModule } from './setting/setting.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { MsalModule } from '@azure/msal-angular';
import { ExternalLoginComponent } from './external-login/external-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ExternalLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    FormsModule,
    ReactiveFormsModule,
    SettingModule,
    HttpClientModule,
    MsalModule.forRoot({
      clientID: 'ea106542-4f39-4884-8f04-d9a51635b9ea',
        authority: "https://login.microsoftonline.com/common",
        validateAuthority: true,
        redirectUri: "http://localhost:4200/",
        cacheLocation : "localStorage",
        postLogoutRedirectUri: "http://localhost:4200/",
        navigateToLoginRequestUrl: true,
        popUp: true,
        consentScopes: [ "user.read", "openid", "profile"],
        unprotectedResources: ["https://www.microsoft.com/en-us/"],
        // protectedResourceMap: protectedResourceMap,
        // logger: loggerCallback,
        correlationId: '1234',
        piiLoggingEnabled: true
  })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

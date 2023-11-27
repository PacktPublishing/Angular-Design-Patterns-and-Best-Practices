import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthInterceptor } from './login/auth.interceptor';
import { HostInterceptor } from './shared/host.interceptor';
import { LoadInterceptor } from './loading-overlay/load.interceptor';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';
import { ToastrModule } from 'ngx-toastr';
import { NotificationInterceptor } from './notification/notification.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TelemetryInterceptor } from './telemetry/telemetry.interceptor';

@NgModule({
  declarations: [AppComponent, ErrorPageComponent, LoadingOverlayComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HostInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TelemetryInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

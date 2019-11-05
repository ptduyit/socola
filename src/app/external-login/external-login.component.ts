import { Component, OnInit, OnDestroy } from '@angular/core';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-external-login',
  templateUrl: './external-login.component.html',
  styleUrls: ['./external-login.component.scss']
})
export class ExternalLoginComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  constructor(
    private authService: MsalService,
    private broadcastService: BroadcastService
  ) {}

  ngOnInit() {
    this.subscription = this.broadcastService.subscribe(
      'msal:acquireTokenSuccess',
      payload => {
        console.log('acquireTokenSuccess '+payload);
      }
    );

    this.subscription = this.broadcastService.subscribe(
      'msal:acquireTokenFailure',
      payload => {
        console.log('acquireTokenFailure '+payload);
      }
    );
    this.subscription = this.broadcastService.subscribe(
      'msal:loginFailure',
      payload => {
        console.log('loginFailure '+payload);
      }
    );

    this.subscription = this.broadcastService.subscribe(
      'msal:loginSuccess',
      payload => {
        console.log('loginSuccess '+payload);
      }
    );
  }
  login(){
    this.authService.loginPopup();
  }
  ngOnDestroy() {
    this.broadcastService.getMSALSubject().next(1);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-google-login-button',
  templateUrl: './google-login-button.component.html',
  styleUrls: ['./google-login-button.component.scss']
})
export class GoogleLoginButtonComponent implements OnInit {
  clientId: string = environment.googleAuth.clientId;

  scriptElement!: any;

  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.initGoogleGsiClient();
  }

  initGoogleGsiClient() {
    this.scriptElement = this.renderer2.createElement('script');
    this.scriptElement.setAttribute('src', 'https://accounts.google.com/gsi/client');
    this.scriptElement.setAttribute('async', 'true');
    this.scriptElement.setAttribute('defer', 'true');
    this.renderer2.appendChild(this.document.body, this.scriptElement);
  }

  ngOnDestroy(): void {
    this.renderer2.removeChild(this.document.body, this.scriptElement);
  }
}

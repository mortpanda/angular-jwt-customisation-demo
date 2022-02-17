import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { OktaAuth } from "@okta/okta-auth-js";
import { BehaviorSubject } from "rxjs";
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { OktaConfigService } from "./okta-config.service";

@Injectable({
  providedIn: 'root'
})

export class OktaWidget2Service {
  private authClient2 = new OktaAuth({
    issuer: this.OktaConfig.SIW2strIssuer,
    clientId: this.OktaConfig.SIW2strClientID,
  });
  public isAuthenticated = new BehaviorSubject<boolean>(false);
  public strstateToken;
  public oktaSignIn2;
  public idToken;
  public LogoutURI = this.OktaConfig.SIW2strPostLogoutURL;
  public strMFAStatus;

  constructor(private router: Router, private OktaConfig: OktaConfigService) { }

  async checkAuthenticated() {
    const authenticated = await this.authClient2.session.exists();
    this.isAuthenticated.next(authenticated);
    return authenticated;
  }

  async login2() {
    const OktaClientID2 = this.OktaConfig.SIW2strClientID;
    const OktaBaseURI2 = this.OktaConfig.SIW2strBaseURI;
    const OktaLang2 = this.OktaConfig.SIW2strLang;  
    const OktaRedirect2 = this.OktaConfig.SIW2strRedirectURL;
    const OktaBrand2 = this.OktaConfig.SIW2strBrand;
    const OktaPostlogoutURI2 = this.OktaConfig.SIW2strPostLogoutURL;
    const OktaIssuer2 = this.OktaConfig.SIW2strIssuer;
    const OktaScope2 = this.OktaConfig.SIW2strScope;
    const OktaResType2 = this.OktaConfig.SIW2strResponseType;
    const OktaResMode2 = this.OktaConfig.SIW2strResponseMode;
    const OktaWidgetLogo2 = this.OktaConfig.SIW2strLogo;
    var oktaSignIn2 = new OktaSignIn({
      logo: OktaWidgetLogo2,
      clientId: OktaClientID2,
      baseUrl: OktaBaseURI2,
      language: OktaLang2,
      redirectUri: OktaRedirect2,
      colors: {
        brand: OktaBrand2,
      },
      postLogoutRedirectUri: OktaPostlogoutURI2,
      authParams: {
        issuer: OktaIssuer2,
        responseMode: 'fragment',
        responseType: OktaResType2,
        scopes: OktaScope2,
        pkce: false,
        prompt: OktaResMode2
      },
      
    });
    console.log(OktaScope2)
    oktaSignIn2.showSignInToGetTokens({
      el: '#okta-signin-container-2'
    }).then(function (tokens) {

      oktaSignIn2.authClient2.tokenManager.setTokens(tokens);
      oktaSignIn2.remove();
      const idToken = tokens.idToken;
      console.log("Hello, " + idToken.claims.email + "! You just logged in! :)");
      window.location.replace(OktaRedirect2);
      return true;

    }).catch(function (err) {
      console.error(err);
      return false;
    });
    //console.log('MFA Status : ' + myMFADone)
    // this.strMFAStatus = myMFADone;
  }

  
 
CloseWidget() {
  const OktaClientID2 = this.OktaConfig.SIW2strClientID;
  const OktaBaseURI2 = this.OktaConfig.SIW2strBaseURI;
  const OktaLang2 = this.OktaConfig.SIW2strLang;  
  const OktaRedirect2 = this.OktaConfig.SIW2strRedirectURL;
  const OktaBrand2 = this.OktaConfig.SIW2strBrand;
  const OktaPostlogoutURI2 = this.OktaConfig.SIW2strPostLogoutURL;
  const OktaIssuer2 = this.OktaConfig.SIW2strIssuer;
  const OktaScope2 = this.OktaConfig.SIW2strScope;
  const OktaResType2 = this.OktaConfig.SIW2strResponseType;
  const OktaResMode2 = this.OktaConfig.SIW2strResponseMode;
  const OktaWidgetLogo2 = this.OktaConfig.SIW2strLogo;
  var oktaSignIn2 = new OktaSignIn({
    logo: OktaWidgetLogo2,
    clientId: OktaClientID2,
    baseUrl: OktaBaseURI2,
    language: OktaLang2,
    redirectUri: OktaRedirect2,
    colors: {
      brand: OktaBrand2,
    },
    postLogoutRedirectUri: OktaPostlogoutURI2,
    authParams: {
      issuer: OktaIssuer2,
      responseMode: 'fragment',
      responseType: OktaResType2,
      scopes: OktaScope2,
      pkce: false,
      prompt: OktaResMode2
    },
    
  });
  oktaSignIn2.remove();

}

}


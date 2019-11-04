import { AuthenticationService } from './login/services/authentication.service ';
import { Component, Output, EventEmitter, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LayoutService } from './shared/services/layout.service';
import { ConfigService } from './shared/services/config.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    currentLang = 'en';
    toggleClass = 'ft-maximize';
    placement = 'bottom-right';
    public isCollapsed = true;
    layoutSub: Subscription;
    isLoggedIn = false;
    @Output()
    toggleHideSidebar = new EventEmitter<Object>();


    public config: any = {};

    // tslint:disable-next-line: max-line-length
    constructor(public translate: TranslateService, private layoutService: LayoutService, private configService: ConfigService) {
      const browserLang: string = translate.getBrowserLang();
      translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
      this.layoutSub = layoutService.changeEmitted$.subscribe(
        direction => {
          const dir = direction.direction;
          if (dir === 'rtl') {
            this.placement = 'bottom-left';
          } else if (dir === 'ltr') {
            this.placement = 'bottom-right';
          }
        });
    }

    ngOnInit() {
      this.config = this.configService.templateConf;
    }

    ngAfterViewInit() {
      if (this.config.layout.dir) {
        setTimeout(() => {
          const dir = this.config.layout.dir;
          if (dir === 'rtl') {
            this.placement = 'bottom-left';
          } else if (dir === 'ltr') {
            this.placement = 'bottom-right';
          }
        }, 0);
      }
    }

    ngOnDestroy() {
      if (this.layoutSub) {
        this.layoutSub.unsubscribe();
      }
    }

    ChangeLanguage(language: string) {
      this.translate.use(language);
    }

    ToggleClass() {
      if (this.toggleClass === 'ft-maximize') {
        this.toggleClass = 'ft-minimize';
      } else {
        this.toggleClass = 'ft-maximize';
      }
    }

    toggleNotificationSidebar() {
      this.layoutService.emitNotiSidebarChange(true);
    }

    toggleSidebar() {
      const appSidebar = document.getElementsByClassName('app-sidebar')[0];
      if (appSidebar.classList.contains('hide-sidebar')) {
        this.toggleHideSidebar.emit(false);
      } else {
        this.toggleHideSidebar.emit(true);
      }
    }

  }

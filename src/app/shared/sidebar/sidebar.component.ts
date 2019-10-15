import { data } from './../data/smart-data-table';
import { ModuleService } from './../services/module.service';
import { Component, OnInit, Input, ViewChild, OnDestroy, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

// import { ROUTES } from './sidebar-routes.config';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { customAnimations } from '../animations/custom-animations';
import { ConfigService } from '../services/config.service';
import { LayoutService } from '../services/layout.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  animations: customAnimations
})

export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  showDefaultLogo = true;
  custLogoFile: String;
  ROUTES: RouteInfo[] = [];
  SUBMENU: RouteInfo[] = [];
  @ViewChild('toggleIcon', { static: false }) toggleIcon: ElementRef;
  public menuItems: any[];
  depth: number;
  activeTitle: string;
  activeTitles: string[] = [];
  expanded: boolean;
  nav_collapsed_open = false;
  logoUrl = 'assets/img/logo.png';
  public config: any = {};
  layoutSub: Subscription;


  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private configService: ConfigService,
    private layoutService: LayoutService,
    private moduleService: ModuleService
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
      this.expanded = true;
    }

    this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(
      options => {
        if (options) {
          if (options.bgColor) {
            if (options.bgColor === 'white') {
              this.logoUrl = 'assets/img/logo-dark.png';
            } else {
              this.logoUrl = 'assets/img/logos/lng_logo.png';
            }
          }

          if (options.compactMenu === true) {
            this.expanded = false;
            this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
            this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
            this.nav_collapsed_open = true;
          } else if (options.compactMenu === false) {
            this.expanded = true;
            this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
            this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
            this.nav_collapsed_open = false;
          }

        }
      });
  }

  ngOnInit() {
    this.config = this.configService.templateConf;
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.moduleService.GetUserModule(user.loginId)
      .pipe(first())
      .subscribe(res => {
        if (res.mainMenu.length > 0) {
          for (let i = 0; i < res.mainMenu.length; i++) {
            if (res.mainMenu[i].moduleName === 'Dashboard') {
              // tslint:disable-next-line: max-line-length
              this.ROUTES.push({ id: res.mainMenu[i].moduleId, path: res.mainMenu[i].moduleURL, title: res.mainMenu[i].moduleName, icon: res.mainMenu[i].icon, class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [], });
            } else {
              // tslint:disable-next-line: max-line-length
              this.ROUTES.push({ id: res.mainMenu[i].moduleId, path: res.mainMenu[i].moduleURL, title: res.mainMenu[i].moduleName, icon: res.mainMenu[i].icon, class: res.mainMenu[i].classes, badge: '', badgeClass: '', isExternalLink: false, submenu: [], });
            }
            for (let j = 0; j < res.subMenu.length; j++) {
              if (res.mainMenu[i].moduleId === res.subMenu[j].parentId) {
                // console.log(j + '-----' + res.subMenu[j].parentId + '---' + res.mainMenu[i].moduleId);
                // tslint:disable-next-line: max-line-length
                this.ROUTES.filter(m => m.id === res.subMenu[j].parentId).map(m => m.submenu.push({id: res.subMenu[j].moduleId, path: res.subMenu[j].moduleURL, title: res.subMenu[j].moduleName, icon: res.subMenu[j].icon, class: res.subMenu[j].classes, badge: '', badgeClass: '', isExternalLink: false, submenu: [], }))
                // tslint:disable-next-line: max-line-length
                this.SUBMENU.push({ id: res.subMenu[j].moduleId, path: res.subMenu[j].moduleURL, title: res.subMenu[j].moduleName, icon: res.subMenu[j].icon, class: res.subMenu[j].classes, badge: '', badgeClass: '', isExternalLink: false, submenu: [], });
              }
            }
          }
          // const aa = this.ROUTES.filter(m => m.path === null);
          // console.log('A ', this.ROUTES);
          // aa.map(m => m.class = 'has-sub');
          // console.log('B ', aa);
        } else {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Module not assigned',
          });
        }


      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
    // this.ROUTES = [
    //   {
    //     tslint:disable-next-line: max-line-length
    //     path: '/dashboard', title: 'Dashboard', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
    // }
    // ];
    this.menuItems = this.ROUTES;

    if (this.config.layout.sidebar.backgroundColor === 'white') {
      this.logoUrl = 'assets/img/logo-dark.png';
    } else {
      if (localStorage.getItem('currentUser')) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser.refCustId === 0) {
          this.showDefaultLogo = true;
          this.logoUrl = 'assets/img/logos/lng_logo.png';
        } else {
          this.showDefaultLogo = false;
          this.custLogoFile = currentUser.custLogo;
        }
      } else {
        this.showDefaultLogo = true;
        this.logoUrl = 'assets/img/logos/lng_logo.png';
      }
    }
  }


  ngAfterViewInit() {

    setTimeout(() => {
      if (this.config.layout.sidebar.collapsed != undefined) {
        if (this.config.layout.sidebar.collapsed === true) {
          this.expanded = false;
          this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
          this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
          this.nav_collapsed_open = true;
        } else if (this.config.layout.sidebar.collapsed === false) {
          this.expanded = true;
          this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
          this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
          this.nav_collapsed_open = false;
        }
      }
    }, 0);


  }

  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  toggleSlideInOut() {
    this.expanded = !this.expanded;
  }

  handleToggle(titles) {
    this.activeTitles = titles;
  }

  // NGX Wizard - skip url change
  ngxWizardFunction(path: string) {
    if (path.indexOf("forms/ngx") !== -1)
      this.router.navigate(["forms/ngx/wizard"], { skipLocationChange: false });
  }
}

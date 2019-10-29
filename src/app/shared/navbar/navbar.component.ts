import { value } from './../data/dropdowns';
import { Component, Output, EventEmitter, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../services/layout.service';
import { Subscription } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { AuthenticationService } from 'app/login/services/authentication.service ';
import Swal from 'sweetalert2';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { first } from 'rxjs/operators';
import { CustomerService } from 'app/dashboard/superadmin/masters/customer/services/customer.services';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  currentLang = 'en';
  toggleClass = 'ft-maximize';
  placement = 'bottom-right';
  public isCollapsed = true;
  layoutSub: Subscription;
  @Output()
  toggleHideSidebar = new EventEmitter<Object>();
  loginName: string;
  custId: number;
  superAdmin;
  custAdminName;
  enable = true;
  customers: any = [];


  public config: any = {};

  // tslint:disable-next-line: max-line-length
  constructor(
    public translate: TranslateService,
    private layoutService: LayoutService,
    private configService: ConfigService,
    private authService: AuthenticationService,
    private confirmationDialogService: ConfirmationDialogService,
    private customerService: CustomerService,
    ) {
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
    const currUser = JSON.parse(localStorage.getItem('currentUser'));
    this.loginName = currUser.loginName;
    this.superAdmin = localStorage.getItem('superAdmin');
    this.custId = currUser.refCustId;
    this.config = this.configService.templateConf;
    this.getCustomerAll();
    if (localStorage.getItem('custAdminName')) {
      this.custAdminName = 'You have switched as ' + localStorage.getItem('custAdminName') + ' admin';
      this.enable = false;
    }
  }

  getCustomerAll() {
    this.customerService.getAllCustomers()
      .pipe(first())
      .subscribe(
        res => {
          if (res.status.error) {
            Swal.fire({
              type: 'error',
              title: res.status.message,
            });
          } else {
            this.customers = res.dataList;
          }
        },
        error => {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        });
  }

  switchToAdmin() {
    console.log('enable...', this.enable);
    if (!this.enable) {
      this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to switch back to super admin ... ?')
      .then((confirmed) => {
        if (confirmed) {
          const currUser = JSON.parse(localStorage.getItem('currentUser'));
          currUser.refCustId = 0;
          this.custId = 0;
          localStorage.setItem('currentUser', JSON.stringify(currUser));
          localStorage.removeItem('custAdminName');
          window.location.reload();
        } else {
          this.enable = false;
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
  }

  changeCustAdminMode(event) {
    // console.log('change cust admin to', event.target.options[event.target.options.selectedIndex].text);
    if (event.target.value !== '0') {
      this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to switch to customer admin ... ?')
      .then((confirmed) => {
        if (confirmed) {
          const currUser = JSON.parse(localStorage.getItem('currentUser'));
          currUser.refCustId = event.target.value;
          this.custId = event.target.value;
          localStorage.setItem('currentUser', JSON.stringify(currUser));
          localStorage.setItem('custAdminName', event.target.options[event.target.options.selectedIndex].text);
          window.location.reload();
        } else {
          const currUser = JSON.parse(localStorage.getItem('currentUser'));
          this.custId = currUser.refCustId;
          this.enable = true;
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }
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

  logout() {
    console.log('logout...');
    localStorage.clear();
    this.authService.logout();
  }
}

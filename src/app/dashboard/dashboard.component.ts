import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {

    subscription: Subscription;


    constructor(private router: Router) {
    }

    ngOnInit() {
        this.subscription = this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(() => window.scrollTo(0, 0));
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}

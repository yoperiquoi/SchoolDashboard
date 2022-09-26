import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { errorRoute } from './layouts/error/error.route';
import { navbarRoute } from './layouts/navbar/navbar.route';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import { Authority } from 'app/config/authority.constants';
import { IndexComponent } from './index/index.component';
import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { JokesComponent } from './jokes/jokes.component';
import { HourComponent } from './hour/hour.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BreakComponent } from './break/break.component';
import { EndDayComponent } from './end-day/end-day.component';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'calendar',
          component: CalendarComponent,
        },
        {
          path: 'break',
          component: BreakComponent,
        },
        {
          path: 'endDay',
          component: EndDayComponent,
        },
        {
          path: 'jokes',
          component: JokesComponent,
        },
        {
          path: 'hour',
          component: HourComponent,
        },
        {
          path: 'admin',
          data: {
            authorities: [Authority.ADMIN],
          },
          canActivate: [UserRouteAccessService],
          loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule),
        },
        {
          path: 'account',
          loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
        },
        {
          path: 'login',
          loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
        },
        {
          path: 'index',
          component: IndexComponent,
        },
        ...LAYOUT_ROUTES,
      ],
      { enableTracing: DEBUG_INFO_ENABLED }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

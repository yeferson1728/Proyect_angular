import { Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UpdateUserAddressComponent } from './components/update-user-address/update-user-address.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserPurchaseHistoryComponent } from './components/user-purchase-history/user-purchase-history.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { isLoggedGuard } from './guards/is-logged.guard';
import { redirectIfLoggedGuard } from './guards/redirect-if-logged.guard';
import { ProductsComponent } from './pages/products/products.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'updateUserAddress', component: UpdateUserAddressComponent },
  { path: 'updateUser', component: UpdateUserComponent },
  { path: 'userPurchaseHistory', component: UserPurchaseHistoryComponent },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [isLoggedGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [redirectIfLoggedGuard],
  },
  { path: 'products', component: ProductsComponent },
];

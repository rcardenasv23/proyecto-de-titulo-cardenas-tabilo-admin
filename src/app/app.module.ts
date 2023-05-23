import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {SucceedSnackbarComponent} from './components/snack-bar/succeed-snackbar/succeed-snackbar.component'
import {ErrorSnackBarComponent} from './components/snack-bar/error-snack-bar/error-snack-bar.component'
import {LoadingSnackBarComponent} from './components/snack-bar/loading-snack-bar/loading-snack-bar.component'
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from "@angular/material/snack-bar";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CategoryComponent } from './pages/admin/category/category.component';
import { UnitComponent } from './pages/admin/unit/unit.component';
import { ProductStateComponent } from './pages/admin/product-state/product-state.component';
import { PublicationComponent } from './pages/admin/publication/publication.component';
import { UpdateModalComponent } from './components/update-modal/update-modal.component';
import { CreateModalComponent } from './components/create-modal/create-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CategoryComponent,
    UnitComponent,
    ProductStateComponent,
    PublicationComponent,
    UpdateModalComponent,
    CreateModalComponent,
    SucceedSnackbarComponent,
    ErrorSnackBarComponent,
    LoadingSnackBarComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule,
        BrowserAnimationsModule
    ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 2000,
        verticalPosition: "center",
        horizontalPosition: "center",
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

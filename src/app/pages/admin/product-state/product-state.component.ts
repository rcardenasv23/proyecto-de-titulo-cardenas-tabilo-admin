import { Component, OnInit } from '@angular/core';
import {ProductStateService} from "../../../services/product-state/product-state.service";
import {ProductState} from "../../../models/product-state";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SucceedSnackbarComponent} from "../../../components/snack-bar/succeed-snackbar/succeed-snackbar.component";
import {ErrorSnackBarComponent} from "../../../components/snack-bar/error-snack-bar/error-snack-bar.component";

@Component({
  selector: 'app-product-state',
  templateUrl: './product-state.component.html',
  styleUrls: ['./product-state.component.scss']
})
export class ProductStateComponent implements OnInit {
  states!:Array<ProductState>
  targetProductState:ProductState | undefined

  constructor(private stateService:ProductStateService, private snackbar:MatSnackBar) {
    this.stateService.GETSTATES().subscribe({
      next:(res)=>{
        this.states = res.data
      }
    })
  }

  ngOnInit(): void {
  }

  updateTarget(event:any){
    this.stateService.UPDATESTATE(event.id, event.value).subscribe({
      next:(res:any)=>{
        this.snackbar.openFromComponent(SucceedSnackbarComponent,  {
          data:"Estado de producto creado correctamente",
          panelClass: 'snack-bar-success'
        });
        this.stateService.GETSTATES().subscribe({
          next:(res:any)=>{
            this.states = res.data
          }
        })
      },error:(err:any)=>{
        this.snackbar.openFromComponent(ErrorSnackBarComponent,  {
          data:"Error al crear estado de producto",
          panelClass: 'snack-bar-error'
        });
        console.log(err)
      }
    })
  }

  createTarget(event:any){
    this.stateService.CREATESTATE(event).subscribe({
      next:(res:any)=>{
        this.snackbar.openFromComponent(SucceedSnackbarComponent,  {
          data:"Estado de producto creado correctamente",
          panelClass: 'snack-bar-success'
        });
        this.stateService.GETSTATES().subscribe({
          next:(res)=>{
            this.states = res.data
          }
        })
      },error:(err:any)=>{
        this.snackbar.openFromComponent(ErrorSnackBarComponent,  {
          data:"Error al crear estado de producto",
          panelClass: 'snack-bar-error'
        });
        console.log(err)
      }
    })
  }

}

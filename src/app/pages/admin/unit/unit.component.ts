import { Component, OnInit } from '@angular/core';
import {UnitService} from "../../../services/unit/unit.service";
import {Unity} from "../../../models/unity";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ErrorSnackBarComponent} from "../../../components/snack-bar/error-snack-bar/error-snack-bar.component";
import {SucceedSnackbarComponent} from "../../../components/snack-bar/succeed-snackbar/succeed-snackbar.component";

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {
  unities!:Array<Unity>
  targetUnity:Unity | undefined

  constructor(public unitService:UnitService, private snackbar:MatSnackBar) {
    this.unitService.GETUNITY().subscribe({
      next:(res)=>{
        this.unities = res.data
      }
    })
  }

  ngOnInit(): void {

  }

  updateTarget(event:any){
    this.unitService.UPDATEUNITY(event.id, event.value).subscribe({
      next:(res:any)=>{
        this.snackbar.openFromComponent(SucceedSnackbarComponent,  {
          data:"Unidad actualizada correctamente",
          panelClass: 'snack-bar-success'
        });
        this.unitService.GETUNITY().subscribe({
          next:(res)=>{
            this.unities = res.data
          }
        })
      },error:(err:any)=>{
        this.snackbar.openFromComponent(ErrorSnackBarComponent,  {
          data:"Error al actualizar unidad",
          panelClass: 'snack-bar-error'
        });
        console.log(err)
      }
    })
  }

  createTarget(event:any){
    this.unitService.CREATEUNITY(event).subscribe({
      next:(res:any)=>{
        this.snackbar.openFromComponent(SucceedSnackbarComponent,  {
          data:"Unidad creada correctamente",
          panelClass: 'snack-bar-success'
        });
        this.unitService.GETUNITY().subscribe({
          next:(res)=>{
            this.unities = res.data
          }
        })
      },error:(err:any)=>{
        this.snackbar.openFromComponent(ErrorSnackBarComponent,  {
          data:"Error al crear unidad",
          panelClass: 'snack-bar-error'
        });
        console.log(err)
      }
    })
  }

}

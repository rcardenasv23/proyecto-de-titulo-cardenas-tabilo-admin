import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../services/category/category.service";
import {Category} from "../../../models/category";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SucceedSnackbarComponent} from "../../../components/snack-bar/succeed-snackbar/succeed-snackbar.component";
import {ErrorSnackBarComponent} from "../../../components/snack-bar/error-snack-bar/error-snack-bar.component";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories!:Array<Category>
  targetCategory:Category | undefined

  constructor(public categoryService:CategoryService, private snackbar:MatSnackBar) {
    this.categoryService.GETCATEGORIES().subscribe({
      next:(res)=>{
        this.categories = res.data
      }
    })

  }

  ngOnInit(): void {
  }

  updateTarget(event:any){
    this.categoryService.UPDATECATEGORY(event.id, event.value).subscribe({
      next:(res:any)=>{
        this.snackbar.openFromComponent(SucceedSnackbarComponent,  {
          data:"Categoría actualizada correctamente",
          panelClass: 'snack-bar-success'
        });
        this.categoryService.GETCATEGORIES().subscribe({
          next:(res)=>{
            this.categories = res.data
          }
        })
      },error:(err:any)=>{
        this.snackbar.openFromComponent(ErrorSnackBarComponent,  {
          data:"Error al actualizar categoría",
          panelClass: 'snack-bar-error'
        });
        console.log(err)
      }
    })
  }

  createTarget(event:any){
    this.categoryService.CREATECATEGORY(event).subscribe({
      next:(res:any)=>{
        this.snackbar.openFromComponent(SucceedSnackbarComponent,  {
          data:"Categoría creada correctamente",
          panelClass: 'snack-bar-success'
        });
        this.categoryService.GETCATEGORIES().subscribe({
          next:(res)=>{
            this.categories = res.data
          }
        })
      },error:(err:any)=>{
        this.snackbar.openFromComponent(ErrorSnackBarComponent,  {
          data:"Error al crear categoría",
          panelClass: 'snack-bar-error'
        });
        console.log(err)
      }
    })
  }
}

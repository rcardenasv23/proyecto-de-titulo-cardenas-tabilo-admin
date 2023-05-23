import { Component, OnInit } from '@angular/core';
import {PublicationService} from "../../../services/publication/publication.service";
import {environment} from "../../../../environments/environment"
import {MatSnackBar} from "@angular/material/snack-bar";
import {ErrorSnackBarComponent} from "../../../components/snack-bar/error-snack-bar/error-snack-bar.component";
import {SucceedSnackbarComponent} from "../../../components/snack-bar/succeed-snackbar/succeed-snackbar.component";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  publications!:any
  environment = environment
  constructor(private publicationService:PublicationService, private snackbar:MatSnackBar) {
    this.publicationService.GETALLPUBLICATIONS().subscribe({
      next:(res)=>{
        this.publications = res.data.items
      }
    })
  }

  ngOnInit(): void {

  }

  enable(id:string){
    this.publicationService.ENABLEPUBLICATION(id).subscribe({
      next:(res)=>{
        this.snackbar.openFromComponent(SucceedSnackbarComponent,  {
          data:"Publicación habilitada",
          panelClass: 'snack-bar-success'
        });
        this.publicationService.GETALLPUBLICATIONS().subscribe({
          next:(res)=>{
            this.publications = res.data.items
          }
        })
      },
      error:(err)=>{
        this.snackbar.openFromComponent(ErrorSnackBarComponent,  {
          data:"Error al habilitar publicación",
          panelClass: 'snack-bar-error'
        });
        console.log(err)
      }
    })
  }

  disable(id:string){
    this.publicationService.DISABLEDPUBLICATION(id).subscribe({
      next:(res)=>{
        this.snackbar.openFromComponent(SucceedSnackbarComponent,  {
          data:"Publicación deshabilitada",
          panelClass: 'snack-bar-success'
        });
        this.publicationService.GETALLPUBLICATIONS().subscribe({
          next:(res)=>{
            this.publications = res.data.items
          }
        })
      },
      error:(err)=>{
        this.snackbar.openFromComponent(ErrorSnackBarComponent,  {
          data:"Error al deshabilitar publicación",
          panelClass: 'snack-bar-error'
        });
        console.log(err)
      }
    })
  }
}

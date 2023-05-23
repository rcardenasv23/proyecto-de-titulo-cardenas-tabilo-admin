import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  activated!:number
  constructor(private router:Router) {
    router.events.subscribe((val:any) =>{
      if(val instanceof NavigationEnd){
        if(val.url === "/admin"){
          this.activated = 0
        }
        else if(val.url === "/admin/(settings:unit)"){
          this.activated = 1
        }
        else if(val.url === "/admin/(settings:product-state)"){
          this.activated = 2
        }
        else if(val.url === "/admin/(settings:publications)"){
          this.activated = 3
        }
      }
    })
  }

  ngOnInit(): void {
  }


  logOut(){
    localStorage.removeItem('subasterAdminToken')
    window.location.reload()
  }

}

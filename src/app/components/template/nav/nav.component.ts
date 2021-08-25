import { SimpleChange, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  aberto: Boolean = true;

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
          this.aberto = false;
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
          this.aberto=true
        }
      });
  }
  ngOnInit(): void {
  }

  teste(){
    this.aberto = !this.aberto
    this.sidenav.toggle()
  }

  ngOnChanges(changes: SimpleChange){
    console.log("mudou")
  }

}

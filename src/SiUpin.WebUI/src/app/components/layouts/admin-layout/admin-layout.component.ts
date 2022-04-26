import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  mode = new FormControl('side');
  shouldRun = true;
  isShowing: boolean = true;
  
  constructor() { }

  onTriggeredSideNav(): void {
    this.isShowing = !this.isShowing;
  }

  ngOnInit(): void {}
}

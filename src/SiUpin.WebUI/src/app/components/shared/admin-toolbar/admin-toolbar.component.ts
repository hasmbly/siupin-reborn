import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.css']
})
export class AdminToolbarComponent implements OnInit {
  animal: string = '';
  name: string = '';

  constructor(public dialog: MatDialog) {}

  @Output() sideNavEmitter = new EventEmitter<void>();

  openDialogLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      height: '300px',
      data: { username: '', password: '' }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  triggerSideNavEmitter(): void {
    this.sideNavEmitter.emit();
  }

  ngOnInit(): void {}
}

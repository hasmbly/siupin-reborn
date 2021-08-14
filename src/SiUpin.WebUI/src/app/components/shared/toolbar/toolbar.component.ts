import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AskToPmhpComponent } from '../../ask-to-pmhp/ask-to-pmhp.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  animal: string = '';
  name: string = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AskToPmhpComponent, {
      width: '500px',
      height: '300px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit(): void {}
}

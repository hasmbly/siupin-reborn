import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-ask-to-pmhp',
  templateUrl: './ask-to-pmhp.component.html',
  styleUrls: ['./ask-to-pmhp.component.css'],
})
export class AskToPmhpComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AskToPmhpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

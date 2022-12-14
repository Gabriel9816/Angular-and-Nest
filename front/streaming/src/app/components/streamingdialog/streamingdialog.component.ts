import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Streaming } from 'src/app/model/streamingmodel';

@Component({
  selector: 'app-streamingdialog',
  templateUrl: './streamingdialog.component.html',
  styleUrls: ['./streamingdialog.component.css'],
})
export class StreamingdialogComponent {
  constructor(
    public dialogRef: MatDialogRef<StreamingdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Streaming
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

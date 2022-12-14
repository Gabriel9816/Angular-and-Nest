import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Streaming } from 'src/app/model/streamingmodel';
import { StreamingService } from 'src/app/service/streaming.service';
import { StreamingdialogComponent } from '../streamingdialog/streamingdialog.component';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.css'],
})
export class StreamingComponent implements OnInit {
  constructor(
    private streamingService: StreamingService,
    public dialog: MatDialog
  ) {}

  streamingas!: Streaming[];

  ngOnInit(): void {
    this.streamingService.getstreaming().subscribe((data: Streaming[]) => {
      this.streamingas = data;
      console.log(this.streamingas);
    });
  }

  deletestreaming(streamingaid: Streaming): void {
    this.streamingService
      .deletestreaming(streamingaid.id as string)
      .subscribe(() => {
        this.streamingas = this.streamingas.filter(
          (id) => id.id !== streamingaid.id
        );
      });
  }

  openDialog(streaming: Streaming | null): void {
    const dialogRef = this.dialog.open(StreamingdialogComponent, {
      width: '250px',
      data:
        streaming === null
          ? {
              title: '',
              artists: '',
              link: '',
            }
          : {
              id: streaming.id,
              title: streaming.title,
              artists: streaming.artists,
              link: streaming.link,
            },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.streamingService.streamingsave(result).subscribe({
        next: (a) => {
          this.streamingas.push(a);
        },
      });
    });
  }
}

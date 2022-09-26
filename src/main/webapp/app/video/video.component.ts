import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video-model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'jhi-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  video!: Video;

  constructor(private _sanitazer: DomSanitizer) {}

  ngOnInit(): void {
    this.video = this.getVideo();
  }

  getVideo(): Video {
    return new Video('https://www.youtube.com/embed/vmXJ7f8D8IQ', this._sanitazer);
  }
}

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export class Video {
  safeURL: SafeResourceUrl;
  constructor(videoURL: string, private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(videoURL);
  }
}

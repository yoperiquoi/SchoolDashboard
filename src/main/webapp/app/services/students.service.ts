import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  allStudents(): Photo[] {
    return [
      new Photo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvWkTNAL9h45LkE1QHucIxn3MYfeghd4Tng&usqp=CAU', 'Ralph', 'late'),
      new Photo('https://anniversaire-celebrite.com/upload/250x333/bart-simpson-250.jpg', 'Bart', 'absent'),
      new Photo('https://anniversaire-celebrite.com/upload/250x333/milhouse-van-houten-250.jpg', 'Milhouse', 'here'),
      new Photo('https://pbs.twimg.com/profile_images/3148840563/41d8f4792bb4f6c586eced67e0d53cc1_400x400.png', 'Lisa', 'here'),
      new Photo('https://i.skyrock.net/1008/23621008/pics/687534303_small.jpg', 'Nelson', 'here'),
      new Photo('http://www.thesimpsonsshow.fr/personnages/Martin_Prince.gif', 'Martin', 'here'),
      new Photo('https://i.skyrock.net/7692/76417692/pics/2964699451_1_3_pVbll7hQ.gif', 'Kearney', 'here'),
      new Photo('https://i.skyrock.net/7692/76417692/pics/2964699451_1_5_wnRqZadm.jpg', 'Dolph', 'here'),
      new Photo('https://i.skyrock.net/7692/76417692/pics/2964699451_1_7_Dulf151k.gif', 'Uter', 'here'),
      new Photo('https://i.skyrock.net/7692/76417692/pics/2964699451_1_9_vBLbYucP.png', 'Wendell', 'here'),
      new Photo('https://i.skyrock.net/7692/76417692/pics/2964699451_1_11_zQiJHd8Y.png', 'Janey', 'here'),
    ];
  }
}

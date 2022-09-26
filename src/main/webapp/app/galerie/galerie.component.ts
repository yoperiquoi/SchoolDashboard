import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss'],
})
export class GalerieComponent implements OnInit {
  public pictures: string[] = [];

  ngOnInit(): void {
    this.pictures = [
      'https://www.imt-atlantique.fr/sites/default/files/vie-etudiante/sport/vie-etudiante-sport.jpg',
      'https://www.letelegramme.fr/images/2019/01/03/zanzibar-perle-authentique-de-l-indien_4356943.jpg',
      'https://alternance.imt.fr/wp-content/uploads/2016/03/Mines_Nantes-e1468845297956-840x400.jpg',
      'https://media-exp1.licdn.com/dms/image/C5603AQG_Ky-fEkC8-g/profile-displayphoto-shrink_200_200/0/1580894363227?e=1646870400&v=beta&t=NwX1FDN52HY5bSOJRBKd-jPvkoEdeWy70y2jMcHBN1M',
      'https://alltrends.today/wp-content/uploads/2018/10/UNE_blague-16h16.png',
      'https://www.kuoni.fr/wp-content/uploads/2021/07/yeo186kupw96js0.jpg',
      'https://generations.fr/media/news/thumb/870x489_mister-v-album-couv-h2.jpg',
      'https://media-exp1.licdn.com/dms/image/C4E22AQH2M0Alu0Y5TQ/feedshare-shrink_800/0/1641317087800?e=1644451200&v=beta&t=gI7svzNCiczocJK6PLoY6pqvOjOqaRDMMpDXrAxZcOE',
      'https://alternance.imt.fr/wp-content/uploads/2020/11/classement_usinenouvelle-300x200.jpg',
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { Post } from '../entities/post';
import { LocalDate } from '../entities/local-date';

@Component({
  selector: 'jhi-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public displayedPosts: Post[] = [];

  ngOnInit(): void {
    this.displayedPosts = this.getLastPosts();
  }

  getLastPosts(): Post[] {
    return [
      new Post(
        'egar fan',
        'abonner vou a le egar @le_egar !',
        'https://pbs.twimg.com/profile_images/1482133169843453953/6pWZRMSM_400x400.jpg',
        new LocalDate('2022-01-17T21:44:00')
      ),
      new Post(
        'egar fan',
        'bonjour non bonsoir o jen ai marre à chaque foit je me trompe entre bonjour et bonsoir du cout je termine pas jen ai marre',
        'https://pbs.twimg.com/profile_images/1482133169843453953/6pWZRMSM_400x400.jpg',
        new LocalDate('2022-01-17T20:02:00')
      ),
      new Post(
        'Monsieur Plouf',
        "Konami s'est fait 150'000 dollars en vendant des NFT de vieux assets pourris de Castlevania, le barrage a cédé, ils vont tous s'y mettre.\n\nAttendez de voir Nintendo vendre des NFT de vieux assez pouraves de Mario et vous allez comprendre votre douleur.",
        'https://pbs.twimg.com/profile_images/820322314264911874/lqQKyh_I_400x400.jpg',
        new LocalDate('2022-01-17T15:02:00')
      ),
      new Post(
        'egar fan',
        'bonsoir non bon matin à tous jespere une bonne journee car je suit fane de egar normalement cest bon',
        'https://pbs.twimg.com/profile_images/1482133169843453953/6pWZRMSM_400x400.jpg',
        new LocalDate('2022-01-17T07:23:00')
      ),
      new Post(
        'egar',
        "si jamais vous aimez pas une expression vous pouver la changer un peu ca sappelle la liberté dexpression Pouce levéattention quand meme a ne pas vendre le pot de l ours avant de l'avoir rempli comme on dit",
        'https://pbs.twimg.com/profile_images/1462059779082305541/-8koZx9P_400x400.jpg',
        new LocalDate('2022-01-16T17:16:00')
      ),
      new Post(
        'Debunker des Etoiles',
        'Quand quelqu’un que vous connaissez vous dit que le vaccin n’est pas efficace, ne discutez pas seulement sur les chiffres ;\nDemandez lui aussi pourquoi toutes les autorités de santé du monde ne s’en sont pas aperçu, alors que lui, Jean-Robert, retraité dans le Jura, l’a remarqué.',
        'https://pbs.twimg.com/profile_images/762398628581433344/mYrB_poW_400x400.jpg',
        new LocalDate('2022-01-13T08:51:00')
      ),
    ];
  }
}

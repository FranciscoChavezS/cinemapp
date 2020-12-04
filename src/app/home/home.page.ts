import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  peliculas = [];/*
    {
      titulo: "Joker",
      anio: 2019,
      director: "Joaquin Phoenix",
      imagen: "https://es.web.img3.acsta.net/pictures/19/09/17/17/03/5442885.jpg"
    },
    {
      titulo: "Avengers: Endgame",
      anio: 2019,
      director: "Joe Russo, Anthony Russo",
      imagen: "https://i.pinimg.com/originals/37/46/b3/3746b33e879cca0e7c80611811f44318.jpg"
    }
  ];*/
  constructor(private peliculasService: PeliculasService) {}
  ngOnInit(){
    this.peliculasService.peliculas.subscribe(peliculas => {
      this.peliculas = peliculas;
    });
    // this.peliculasService.getPeliculas();
  }
}

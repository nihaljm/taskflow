import { Component } from '@angular/core';
import { About } from '../about/about'; // Vérifie que le chemin vers le fichier shih 

@Component({
  imports: [About], // On ajoute le composant About ici
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
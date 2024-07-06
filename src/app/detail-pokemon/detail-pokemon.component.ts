import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS_LIST } from '../pokemon-mock-list';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
})
export class DetailPokemonComponent {
  pokemonList?: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private pRoute: ActivatedRoute, private pRouter: Router) {}

  ngOnInit() {
    this.pokemonList = POKEMONS_LIST;
    const idPoke: string | null = this.pRoute.snapshot.paramMap.get('id');
    if (idPoke) {
      this.pokemon = this.pokemonList.find((pTemp) => pTemp.id == +idPoke);
    } else {
      this.pokemon = this.pokemonList[0];
      console.log('aucun pokemon ne correspond à cet ID ' + idPoke);
    }
  }

  goToListPokemon() {
    this.pRouter.navigate(['/pokemons']);
  }
}

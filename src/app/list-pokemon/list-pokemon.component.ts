import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS_LIST } from '../pokemon-mock-list';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
})
export class ListPokemonComponent {
  title = 'Liste des pokemons';
  pokemonList = POKEMONS_LIST;
  pokemonSelected: Pokemon | undefined;

  constructor(private pRoute: Router) {}

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pIdPokemon: string) {
    const pokemonExist: Pokemon | undefined = this.pokemonList.find(
      (pkeTemp) => pkeTemp.id == +pIdPokemon
    );
    if (pokemonExist) {
      console.log('pokemon choisi est le= ' + pokemonExist.name);
      this.pokemonSelected = pokemonExist;
    } else {
      this.pokemonSelected = undefined;
      console.log('pokemon introuvable');
    }
  }

  goToPokemon(pkemon: Pokemon) {
    this.pRoute.navigate(['/pokemon', pkemon.id]);
  }
}

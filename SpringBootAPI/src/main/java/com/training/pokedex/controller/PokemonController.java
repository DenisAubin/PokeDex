package com.training.pokedex.controller;

import com.training.pokedex.entity.Pokemon;
import com.training.pokedex.service.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/poke")
public class PokemonController {

    @Autowired
    PokemonService pokemonService;

    public PokemonService getPokemonService() {
        return pokemonService;
    }

    public void setPokemonService(PokemonService pokemonService) {
        this.pokemonService = pokemonService;
    }

    @GetMapping("")
    public Pokemon displayPoke() {
        System.out.println("Tentative d'affichage d'un pokemon");
        Pokemon poke = new Pokemon();
        poke.name = "Bulbizarre";
        poke.id = 1;
        return poke;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{id}")
    public Pokemon displayPokeById(@PathVariable("id") Long pokeId) {
        System.out.println("Tentative d'affichage du poke" + pokeId);
        return pokemonService.getPokeById(pokeId);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/pokeList")
    public Iterable<Pokemon> displayPokeList() {
        System.out.println("Tentative d'affichage de lu pokedex");
        return pokemonService.getPokeList();
    }

}

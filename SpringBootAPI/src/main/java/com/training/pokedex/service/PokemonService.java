package com.training.pokedex.service;


import com.training.pokedex.entity.Pokemon;
//import com.training.pokedex.repository.PokemonRepository;
import com.training.pokedex.repository.PokemonRepositoryInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PokemonService {

    @Autowired
    PokemonRepositoryInterface pokeRepo;

    public Iterable<Pokemon> getPokeList(){
        return pokeRepo.findAll();
    }

    public Pokemon getPokeById(Long id){
        return pokeRepo.findById(id).orElseThrow();
    }
}

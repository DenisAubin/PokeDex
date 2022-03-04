package com.training.pokedex.repository;

import com.training.pokedex.entity.Pokemon;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PokemonRepositoryInterface extends CrudRepository<Pokemon, Long> {
}

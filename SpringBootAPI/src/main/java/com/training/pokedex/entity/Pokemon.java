package com.training.pokedex.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pokemon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;
    public String name;

    public Pokemon() {
    }

    public Pokemon(long id, String name) {
        this.id = id;
        this.name = name;
    }
}

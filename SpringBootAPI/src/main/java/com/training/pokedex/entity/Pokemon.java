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
    public String type1;
    public String type2;
    public String img_url;
    public Long evolves_to;
    public Long evolves_from;

    public Pokemon() {
    }

    public Pokemon(long id, String name, String type1, String type2, String img_url, long evolves_to,
            long evolves_from) {
        this.id = id;
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
        this.img_url = img_url;
        this.evolves_to = evolves_to;
        this.evolves_from = evolves_from;
    }

}

package aula_inatel.aula5_refatorado;

import com.intuit.karate.junit5.Karate;

class Aula5v2Runner {
    
    @Karate.Test
    Karate testPokemon() {
        return Karate.run("pok2").relativeTo(getClass());
    }    
}
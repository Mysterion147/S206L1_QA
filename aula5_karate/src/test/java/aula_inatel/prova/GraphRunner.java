package aula_inatel.prova;

import com.intuit.karate.junit5.Karate;

class GraphRunner{

    @Karate.Test
    Karate testGraph(){
        return Karate.run("graphql").relativeTo(getClass());
    }
}
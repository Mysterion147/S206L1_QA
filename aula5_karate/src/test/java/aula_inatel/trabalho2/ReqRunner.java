package aula_inatel.trabalho2;

import com.intuit.karate.junit5.Karate;

class ReqRunner {
    
    @Karate.Test
    Karate testReq() {
        return Karate.run("req").relativeTo(getClass());
    }    
}
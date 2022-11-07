import {Resolver,Query} from "type-graphql"
import {Greet} from "../enitities/greet.entity"
@Resolver(Greet)
export class GreetResolver{
    @Query(()=>String)
    Greet(){
        return "Hello World!"
    }
}
import {ObjectType,Field} from "type-graphql"
@ObjectType()
export class Greet{
    @Field()
    name:string 
}
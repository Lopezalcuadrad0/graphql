import {Character} from "../types.ts";
export const Query={
    
character:async (_:unknown,args:{id:string}): Promise <Character> => {
const {id} = args;
const url=`https://rickandmortyapi.com/api/character/${id}`
const data = await fetch(url);
if (data.status!=200) throw new Error("no se puede macho");
const json = await data.json();
return json;
},

characterbyid:async (_:unknown,args:{ids:Array<string>}): Promise <Array<Character>> => {
    const {ids} = args;
    const characters = await Promise.all(ids.map(async(id) =>{
    const url=`https://rickandmortyapi.com/api/character/${id}`;
    const data = await fetch(url);
    if (data.status!=200) throw new Error("no se puede macho");
    const json = await data.json();
    return json;
     }));
    return characters;}
};

import express,{Request,Response} from "npm:express@4.18.2";

import { Episode, Character } from "../types.ts";

export const episode = {
    characters:async (parent:Episode):Promise<Array<Character>> => {
        const characters= await Promise.all(parent.character.map(async(character)=> {
            const Response = await fetch(character);
            return Response.json();
        }))
        return characters;

    },

}

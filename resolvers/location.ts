import express,{Request,Response} from "npm:express@4.18.2";

import { Episode, Character,Location } from "../types.ts";

export const location = {
    location:async (parent:Character):Promise<Array<Episode>> => {
        const episodes= await Promise.all(parent.episode.map(async(episode)=> {
            const Response = await fetch(episode);
            return Response.json();
        }))
        return episodes;

    },

    locations:async (parent:Character):Promise<Array<Location>> => {
        const locations= await Promise.all(parent.location.map(async(location)=> {
            const Response = await fetch(location);
            return Response.json();
        }))
        return locations;

    },
}
export const typeDefs = `#graphql
type characterAPI { 
    id:Id!,
    name:String!,
    episode:[episode!]!,
    location:[location!]!
}
 type episodeAPI { 
    id:string!,
    name:string!,
    character:[character!]!
}
export type locationAPI { 
    id:String!,
    name:String!,
    type:String!,
    dimension:[dimension!]!,
    residents:[character!]!
}
export type Query{
    character(id:!):character,
    characterbyid(ids![id!]!):character,
}
`;
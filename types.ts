export type Character ={ 
    id:string,
    name:string,
    episode:string[],
    location:string[]
};
export type Episode ={ 
    id:string,
    name:string,
    character:string[]
};
export type Location ={ 
    id:string,
    name:string,
    type:string,
    dimension:string,
    residents:string[]
};

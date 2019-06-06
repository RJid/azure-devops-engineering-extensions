export interface IPipeline{
    getDefinitionId: ()=> number;
    isFailure: ()=> boolean;
    isComplete: ()=> boolean;
    getLink: ()=> string;
    getId: ()=> number;
    getName: ()=> string;
}


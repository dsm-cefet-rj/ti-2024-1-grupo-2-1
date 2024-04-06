import animalActionType from "./action-type";

export const addAnimalToFav = ( payload ) => ({
    type: animalActionType.ADD_ANIMAL,
    payload,
})

export const removeAnimalToFav = ( payload ) => ({
    type: animalActionType.REMOVE_ANIMAL,
    payload,
})
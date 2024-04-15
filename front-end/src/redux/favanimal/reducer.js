import animalActionType from "./action-type";

const initialState = {
  animalsFav: [],
};

const animalFavReducer = (state = initialState, action) => {


  switch (action.type) {
    case animalActionType.ADD_ANIMAL:
      //verificar se o animal ja está favoritado
        const animalJaFavoritado = state.animalsFav.some(
           (animal) => animal.id === action.payload.id);

      //se ele estiver, n poderá ser favoritado dnv
          if(animalJaFavoritado){
            return { 
              ...state,
              animalsFav: state.animalsFav
              .map((animal) => 
              animal.id === action.payload.id
              ?{...animal, quantity: 1}
              : animal)
              
            }
          }
      //se nao estiver, adicionamos
      return {
        ...state,
        animalsFav:  [...state.animalsFav,{...action.payload, quantity: 1}]
      };

    case animalActionType.REMOVE_ANIMAL:
      return  {
        ...state,
        animalsFav: state.animalsFav.filter(animal => animal.id !== action.payload ),
        
      }

    default:
      return state;
  }
};

export default animalFavReducer;

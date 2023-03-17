//the below line represent the initially the data layer is only containing the [empty]
export const initialState={
  basket:[],
};

//SELECTOR
//below is the functionj that go through each element present inside the basket and add the amount to give the total amount of the items present inside it
export const getBasketTotal=(basket)=>
    basket?.reduce((amount,item)=> item.price+amount,0);




//here the "state" is the current state of the data layer and the "action" is the action we need to perform either to push component into the data layer or to get the component out of the data layer
const reducer=(state,action)=>{
    // here we are saying that when ever we press the button add_to_basket push that component to the data layer
    switch(action.type){
        case "ADD_TO_BASKET":
            // through the below line of code we are updating the data layer "...state.basket" is the current state of the data layer and the "action.item" is the add item that we have pushed to the data layer
        return{
            ...state,
            basket: [...state.basket,action.item],
        };
        default:
            return state;
    }
};

export default reducer;
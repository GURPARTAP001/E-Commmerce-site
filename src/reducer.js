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
    //HERE WE ARE DEFINING THE CASES/ACTIONS THAT WE WILL PERFORM WHEN ASKED
    switch(action.type){
        //BELOW IS THE ACTION TO ADD THE PRDUCT TO THE DATA LAYER/BASKET
        case "ADD_TO_BASKET":
            // through the below line of code we are updating the data layer "...state.basket" is the current state of the data layer and the "action.item" is the add item that we have pushed to the data layer
        return{
            ...state,
            basket: [...state.basket,action.item],
        };

        //BELOW IS THE ACTION/CASE TO REMOVE THE ITEM FROM THE BASKET
        case "REMOVE_FROM_BASKET":
        const index=state.basket.findIndex(
            (basketItem)=>basketItem.id===action.id//here we are checking the index which want to delete from the array(basket)
        );
        let newBasket=[...state.basket];//we are creating the new array and coping the original array contents to it 
        if(index>=0){
            newBasket.splice(index,1);//we are removing the desired item from the array 
        }
        //this else cond'n is to handle the extreme case to avoid malfunctioning of the system thus a warning will pop up in  the console
        else{
            console.warn(
                `Can't remove product (id:${action.id}) as its not in basket!`
            )
        }

        return{
            ...state,
            basket:newBasket//making the original array same as the new array which we had created
        }

        default:
            return state;
    }
};

export default reducer;
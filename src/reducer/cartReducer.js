import { ADD_TO_CART } from "./cartConstants"


const cartReducer = (state={cart_items:[]},action) => {
    switch(action.type){
        case ADD_TO_CART:
            let item = action.payload
            let itemExists = state.cart_items.find(i=>i.product === item.product)

            if(itemExists){
                // return {...state, cart_items: state.cart_items.map(i=> i.product === item.product? item : i)}
                return {...state}
            }
            else{
                return {
                    ...state, 
                    cart_items: [...state.cart_items, item]}
            }

        default:
            return state
    }
  
}
/* samsung, apple, nokia(i)
payload - apple(item)
samsung, apple, nokia
*/




export default cartReducer
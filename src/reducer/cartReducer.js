import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_SHIPPING_INFO } from "./cartConstants"


const cartReducer = (state={cart_items:[], shipping_info:{}},action) => {
    switch(action.type){
        case ADD_TO_CART:
            let item = action.payload
            let itemExists = state.cart_items.find(i=>i.product === item.product)

            if(itemExists){
                return {...state, 
                    cart_items: state.cart_items.map(i=> i.product === item.product? item : i)}
                // return {...state}
            }
            else{
                return {
                    ...state, 
                    cart_items: [...state.cart_items, item]}
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart_items: state.cart_items.filter(i=>i.product!=action.payload.product)
            }

            // i= samsung 2, apple 3, nokia 1
            // payload - apple 4
            // 
        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shipping_info: action.payload
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
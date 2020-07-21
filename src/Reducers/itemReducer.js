const initstate = {
    items : [{    
        material: 'Milk',
        qtn: '1L',
        id: 1
        },
        {
        material: 'Bread',             
        qtn: '2packs',
        id: 2   
        }
    ]
}
const itemReducer = (state = initstate, action) => {
    switch(action.type) {
    case 'DELETE_ITEM':
        let newItems = state.items.filter(item => {
            return action.id !== item.id 
       })
       console.log('newItems',newItems)
        return {
            items: newItems
        }
    
    
    case 'CREATE_ITEM':
        return {
            ...state,
            items: [...state.items, action.payload]
        }
        
   default:
        return state;
}
}

export default itemReducer
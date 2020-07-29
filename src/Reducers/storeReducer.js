const initstate = {
    stores: [{
        storeName: 'Reliance Fresh',
        id: '1'
    },
    {
        storeName: 'Local Market',
        id: '2'
    },
    {
        storeName: 'D-mart',
        id: '3'
    }
]
}

const storeReducer = (state = initstate, action) => {
    switch(action.type) {
    case 'DELETE_STORE':
        let newStores = state.items.filter(store => {
            return action.id !== store.id 
       })
        return {
            stores: newStores
        }
    
    
    case 'CREATE_STORE':
        return {
            ...state,
            stores: [...state.stores, action.payload]
        }
        
   default:
        return state;
}
}

export default storeReducer
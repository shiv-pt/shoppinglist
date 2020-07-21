const createItem = (material, qtn,id) => ({
    type: 'CREATE_ITEM',
    payload: {
        material: material,
        qtn: qtn,
        id:id
    }
})

export default createItem;
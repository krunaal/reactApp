function ItemListComponent() {
    let itemNames = ['Carrot', 'Cucumber', 'Tomoatoes', 'Potatoes']

    return(
        <select>
            {
                itemNames.map(i => <option>{i}</option>)
            }

        </select>
    )

}

export default ItemListComponent
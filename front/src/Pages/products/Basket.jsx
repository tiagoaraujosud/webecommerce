function Cart(props){

    const {countCartItems} = props;

    return(
        <div className=" block col-1">
            <h2>Shopping Cart</h2>

            <div className="row">
                <a href="#/cart">Cart
                {countCartItems ? (
                    <button className="badge">{countCartItems}</button>
                    ) : (
                    ''
                )}
                </a>
            </div>
        </div>
    )
}

export default Cart
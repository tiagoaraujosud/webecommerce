import Basket from './Basket';
import Main from './Main';
import './styles.css';


function ShoppingCart(){

    return (
        <div>
            <div className='row'>
                <Main />
                <Basket />
            </div>
        </div>
    )
}

export default ShoppingCart
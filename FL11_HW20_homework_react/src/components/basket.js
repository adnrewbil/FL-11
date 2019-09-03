import React from 'react';

export class Basket extends React.Component {
    state = {
        cart: [],
    }
render(){
    const {cart, priceCounter} = this.props;
    return (
        <div className="basket">
            <h4>Basket</h4>
            <div id="cart">
                {priceCounter ? 
                <div>
                {cart.map(item => {
                    return (
                        <div> {item.title} - {item.price}</div>
                    )
                })
            }
                <button className="btn btn-primary" onClick={()=>alert('Purchase has been completed')}>Buy({priceCounter})</button>
                </div>
                : 
                <p className="font-italic">No items for purchase</p>
            }
            </div>
        </div>
    )};
};


import React from 'react';
import {Basket} from './basket';
import {NewPack} from './new-pack';
import {Emoji} from './emoji.component';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            priceCounter: 0
        }
        this.addEmojiToBascket = this.addEmojiToBascket.bind(this);
    }


    addEmojiToBascket(data){
        this.setState({
            cart: [...this.state.cart, data],
            priceCounter: this.state.priceCounter + data.price
        })
    }
    render(){
        return (
            <div className="container d-flex p-4">
                <div className="article col-10">
                    <div className="goods p-3">
                        <NewPack addEmojiToBascket={this.addEmojiToBascket}/>
                    </div>
                    <div className="pack-list d-flex">
                        <Emoji addEmojiToBascket={this.addEmojiToBascket}/>
                    </div>
                </div>
                <div className="aside col-2 bg-light">
                    <Basket cart={this.state.cart} priceCounter={this.state.priceCounter}/>
                </div>
            </div>
            );
    }
};

export default App;
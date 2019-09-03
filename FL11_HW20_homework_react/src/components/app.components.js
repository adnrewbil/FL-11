import React from 'react';
import Basket from './basket';
import {NewPack} from './new-pack';
import {Emoji} from './emoji.component';
import {GetButton} from './button';

const App = () =>{

    return (
    <div className="container d-flex p-4">
        <div className="article col-10">
            <div className="goods p-3">
                <NewPack />
            </div>
            <div className="pack-list d-flex">
                <Emoji />
            </div>
        </div>
        <div className="aside col-2 bg-light">
            <Basket />
        </div>
    </div>
    );
};

export default App;
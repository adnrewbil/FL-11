import React from 'react';

export const NewPack = (props) => {
    const {addEmojiToBascket} = props;

    const handleClick = (data) => {
        addEmojiToBascket(data);
    }

    const obj = {id: 2, title: "Reptiles pack", price: 1.5}
    return (
        <div className="new-pack">
            <h2>New! Reptiles pack!</h2>
            <h4>Includes</h4>
            <div>🐢🦎🐍</div>
                <div className="d-flex flex-row-reverse">
                    <button className="btn btn-primary" onClick={()=>handleClick(obj)}>Get (1.5$)</button>
                </div>
        </div>
    );
};


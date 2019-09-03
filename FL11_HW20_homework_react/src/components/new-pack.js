import React from 'react';

export const NewPack = (props) => {
    return (
        <div className="new-pack">
            <h2>New! Reptiles pack!</h2>
            <h4>Includes</h4>
            <p>icons</p>
                <div className="d-flex flex-row-reverse">
                    <button className="btn btn-primary">Get (1.5$)</button>
                </div>
        </div>
    );
};


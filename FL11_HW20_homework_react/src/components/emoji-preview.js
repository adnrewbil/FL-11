import React from 'react';
import Rating from '@material-ui/lab/Rating';


export function EmojiPreview(props) {
    return (
        <div className='card m-2 pack' id={props.id} key={props.codes}>
            <div className="emoji-preview">
                <span role='img' aria-labelledby='emoji'>{props.emoji1}</span>
                <span role='img' aria-labelledby='emoji'>{props.emoji2}</span>
                <span role='img' aria-labelledby='emoji'>{props.emoji3}</span>
            </div>
            <div className="card-body">
                <h6 className="card-title">{props.title}</h6>
                <div className="rating-stars"><Rating name="half-rating" value={props.stars} precision={1} /></div>
                <button className="btn btn-primary">Get ({props.price}$)</button>
            </div>
        </div>
    );
};

// EmojiPreview.PropTypes = {
//     emoji: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     stars: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired
// };
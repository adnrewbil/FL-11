import React from 'react';
import Rating from '@material-ui/lab/Rating';

export class EmojiPreview extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            disabled: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

     handleClick (data) {
        this.props.addEmojiToBascket(data);
        this.setState({
            disabled: true
        })
    }

    render () {
        const {id,emoji1, emoji2, emoji3, title, stars, price, addEmojiToBascket} = this.props;
    
    return (
        <div className='card m-2 pack' id={id}>
            <div className="emoji-preview">
                <span role='img' aria-labelledby='emoji'>{emoji1}</span>
                <span role='img' aria-labelledby='emoji'>{emoji2}</span>
                <span role='img' aria-labelledby='emoji'>{emoji3}</span>
            </div>
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <div className="rating-stars"><Rating name="half-rating" value={stars} precision={1} /></div>
                <button disabled={this.state.disabled} className="btn btn-primary" onClick={()=>this.handleClick({id, title, price})}>Get ({price}$) </button>
            </div>
        </div>
    )};
};


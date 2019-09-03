import React from 'react';
import {EmojiPreview} from './emoji-preview';

export class Emoji extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            emoji: [],
        }
    }

    componentDidMount() {
    fetch(`http://localhost:1337/emoji-shop`)
    .then(resp => resp.json())
    .then(data => {
        this.setState({ emoji: data.emoji })
    });
    };

    render() {
    if (this.state.emoji.length === 0) {
        return <p>Loading...</p>
    }
        return this.state.emoji.map(emoji => {
            return (
              <EmojiPreview
                addEmojiToBascket={this.props.addEmojiToBascket}
                id = {emoji.id}
                emoji1 = {emoji.emoji[0].char}
                emoji2 = {emoji.emoji[1].char}
                emoji3 = {emoji.emoji[2].char}
                title = {emoji.title}
                stars = {emoji.stars}
                price = {emoji.price}
                codes = {emoji.emoji[0].codes}
                />
        )
        })
    }
}


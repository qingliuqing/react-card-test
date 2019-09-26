import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card/card';
import pronounceList from '../../constants/pronounceList.json';
import './card.scss';

class CardContainer extends Component {
    constructor() {
        super();
        this.state = {
            cardInfo: {
                "writing": "ホ",
                "pronunciation": "jing",
                "type": "轻音"
            }
        };
    }
    componentDidMount() {
        console.log(pronounceList);
    }
    render() {
        return (
            <div className="card-container">
                <Card cardInfo={ this.state.cardInfo}>
                </Card>
            </div>
        )
    }
}

export default CardContainer
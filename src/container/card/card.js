import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card/card';
import pronounceList from '../../constants/pronounceList.json';
import './card.scss';

class CardContainer extends Component {
    constructor() {
        super();
        this.state = {
            cardInfo: { }
        };

        this.handleToggleCard = this.handleToggleCard.bind(this);
    }
    componentDidMount() {
        this.handleToggleCard();
    }
    _getRandomPronounceInfo() {
        const len = pronounceList.length;
        const i = Math.random() * len;
        return pronounceList[parseInt(i)];
    }
    handleToggleCard() {
        const randomPronounceInfo = this._getRandomPronounceInfo();
        this.setState({
            cardInfo: randomPronounceInfo
        });
    }
    render() {
        return (
            <div
                className="card-container"
                onClick={ this.handleToggleCard }
            >
                <Card cardInfo={ this.state.cardInfo}>
                </Card>
            </div>
        )
    }
}

export default CardContainer
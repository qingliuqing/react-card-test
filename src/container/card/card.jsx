import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card/card.jsx';
import pronounceList from '../../constants/pronounceList.json';
import './card.scss';

class CardContainer extends Component {
    constructor() {
        super();
        this.state = {
            cardInfo: { }
        };

        // this.handleToggleCard = this.handleToggleCard.bind(this);
        // this.handleTouchEnd = this.handleTouchEnd.bind(this);
        // this.handleTouchMove = this.handleTouchMove.bind(this);
    }
    componentDidMount() {
       let id = this.props.match.params.id;
        this.handleToggleCard(id);
    }
    _getRandomPronounceInfo() {
        const len = pronounceList.length;
        const i = Math.random() * len;
        return pronounceList[parseInt(i)];
    }
    handleToggleCard(id) {
        let randomPronounceInfo;
        if (id && typeof(id) === 'string') {
            randomPronounceInfo = pronounceList[id];
        } else {
            randomPronounceInfo = this._getRandomPronounceInfo();
        }
        this.setState({
            cardInfo: randomPronounceInfo
        });
    }
    handleTouchStart(e) {
        // e.preventDefault();
        console.log('-----onTouchStart-----');
    }
    handleTouchMove() {
        console.log('-----onTouchMove-----');
        // this.handleToggleCard();
    }
    handleTouchEnd(e) {
        // console.log('-----onTouchEnd-----');
        // console.log(e);
        // e.preventDefault();
        this.handleToggleCard();
    }
    render() {
        return (
            <div
                className="card-container"
                // onClick={ this.handleToggleCard.bind(this) }
                // onTouchStart={ this.handleTouchStart.bind(this) }
                // onTouchMove={ this.handleTouchMove.bind(this) }
                onTouchEnd={ this.handleTouchEnd.bind(this) }
            >
                <div className="solo-card-container">
                    <Card cardInfo={ this.state.cardInfo}>
                    </Card>
                </div>
            </div>
        )
    }
}

export default CardContainer
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Card from '../../components/card/card.jsx';
import pronounceList from '../../constants/pronounceList.json';
import './cardList.scss';

class CardListContainer extends Component {
    // constructor() {
    //     super();

    // }
    
    render() {
        return (
            <div
                className="card-list-container">
                    <div
                        className="card-list-container__flex">
                    {
                        pronounceList.map((item, index) => {
                            return (
                                <div className="card-list-perContainer">
                                    <Card
                                        key={ index }
                                        cardInfo={ item }>
                                    </Card>
                                </div>
                            )
                        })
                    }
                    </div>  
            </div>
        )
    }
}

export default CardListContainer
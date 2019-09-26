import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.scss';

class Card extends Component {
    static propTypes = {
        cardInfo: PropTypes.object.isRequired
    }

    static defaultProps = {
        cardInfo: {
            "writing": "",
            "pronunciation": "",
            "type": ""
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            pronunciationMaskShow: true,
            typeMaskShow: true,
        };

        this.handleClickPronunciationMask = this.handleClickPronunciationMask.bind(this);
        this.handleClickTypeMask = this.handleClickTypeMask.bind(this);
    }

    // componentWillUpdate() {
    //     console.log('WillUpdate');
    // }
    // componentDidUpdate() {
    //     console.log('didUpdate');
    //     // this.setState({
    //     //     pronunciationMaskShow: true,
    //     //     typeMaskShow: true,
    //     // });
    //     this.setState((prevState) => ({
    //         pronunciationMaskShow: !prevState.pronunciationMaskShow
    //     }));
    // }
    handleClickPronunciationMask(e) {
        e.stopPropagation();
        this.setState((prevState) => ({
            pronunciationMaskShow: !prevState.pronunciationMaskShow
        }));
    }

    handleClickTypeMask(e) {
        e.stopPropagation();
        this.setState((prevState) => ({
            typeMaskShow: !prevState.typeMaskShow
        }));
    }

    render() {
        const pronunciationMaskShow = this.state.pronunciationMaskShow;
        const typeMaskShow = this.state.typeMaskShow;
        return (
            <div className="card">
                <section className="card-pronunciation">
                    { pronunciationMaskShow ? 
                        (<span
                            className="card-pronunciation-txt-mask"
                            onClick={ this.handleClickPronunciationMask }
                        ></span>) : 
                        (<span className="card-pronunciation-txt">
                            { this.props.cardInfo.pronunciation }
                        </span>)
                    }
                </section>
                <section className="card-writing">
                    <span className="card-writing-txt">
                        { this.props.cardInfo.writing }
                    </span>
                </section>
                <section className="card-type">
                    { typeMaskShow ? 
                        (<span
                            className="card-type-txt-mask"
                            onClick={ this.handleClickTypeMask }
                        ></span>) : 
                        (<span className="card-type-txt">
                            { this.props.cardInfo.type }
                        </span>)
                    }
                </section>
            </div>
        )
    }
}

export default Card
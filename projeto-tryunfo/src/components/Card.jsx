import React from 'react';
import PropTypes from 'prop-types';
import './css/Card.css'

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className='card-content-component'>
        <h3>Carta</h3>
        <p data-testid="name-card">{`Nome:... ${cardName}`}</p>

        <div className="img-content">
          <img
            src={cardImage}
            alt={cardName}
            data-testid="image-card"
            className="img-card"
          />
        </div>

        <p data-testid="description-card">{`Descrição:... ${cardDescription}`}</p>

        <p data-testid="attr1-card">{`Força:... ${cardAttr1}`}</p>

        <p data-testid="attr2-card">{`Chakra:... ${cardAttr2}`}</p>

        <p data-testid="attr3-card">{`Inteligência:... ${cardAttr3}`}</p>

        <p data-testid="rare-card">{`Raridade:... ${cardRare}`}</p>

        {cardTrunfo && <p data-testid="trunfo-card"> Super Trunfo <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Mangekyou_Sharingan_Kakashi.svg/1024px-Mangekyou_Sharingan_Kakashi.svg.png' alt="sharingan" 
        width="20px"
        height="20px"
        className='sharingan'
        /> </p>}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;

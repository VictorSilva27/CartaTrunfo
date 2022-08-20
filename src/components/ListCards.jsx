import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './css/ListCards.css'
class ListCards extends React.Component {
  render() {
    const {
      saveCard,
      clearCard,
    } = this.props;
    return (
      <div className="content-deck">
        {saveCard.map((card, index) => {
          const {
            nameInput,
            descriptionInput,
            attr1Input,
            attr2Input,
            attr3Input,
            rareInput,
            imgInput,
            trunfoInput,
          } = card;
          return (
            <div key={ index } className="card-list">
              <Card
                cardName={ nameInput }
                cardDescription={ descriptionInput }
                cardAttr1={ attr1Input }
                cardAttr2={ attr2Input }
                cardAttr3={ attr3Input }
                cardImage={ imgInput }
                cardRare={ rareInput }
                cardTrunfo={ trunfoInput }
              />

              <div>
                <button
                  type="submit"
                  data-testid="delete-button"
                  className="btn-delete"
                  onClick={ () => clearCard(index) }
                >
                  Delete
                  <img
                    src='https://www.svgrepo.com/show/300470/shuriken.svg'
                    alt='shuriken'
                    width="25px"
                    className="shuriken"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

ListCards.propTypes = {
  saveCard: PropTypes.arrayOf(),
}.isRequired;

export default ListCards;

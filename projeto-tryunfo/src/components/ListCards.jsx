import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class ListCards extends React.Component {
  render() {
    const {
      saveCard,
      clearCard,
    } = this.props;
    return (
      <div>
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
            <div key={ index }>
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
                  onClick={ () => clearCard(saveCard) }
                >
                  Excluir
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

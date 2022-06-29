import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,

    } = this.props;
    return (
      <form>

        <h3>Formulário</h3>

        <div>
          <label htmlFor="name-input">
            Nome da Carta:
            <input
              type="text"
              name="nameInput"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="description-input" className="desc-content">
            <h3>Desc. da Carta</h3>
            <textarea
              name="descriptionInput"
              data-testid="description-input"
              cols="30"
              rows="1"
              value={ cardDescription }
              onChange={ onInputChange }
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr1-input">
            Atributo 1
            <input
              type="number"
              name="attr1Input"
              data-testid="attr1-input"
              min="0"
              max="90"
              value={ cardAttr1 }
              onChange={ onInputChange }
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr2-input">
            Atributo 2
            <input
              type="number"
              name="attr2Input"
              data-testid="attr2-input"
              min="0"
              max="90"
              value={ cardAttr2 }
              onChange={ onInputChange }
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr3-input">
            Atributo 3
            <input
              type="number"
              name="attr3Input"
              data-testid="attr3-input"
              min="0"
              max="90"
              value={ cardAttr3 }
              onChange={ onInputChange }
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="image-input">
            Url da Imagem:
            <input
              type="text"
              name="imgInput"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
              name="rareInput"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal"> Normal </option>
              <option value="raro"> Raro </option>
              <option value="muito raro"> Muito Raro </option>
            </select>
          </label>
        </div>

        <div>
          { hasTrunfo
            ? <p> Você já tem um Super Trunfo em seu baralho </p>
            : (
              <label htmlFor="trunfo-input">
                Super Trunfo
                <input
                  type="checkbox"
                  data-testid="trunfo-input"
                  name="trunfoInput"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>
            )}
        </div>

        <div>
          <button
            type="submit"
            name="saveButton"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salva
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;

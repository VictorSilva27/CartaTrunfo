import React from 'react';
import PropTypes from 'prop-types';
import './css/Form.css'

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
      <form className="form-content-component">

        <h3>Adicionar Trunfo</h3>

        <label htmlFor="name-input">
          Nome da Carta
          <input
            type="text"
            name="nameInput"
            data-testid="name-input"
            value={cardName}
            onChange={onInputChange}
            required
          />
        </label>

        <label htmlFor="description-input" className="desc-content">
          Desc. da Carta
          <textarea
            name="descriptionInput"
            data-testid="description-input"
            cols="30"
            rows="1"
            value={cardDescription}
            onChange={onInputChange}
            required
          />
        </label>

        <label htmlFor="attr1-input">
          Força
          <input
            type="number"
            name="attr1Input"
            data-testid="attr1-input"
            min="0"
            max="90"
            value={cardAttr1}
            onChange={onInputChange}
            required
          />
        </label>

        <label htmlFor="attr2-input">
          Chakra
          <input
            type="number"
            name="attr2Input"
            data-testid="attr2-input"
            min="0"
            max="90"
            value={cardAttr2}
            onChange={onInputChange}
            required
          />
        </label>

        <label htmlFor="attr3-input">
          Inteligência
          <input
            type="number"
            name="attr3Input"
            data-testid="attr3-input"
            min="0"
            max="90"
            value={cardAttr3}
            onChange={onInputChange}
            required
          />
        </label>

        <label htmlFor="image-input">
          Url da Imagem
          <input
            type="text"
            name="imgInput"
            data-testid="image-input"
            value={cardImage}
            onChange={onInputChange}
            required
          />
        </label>

        <label htmlFor="rare-input" className="rare-content">
          Raridade
          <select
            data-testid="rare-input"
            name="rareInput"
            value={cardRare}
            onChange={onInputChange}
          >
            <option value="Normal"> Normal </option>
            <option value="Raro"> Raro </option>
            <option value="Muito Raro"> Muito Raro </option>
          </select>
        </label>

        {hasTrunfo
          ? <p> Você já tem um Super Trunfo em seu baralho </p>
          : (
            <label htmlFor="trunfo-input" className="form-trunfo">
              Super Trunfo
              <input
                type="checkbox"
                data-testid="trunfo-input"
                name="trunfoInput"
                checked={cardTrunfo}
                onChange={onInputChange}
              />
            </label>
          )}

        <div>
          <button
            type="submit"
            name="saveButton"
            className="btn-save"
            data-testid="save-button"
            disabled={isSaveButtonDisabled}
            onClick={onSaveButtonClick}
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

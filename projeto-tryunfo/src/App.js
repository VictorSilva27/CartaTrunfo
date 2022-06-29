import React from 'react';
import './App.css';
import Card from './components/Card';
import ListCards from './components/ListCards';
import Form from './components/Form';

class App extends React.Component {
  state = {
    nameInput: '',
    descriptionInput: '',
    attr1Input: '',
    attr2Input: '',
    attr3Input: '',
    imgInput: '',
    rareInput: '',
    trunfoInput: false,
    saveButton: true,
    disabledFilter: false,
    hasTrunfo: false,
    saveCard: [],
    filterCard: [],
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.setState({
      saveButton: this.validateCampus(),
    }));
  }

  validateCampus = () => {
    const {
      nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      rareInput,
      imgInput,
    } = this.state;

    const maxVal = 90;
    const sumAttr = 210;

    if (nameInput === '') { return true; }
    if (descriptionInput === '') { return true; }
    if (imgInput === '') { return true; }
    if (rareInput === '') { return true; }
    if (Number(attr1Input) < 0 || Number(attr1Input) > maxVal) { return true; }
    if (Number(attr2Input) < 0 || Number(attr2Input) > maxVal) { return true; }
    if (Number(attr3Input) < 0 || Number(attr3Input) > maxVal) { return true; }
    if (Number(attr1Input) + Number(attr2Input) + Number(attr3Input) > sumAttr) {
      return true;
    }
    return false;
  }

  saveCardToObj = () => {
    const {
      nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      rareInput,
      imgInput,
      trunfoInput,
    } = this.state;
    this.setState((prev) => ({
      saveCard: [
        ...prev.saveCard,
        {
          nameInput,
          descriptionInput,
          attr1Input,
          attr2Input,
          attr3Input,
          rareInput,
          imgInput,
          trunfoInput,
        },
      ],
      filterCard: [
        ...prev.saveCard,
        {
          nameInput,
          descriptionInput,
          attr1Input,
          attr2Input,
          attr3Input,
          rareInput,
          imgInput,
          trunfoInput,
        },
      ],
      nameInput: '',
      descriptionInput: '',
      attr1Input: '0',
      attr2Input: '0',
      attr3Input: '0',
      imgInput: '',
      rareInput: 'normal',
      trunfoInput: false,
    }), () => this.validateTrunfo());
  }

  validateTrunfo = () => {
    const { saveCard } = this.state;
    if (saveCard.some((card) => card.trunfoInput === true)) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  };

  clearCard = (index) => {
    const { filterCard, saveCard } = this.state;
    saveCard.splice(index, 1);
    this.setState({ saveCard }, () => this.validateTrunfo());
    filterCard.splice(index, 1);
    this.setState({ filterCard }, () => this.validateTrunfo());
  }

  filterName = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { saveCard } = this.state;
    if (value === 'normal'
      || value === 'raro'
      || value === 'muito raro') {
      this.setState({ filterCard:
        saveCard.filter((card) => card.rareInput === value) });
    } else if (value === 'todas') {
      this.setState({ filterCard:
        saveCard });
    } else if (value === true) {
      this.setState({ filterCard:
        saveCard.filter((card) => card.trunfoInput === true),
      disabledFilter: true });
    } else if (value === false) {
      this.setState({ filterCard:
        saveCard,
      disabledFilter: false });
    } else {
      this.setState({ filterCard:
      saveCard.filter((card) => (card.nameInput).includes(value)) });
    }
  }

  render() {
    const {
      nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imgInput,
      rareInput,
      trunfoInput,
      saveButton,
      hasTrunfo,
      filterCard,
      disabledFilter,
    } = this.state;
    return (
      <section className="main">
        <h1>Tryunfo</h1>
        <header className="content-dad">
          <div className="form-content">
            <Form
              cardName={ nameInput }
              cardDescription={ descriptionInput }
              cardAttr1={ attr1Input }
              cardAttr2={ attr2Input }
              cardAttr3={ attr3Input }
              cardImage={ imgInput }
              cardRare={ rareInput }
              cardTrunfo={ trunfoInput }
              onInputChange={ this.onInputChange }
              isSaveButtonDisabled={ saveButton }
              onSaveButtonClick={ this.saveCardToObj }
              hasTrunfo={ hasTrunfo }
            />
          </div>
          <div className="card-content">
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
          </div>
        </header>
        <main className="card-add">
          <h1> Aqui vai ficar as Cartas Adicionadas </h1>
          <div className="card-add-item">
            <ListCards
              saveCard={ filterCard }
              clearCard={ this.clearCard }
            />
          </div>
        </main>
        <footer>
          <h3>Filtro</h3>
          <label htmlFor="name-filter">
            Nome
            <input
              type="text"
              data-testid="name-filter"
              onChange={ this.filterName }
              disabled={ disabledFilter }
            />
          </label>
          <label htmlFor="rare-filter">
            Raro
            <select
              data-testid="rare-filter"
              name="rareInput"
              onChange={ this.filterName }
              disabled={ disabledFilter }
            >
              <option value="todas"> Todas </option>
              <option value="normal"> Normal </option>
              <option value="raro"> Raro </option>
              <option value="muito raro"> Muito Raro </option>
            </select>
          </label>
          <label htmlFor="trunfo-filter">
            Super Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-filter"
              onClick={ this.filterName }
            />
          </label>
        </footer>
      </section>
    );
  }
}
export default App;

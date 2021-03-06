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
    imgInput: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuBGlgxUsvX2fhUDIgqs9RG-f6KG0e62y5g&usqp=CAU',
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
    if (target.checked === 'Normal'
      || target.checked === 'Raro'
      || target.checked === 'Muito Raro') {
      this.setState({
        filterCard:
          saveCard.filter((card) => card.rareInput === value)
      });
    } else if (target.checked === 'Todas') {
      this.setState({
        filterCard:
          saveCard
      });
    } else if (value === true) {
      this.setState({
        filterCard:
          saveCard.filter((card) => card.trunfoInput === true),
        disabledFilter: true
      });
    } else if (value === false) {
      this.setState({
        filterCard:
          saveCard,
        disabledFilter: false
      });
    } else {
      this.setState({
        filterCard:
          saveCard.filter((card) => (card.nameInput).includes(value))
      });
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
      <section className="body">
        <h1 className="title">Uchiha Trunfo</h1>
        <header className="header">
          <div className="form-content">
            <Form
              cardName={nameInput}
              cardDescription={descriptionInput}
              cardAttr1={attr1Input}
              cardAttr2={attr2Input}
              cardAttr3={attr3Input}
              cardImage={imgInput}
              cardRare={rareInput}
              cardTrunfo={trunfoInput}
              onInputChange={this.onInputChange}
              isSaveButtonDisabled={saveButton}
              onSaveButtonClick={this.saveCardToObj}
              hasTrunfo={hasTrunfo}
            />
          </div>

          <div className="card-content">
            <Card
              cardName={nameInput}
              cardDescription={descriptionInput}
              cardAttr1={attr1Input}
              cardAttr2={attr2Input}
              cardAttr3={attr3Input}
              cardImage={imgInput}
              cardRare={rareInput}
              cardTrunfo={trunfoInput}
            />
          </div>
        </header>

        <main className="card-add">
          <h1> Minhas Cartas </h1>
          <ListCards
            saveCard={filterCard}
            clearCard={this.clearCard}
          />
        </main>
        <footer className="footer">
          <h3>Filtros</h3>
          <div className="filter-footer">
            <label htmlFor="name-filter">
              Nome
              <input
                type="text"
                placeholder="Nome da Carta"
                data-testid="name-filter"
                onChange={this.filterName}
                disabled={disabledFilter}
              />
            </label>
            <label htmlFor="rare-filter">
              Raridade
              <select
                data-testid="rare-filter"
                name="rareInput"
                onChange={this.filterName}
                disabled={disabledFilter}
              >
                <option value="Todas"> Todas </option>
                <option value="Normal"> Normal </option>
                <option value="Raro"> Raro </option>
                <option value="Muito raro"> Muito Raro </option>
              </select>
            </label>
            <label htmlFor="trunfo-filter" className="filter-trunfo">
              Super Trunfo
              <input
                type="checkbox"
                data-testid="trunfo-filter"
                onClick={this.filterName}
              />
            </label>
          </div>
        </footer>
      </section>
    );
  }
}
export default App;

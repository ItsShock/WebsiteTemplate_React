import Offer from './components/Offer';
import Persons from './components/Persons';
import './App.css';

const offers = [
  {label: "Usługa 1" , isNew: true},
  {label: "Usługa 2" , isNew: false},
  {label: "Usługa 3" , isNew: false},
  {label: "Usługa 4" , isNew: false},
  {label: "Usługa 5" , isNew: false},
  {label: "Usługa 6" , isNew: false},
]

const persons = [
  {
    name: "Imię i Nazwisko",
    department: "dział",
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.',
    isPersonEven: 1
  },
  {
    name: "Imię i Nazwisko",
    department: "dział",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
    isPersonEven: 2
  },
]

function App() {
  return (
    <div className="App">
        <section className="first_section">
          <header>
            <div className="rectangle">
              <div className="container header">
                <div>
                  <p className='logo'>Moja firma</p>
                </div>
                <div className="menu">
                  <a href="#specialist">o nas</a>
                  <a href="#about" style={{cursor: "pointer"}}>oferta</a>
                  <a href="#kontakt" style={{cursor: 'not-allowed'}}>kontakt</a>
                </div>
              </div>
            </div>
          </header>
          <div>
          <div className="img">
            <div className="container first_section">
              <h1 id="title">Nasza firma oferuje najwyższej jakości produkty.</h1>
              <h2 id="title2">Nie wierz nam na słowo - sprawdź</h2>
              <div className="rectangle_offer">
                <a href="#about">oferta</a>
              </div>
            </div>
          </div>
        </div>
        </section>
        <div className="container second_section">
          <h1 id="specialist">Nasi specjaliści</h1>
          {persons.map((p) => <Persons name={p.name} department={p.department} description={p.description} isPersonEvenOrOdd={p.isPersonEven}/>)}
        </div>
        <div className="background">
          <div className="services">
            <h1 id="about">Czym zajmuje sie nasza firma?</h1>
            <div className="box-container">
              {offers.map((o) => <Offer label={o.label} isNew={o.isNew} />)}
            </div>
          </div>
      </div>
          <footer>
            <h2 id="footer_title">
              Nazwa firmy - wszelkie prawa zastrzeżone, 2019
            </h2>
            <i style={{cursor: 'not-allowed'}} className="fab fa-instagram fa-2x"></i>
            <i style={{cursor: 'not-allowed'}} className="fab fa-facebook-square fa-2x"></i>
          </footer>
      
    </div>
  );
}

export default App;

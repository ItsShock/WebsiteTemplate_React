import Offer from './components/offer';
import './App.css';

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
          <div className="person">
            <div className="person-even">
              <div className="ellipse1"></div>
              <div className="person1">
                <p id="p_1" >Imię Nazwisko [ dział ]</p>
                <p id="description1"> ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
                massa et lacus egestas cursus a non magna. Fusce scelerisque blandit
                nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum
                lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non
                tincidunt libero ultrices in.</p>
              </div>
            </div>
            <div className="person-odd">
              <div className="ellipse2"></div>
                <div className="person2">
                  <p style={{fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', fontSize: '28px', marginBottom: '38px'}}>Imię Nazwisko [ dział ]</p>
                  <p id="description2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel 
                  massa et lacus egestas cursus a non magna. Fusce scelerisque blandit
                  nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum
                  lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non
                  tincidunt libero ultrices in.</p>
                </div>
            </div>
          </div>
        </div>
        <div className="background">
        <div className="services">
          <h1 id="about">Czym zajmuje sie nasza firma?</h1>
          <div className="box-container">
            <Offer label={"Usługa 1"}/>
            <Offer label={"Usługa 2"}/>
            <Offer label={"Usługa 3"}/>
            <Offer label={"Usługa 4"}/>
            <Offer label={"Usługa 5"}/>
            <Offer label={"Usługa 6"}/>
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

import './App.css';

function App() {
  return (
    <div className="App">
      <aside>
        <div className="header">
          <div className='logo'>
            <span className="logo_icon">
              <span className="icon">
                headphones
              </span>
            </span>
            <h1>Music App</h1>
          </div>
          <div className="search">
            <input type="search" name="q" id="search" placeholder='Buscar' />
          </div>
          <div className="menu">
            <li>
              <a href="/">
                <span className="icon">
                  window
                </span>
                Menú principal
              </a>
            </li>
            <li>
              <input type="radio" name="menu" id="lb0" />
              <label for="lb0">
                <span className="icon">
                  music_note
                </span>
                Musica
              </label>
              <ul>
                <li><a href="/">Últimos lanzamientos</a></li>
                <li><a href="/">Canciones populares</a></li>
              </ul>
            </li>
            <li>
              <input type="radio" name="menu" id="lb1" />
              <label for="lb1">
                <span className="icon">
                  smart_display
                </span>
                Videos musicales
              </label>
              <ul>
                <li><a href="/">Últimos lanzamientos</a></li>
                <li><a href="/">Videos más vistos</a></li>
                <li><a href="/">Videos de artistas populares</a></li>
              </ul>
            </li>
            <li>
              <input type="radio" name="menu" id="lb2" />
              <label for="lb2">
                <span className="icon">
                  category
                </span>
                Categorias
              </label>
              <ul>
                <li><a href="/">Canciones de Rock</a></li>
                <li><a href="/">Canciones de Pop</a></li>
                <li><a href="/">Canciones de Baladas</a></li>
                <li><a href="/">Canciones de Cumbia</a></li>
                <li><a href="/">Canciones de Salsa</a></li>
              </ul>
            </li>
            <li>
              <input type="radio" name="menu" id="lb3" />
              <label for='lb3'>
                <span className="icon">
                  groups_2
                </span>
                Nuestro equipo
              </label>
              <ul>
                <li><a href="/">Conoce nuestro equipo</a></li>
                <li><a href="/">Contáctanos</a></li>
              </ul>
            </li>
          </div>
        </div>
        <div className="footer">
          <div className="messagge">
            <p>Created by Phownix</p>
          </div>
        </div>
      </aside>
      <main>
        <p>sdasddsa</p>
      </main>
    </div>
  );
}

export default App;

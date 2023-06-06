import './App.css';
import Aside from './Helpers/Aside';

function App() {
    return (
        <div className="App">
            <Aside/>
            <main>
                <section className="user_playlist">
                    <div className="_list">
                        <div className="card">
                            <span className="icon">play_arrow</span>
                        </div>
                        <span className="title">
                            Nombre Playlist
                        </span>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;

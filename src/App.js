import './App.css';
import Aside from './Helpers/Aside';

function App() {
    return (
        <div className="App">
            <Aside/>
            <main>
                <h2 className='section_title'>Playlist Sugeridos</h2>
                <section className="user_playlist">
                    {[1,2,3,4,5].map(e => {
                        return(
                            <div className="target">
                                <div className="cover">
                                    <img src={e%2 ? "https://lh3.googleusercontent.com/Y4bFXXtmuq0_eolWdb0eF0Z2k9FNrCts_VRjmgSwiVypdkmR8RiBYw-njhE_Yc2pEynUuYw4WWuYF14=w544-h544-l90-rj" : ""} alt="Cover no disponible" />
                                    <div className="card">
                                        <span className="icon">play_arrow</span>
                                    </div>
                                </div>
                                <span className="title">
                                    Legion Soundtrack
                                </span>
                                <div className="info">
                                    <span className="authors">
                                        <a className='author' href="/">Jeff Ruso</a>
                                    </span>
                                    <span className="songs">19 Canciones</span>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </main>
        </div>
    );
}

export default App;

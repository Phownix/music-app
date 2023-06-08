import './App.css';
import Aside from './Helpers/Aside';
import MaxCard from './Helpers/Card/Max'
import MinCard from './Helpers/Card/Min'

let song = [
    {
        "poster": "https://lh3.googleusercontent.com/W35z9TRq3YGfjuj0rZkDc7ljLaQqAcdomdLue9hd5tPz50RqxQNSDf7lFw6kowE85kW82YB5DYM1u3MD=w544-h544-l90-rj",
        "name": "She's A Rainbow (Remastered 2017 / Stereo)",
        "author": "The Rolling Stones",
        "album": "",
        "time":"4:35"
    },
    {
        "poster": "https://lh3.googleusercontent.com/Rw1g7yUlWm4uzQKIB5pVqr3SCn2-Xm1HAwjNe_QZoA6Z2iKcvlKhs82gug6SK0pl2Ahk4EjxOcqROmmw=w544-h544-l90-rj",
        "name": "Children Of The Revolution (Original 7\" Version)",
        "author": "T. Rex",
        "album": "",
        "time":"2:31"
    },
    {
        "poster": "https://lh3.googleusercontent.com/D6H-s5qLjzMzLi8yn3Tf3BsdkF9faLKBBhzNLiVMLs_4LsGZpMJNHvDKhavfxXrpVXjpmKXeW1MvBFI=w544-h544-l90-rj",
        "name": "Starman (2002 Remaster)",
        "author": "David Bowie",
        "album": "",
        "time":"4:14"
    },
    {
        "poster": "https://lh3.googleusercontent.com/nsHMOOKGC2hCn7x0WOIMsPueRcBLD-qqMKnwzDtuZ_Ji4OviI-kUwHyl7L2LyeAxEc2YN_fSmulYpOsa=w544-h544-l90-rj",
        "name": "Mr. Blue Sky",
        "author": "Electric Light Orchestra",
        "album": "",
        "time":"5:02"
    },
    {
        "poster": "https://lh3.googleusercontent.com/uSNyVYPeunGmnCo7UUu3dwohNvpsO7XLJxPZAZetSZ_RRUYgGR5D5p6bi-w6suhxYfvYSng0jdP4i929=w544-h544-l90-rj",
        "name": "Paranoid",
        "author": "Black Sabbath",
        "album": "",
        "time":"2:48"
    },
    {
        "poster": "https://lh3.googleusercontent.com/U7k2oSmy45dhhj8ACdsUr1hQAvoY1IcOlHI_ZwU2rckJte1UEcTyrBUPUGr6Q-HT9-zeY0BwJ05xlOOJ=w544-h544-l90-rj",
        "name": "Creep",
        "author": "Radiohead",
        "album": "",
        "time":"3:59"
    },
    {
        "poster": "https://lh3.googleusercontent.com/U7k2oSmy45dhhj8ACdsUr1hQAvoY1IcOlHI_ZwU2rckJte1UEcTyrBUPUGr6Q-HT9-zeY0BwJ05xlOOJ=w544-h544-l90-rj",
        "name": "Creep",
        "author": "Radiohead",
        "album": "",
        "time":"3:59"
    },
    {
        "poster": "https://lh3.googleusercontent.com/HX38NIjwGxBL5pOc2Le_fFQ-Qb3cxx7mmGDCcu5jCjWmXWkUxe5Kr0uzVZ9xx_U6z1MhdRAAG1nJAqDe=w544-h544-l90-rj",
        "name": "Something For Your M.I.N.D.",
        "author": "Superorganism",
        "album": "",
        "time":"2:46"
    }
]

let playlist = [
    {
        "poster": "https://lh3.googleusercontent.com/W35z9TRq3YGfjuj0rZkDc7ljLaQqAcdomdLue9hd5tPz50RqxQNSDf7lFw6kowE85kW82YB5DYM1u3MD=w544-h544-l90-rj",
        "name": "She's A Rainbow (Remastered 2017 / Stereo)",
        "author": "The Rolling Stones",
        "album": "",
        "time":"4:35"
    },
    {
        "poster": "https://lh3.googleusercontent.com/Rw1g7yUlWm4uzQKIB5pVqr3SCn2-Xm1HAwjNe_QZoA6Z2iKcvlKhs82gug6SK0pl2Ahk4EjxOcqROmmw=w544-h544-l90-rj",
        "name": "Children Of The Revolution (Original 7\" Version)",
        "author": "T. Rex",
        "album": "",
        "time":"2:31"
    },
    {
        "poster": "https://lh3.googleusercontent.com/nsHMOOKGC2hCn7x0WOIMsPueRcBLD-qqMKnwzDtuZ_Ji4OviI-kUwHyl7L2LyeAxEc2YN_fSmulYpOsa=w544-h544-l90-rj",
        "name": "Mr. Blue Sky",
        "author": "Electric Light Orchestra",
        "album": "",
        "time":"5:02"
    },
    {
        "poster": "https://lh3.googleusercontent.com/uSNyVYPeunGmnCo7UUu3dwohNvpsO7XLJxPZAZetSZ_RRUYgGR5D5p6bi-w6suhxYfvYSng0jdP4i929=w544-h544-l90-rj",
        "name": "Paranoid",
        "author": "Black Sabbath",
        "album": "",
        "time":"2:48"
    },
    {
        "poster": "https://lh3.googleusercontent.com/HX38NIjwGxBL5pOc2Le_fFQ-Qb3cxx7mmGDCcu5jCjWmXWkUxe5Kr0uzVZ9xx_U6z1MhdRAAG1nJAqDe=w544-h544-l90-rj",
        "name": "Something For Your M.I.N.D.",
        "author": "Superorganism",
        "album": "",
        "time":"2:46"
    }
]

function App() {
    return (
        <div className="App">
            <Aside/>
            <div className="main_app">
                <main>
                    <section>
                        <h2 className='section_title'>Playlist Sugeridos</h2>
                        <span className="sub_title">Creados por los mejores, para los mejores</span>
                        <div className="global_playlist">
                            {playlist.map(e => {
                                return(
                                    <MaxCard list={e}/>
                                )
                            })}
                        </div>
                    </section>

                    <section>
                        <h2 className='section_title'>Canciones Populares</h2>
                        <span className="sub_title">La musica que la lleva en tu region</span>
                        <div className="trending_zone">
                            {song.map(e => {
                                return(
                                    <MinCard song={e}/>
                                )
                            })}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default App;

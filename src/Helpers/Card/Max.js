import './Card.css'

function MaxCard(props){
    let playlist = props.list
    return(
        <div className="max target">
            <div className="cover">
                <img src={playlist.poster} alt="" />
                <div className="card">
                    <span className="icon">play_arrow</span>
                </div>
            </div>
            <span className="title">
                Legion Soundtrack
            </span>
            <div className="info">
                <span className="authors">
                    <a className='author' href="/">{playlist.author}</a>
                </span>
                <span className="songs">19 Canciones</span>
            </div>
        </div>
    )
}

export default MaxCard
import './Card.css'

function MinCard(props){
    let metadata = props.song
    return(
        <div className="min target">
            <div className="cover">
                <img src={metadata.poster} alt={metadata.name} />
                <div className="card">
                    <span className="icon">play_arrow</span>
                </div>
            </div>
            <div className="data">
                <span className="title" title={metadata.name}>
                    {metadata.name}
                </span>
                <div className="info">
                    <span className="authors">
                        <a className='author' href="/">{metadata.author}</a>
                    </span>
                    <span className="time">{metadata.time}</span>
                </div>
            </div>
        </div>
    )
}

export default MinCard
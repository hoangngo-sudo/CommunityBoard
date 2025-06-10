
function GridCard (props) {
    return (
        <article className="grid-card">
            <figure className="project-img">
                <div className="project-item-box">
                    <a className="read-more-overlay" href={props.link} target="_blank">
                        Read More
                    </a>
                </div>
                <img src={props.image} alt={"Card image"} />
            </figure>
            
            <div className="card-content">
                <h2>{props.title}</h2>
                <h4>{props.smalltitle}</h4>
                <p>{props.description}</p>
            </div>
        </article>
            
        
    )
}

export default GridCard;
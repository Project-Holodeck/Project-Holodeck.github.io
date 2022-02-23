const ExecutiveCard = ( { cardInfo }) => {
    return <>
        {cardInfo.map((card) => {
            return <>
                <div className="teamPageExecutiveCard">
                    <img className="teamPageExecutiveImg" src={card.image} alt=""/>
                    <h2>{card.name}</h2>
                    <h3>{card.role}</h3>
                    <h3>Discipline: {card.discipline}</h3>
                    <h3>Graduation Year: {card.gradYear}</h3>
                    <div className="teamPageIconContainer">
                        <a href={card.linkedin}>
                            <div className="teamPageLinkedinIcon"/>
                        </a>
                        <a href={card.world}>
                        <div className="teamPageWorldIcon"/>
                        </a>
                        
                    </div>
                </div>
            </>
        })}
    </>
}

export default ExecutiveCard;

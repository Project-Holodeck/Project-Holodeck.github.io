const MemberCard = ( { cardInfo }) => {
  return <>
    {cardInfo.map((card) => {
        return <div className="teamPageMemberCard">
            <div className="teamPageMemberCardImgContainer">
                <img src={card.image} alt=""/>
            </div>
            <h2>{card.name}</h2>
            <h3>Discipline: {card.discipline}</h3>
        </div>
    })}
  </>;
};

export default MemberCard;

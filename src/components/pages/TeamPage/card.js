// card has attributes .className, .image, .name, .position,
//   .discipline [is "discipline+year"], .link1, .link2
import './card.css';

const Card = ({card}) => {
  return <>
    <div className={"teamPageCard " + card.className}>
      <img className="teamPageCardImg" src={card.image}/>
      <br/>
      <span className="teamPageCardName">{card.name}</span>
      <br/>
      <span className="teamPageCardDesc">{card.position}</span>
      <br/>
      <span className="teamPageCardDesc">{card.discipline}</span>
      <br/>
      <div className="teamPageCardLinks">
        <a href={card.link1}><div className="teamPageCardLink1"/></a>
        <a href={card.link2}><div className="teamPageCardLink2"/></a>
      </div>
    </div>
  </>;
}

export default Card;

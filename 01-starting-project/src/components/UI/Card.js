import CardDiv from "./CardDiv";

const Card = (props) => {
  return (
    <CardDiv className={props.className}>
      {props.children}
    </CardDiv>
  );
};

export default Card;

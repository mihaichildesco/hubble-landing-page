import * as styled from "./styles/styled.Card";

export default function Card({ item: { id, title, body, image } }) {
  return (
    <styled.Card layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2> {title} </h2>
        <p> {body} </p>
      </div>
      <div>
        <img src={`images/${image}`} alt="" />
      </div>
    </styled.Card>
  );
}

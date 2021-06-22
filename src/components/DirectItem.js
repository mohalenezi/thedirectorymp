import { MovieWrapper } from "../style";
import { Link } from "react-router-dom";

const DirectItem = (props) => {
  return (
    <div>
      <MovieWrapper>
        <Link to={`/movies/${props.id}`}>
          <img alt={props.title} src={props.poster} />
        </Link>
        <p>{props.title}</p>
        <p>Date OF release:{props.released}</p>
      </MovieWrapper>
    </div>
  );
};

export default DirectItem;

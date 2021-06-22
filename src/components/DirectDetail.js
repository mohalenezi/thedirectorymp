import { DetailWrapper } from "../style";
import { useParams, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import DirectList from "./DirectList";
// import movies from "./data";

const DirectDetail = (props) => {
  const movieId = useParams().movieId;
  const movie = props.movies.find((movie) => movie.id === +movieId);

  if (!movie) return <Redirect to="/movies" />;
  return (
    <div>
      <DetailWrapper>
        <img src={movie.poster} alt={movie.title} />
        <p>{movie.title}</p>
        <p>{movie.released}</p>
        <p>{movie.runtime}</p>
        <p>{movie.genre}</p>
        <p>{movie.plot}</p>
        <DetailWrapper>
          <DirectList />
        </DetailWrapper>
        <Link to="/movies">
          <button>back</button>
        </Link>
      </DetailWrapper>
    </div>
  );
};

export default DirectDetail;

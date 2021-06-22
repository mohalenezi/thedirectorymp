import DirectItem from "./DirectItem";
import movies from "../data";
import { ListWrapper } from "../style";

const DirectList = () => {
  const directList = movies.map((movie) => (
    <DirectItem
      id={movie.id}
      poster={movie.poster}
      title={movie.title}
      released={movie.released}
    />
  ));
  return (
    <div>
      <ListWrapper>{directList}</ListWrapper>;
    </div>
  );
};

export default DirectList;

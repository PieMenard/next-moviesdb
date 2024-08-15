const MoviesList = ({ results }: any) => {
  return (
    <div>
      {results.map((movie: any) => (
        <div key={movie.id}>
          <h2>{movie.original_title}</h2>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;

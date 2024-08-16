import MoviesList from '@/components/MoviesList';

const API_KEY = process.env.API_KEY;

type searchPageProps = {
  searchTerm?: string;
};

const SearchPage = async ({ params }: { params: searchPageProps }) => {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`
  );

  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No movies found.</h1>
      )}
      {results && <MoviesList results={results} />}
    </div>
  );
};

export default SearchPage;

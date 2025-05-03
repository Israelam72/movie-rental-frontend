
export default async function Home() {
  const res = await fetch("http://localhost:8000")
  const data = await res.json()

  return (
    <div className="bg-background">
      <h1 className="text-4xl text-home-title">Filmes</h1>
      {data.map((movie: any) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <p>{movie.genre}</p>
          <p>{movie.director}</p>
          <p>{movie.release_year}</p>
          <p>{movie.synopsis}</p>
          <p>{movie.rating}</p>
        </div>
      ))}
    </div>
  )
}

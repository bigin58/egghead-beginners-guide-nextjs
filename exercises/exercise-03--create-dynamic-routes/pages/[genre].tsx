import { useRouter } from "next/router";

const Genres = () => {
  const router = useRouter()
  const { genre } = router.query

  return (
    <div>
      <h1>Genre: {genre}</h1>
    </div>
  )
}

export default Genres
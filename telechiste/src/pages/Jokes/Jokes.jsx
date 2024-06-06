import { getAllJokes } from "../../services/jokesServices"
import { useEffect, useState } from "react"
import JokeCard from "../../components/JokeCard/JokeCard"
import './Jokes.css'

function Jokes() {
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        const jokesRequest = async () => {
            const result = await getAllJokes()
            setJokes(result)
        }
        jokesRequest()
    }, [])


  return (
    <div className="jokes-container">
        {
            jokes.map((joke) => {
                return <JokeCard jokeValue={joke.value} key={joke.id} />
            })
        }
    </div>
  )
}

export default Jokes
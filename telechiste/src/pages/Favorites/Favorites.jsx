import { useEffect, useState } from "react"
import { getUserProfile } from "../../services/userService"
import './Favorites.css'
function Favorites() {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const getFavoritesData = async () => {
            const result = await getUserProfile()
            setFavorites(result.jokes)
        }
        getFavoritesData()
    }, [])
    console.log(favorites)
  return (
    <div className="favorite-container">
        {
            favorites.map((favorite) => {
                return (
                    <div className="favorite-card" key={favorite.id}>
                        <p>
                            {favorite.value}
                        </p>
                        <h4>
                            Likes {favorite.likes}
                        </h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Favorites
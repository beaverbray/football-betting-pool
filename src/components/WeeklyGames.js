// src/components/WeeklyGames.js
'use client'
import { useState, useEffect } from 'react'
import { fetchWeeklyGames } from '@/utils/dataRetrieval'

export default function WeeklyGames() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getGames = async () => {
      try {
        const gamesData = await fetchWeeklyGames()
        setGames(gamesData)
      } catch (error) {
        console.error("Error fetching games: ", error)
      } finally {
        setLoading(false)
      }
    }

    getGames()
  }, [])

  if (loading) {
    return <div className="loading loading-spinner loading-lg"></div>
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">This Week's Games</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Home Team</th>
                <th>Away Team</th>
                <th>Spread</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => (
                <tr key={game.id}>
                  <td>{game.homeTeam}</td>
                  <td>{game.awayTeam}</td>
                  <td>{game.spread > 0 ? `+${game.spread}` : game.spread}</td>
                  <td>{new Date(game.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
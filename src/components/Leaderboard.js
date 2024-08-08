// src/components/Leaderboard.js
'use client'
import { useState, useEffect } from 'react'
import { fetchLeaderboard } from '@/utils/dataRetrieval'

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getLeaderboard = async () => {
      try {
        const data = await fetchLeaderboard()
        setLeaderboard(data)
      } catch (error) {
        console.error("Error fetching leaderboard: ", error)
      } finally {
        setLoading(false)
      }
    }

    getLeaderboard()
  }, [])

  if (loading) {
    return <div className="loading loading-spinner loading-lg"></div>
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Leaderboard</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, index) => (
                <tr key={entry.id}>
                  <td>{index + 1}</td>
                  <td>{entry.username}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
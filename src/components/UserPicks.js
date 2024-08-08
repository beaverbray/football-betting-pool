// src/components/UserPicks.js
'use client'
import { useState, useEffect } from 'react'
import { fetchUserPicks } from '@/utils/dataRetrieval'

export default function UserPicks() {
  const [picks, setPicks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPicks = async () => {
      try {
        // For now, we're using a hardcoded user ID. In a real app, you'd get this from authentication.
        const data = await fetchUserPicks('user1')
        setPicks(data)
      } catch (error) {
        console.error("Error fetching user picks: ", error)
      } finally {
        setLoading(false)
      }
    }

    getPicks()
  }, [])

  if (loading) {
    return <div className="loading loading-spinner loading-lg"></div>
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Your Picks</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Game</th>
                <th>Your Pick</th>
              </tr>
            </thead>
            <tbody>
              {picks.map((pick) => (
                <tr key={pick.id}>
                  <td>{pick.game}</td>
                  <td>{pick.selection}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
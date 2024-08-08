// src/app/page.js
import WeeklyGames from '@/components/WeeklyGames'
import Leaderboard from '@/components/Leaderboard'
import UserPicks from '@/components/UserPicks'

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200">
      <header className="bg-primary text-primary-content shadow-lg">
        <div className="container mx-auto py-4 px-4">
          <h1 className="text-3xl font-bold">Football Betting Pool</h1>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <WeeklyGames />
          </div>
          <div>
            <Leaderboard />
          </div>
          <div>
            <UserPicks />
          </div>
        </div>
      </main>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>© 2024 Football Betting Pool - All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}
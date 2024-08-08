// src/utils/dataRetrieval.js
import axios from 'axios';

const GITHUB_RAW_URL = 'https://github.com/beaverbray/football-betting-pool/data/';

export async function fetchWeeklyGames() {
  try {
    const response = await axios.get(`${GITHUB_RAW_URL}weeklyGames.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weekly games:', error);
    return [];
  }
}

export async function fetchLeaderboard() {
  try {
    const response = await axios.get(`${GITHUB_RAW_URL}leaderboard.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }
}

export async function fetchUserPicks(userId) {
  try {
    const response = await axios.get(`${GITHUB_RAW_URL}userPicks/${userId}.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user picks:', error);
    return [];
  }
}
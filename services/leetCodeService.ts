
import { LeetCodeStats } from '../types';

/**
 * Real-time service that fetches live LeetCode statistics.
 * Uses a public API proxy to bypass CORS and retrieve profile data for Osman_ghani.
 */

type StatsCallback = (stats: LeetCodeStats) => void;

class LeetCodeRealtimeService {
  private subscribers: StatsCallback[] = [];
  private currentStats: LeetCodeStats | null = null;
  private readonly USERNAME = 'Osman_ghani';
  private readonly API_URL = `https://leetcode-stats-api.herokuapp.com/${this.USERNAME}`;

  constructor() {
    // Initial fetch
    this.refreshStats();
    
    // Poll for updates every 60 seconds
    setInterval(() => {
      this.refreshStats();
    }, 60000);
  }

  /**
   * Fetches the latest statistics from the public LeetCode API proxy.
   */
  private async refreshStats() {
    try {
      const response = await fetch(this.API_URL);
      const data = await response.json();

      if (data.status === 'success') {
        const newStats: LeetCodeStats = {
          username: this.USERNAME,
          solved: data.totalSolved,
          easy: data.easySolved,
          medium: data.mediumSolved,
          hard: data.hardSolved
        };

        // Only notify if data has actually changed or is the first load
        if (JSON.stringify(newStats) !== JSON.stringify(this.currentStats)) {
          this.currentStats = newStats;
          this.notifySubscribers();
        }
      }
    } catch (error) {
      console.error('Failed to fetch LeetCode stats:', error);
      // Fail silently and keep currentStats to avoid UI disruption
    }
  }

  private notifySubscribers() {
    if (this.currentStats) {
      const stats = { ...this.currentStats };
      this.subscribers.forEach(cb => cb(stats));
    }
  }

  /**
   * Subscribes a component to receive real-time stat updates.
   */
  public subscribe(callback: StatsCallback) {
    this.subscribers.push(callback);
    
    // If we already have stats, push them immediately
    if (this.currentStats) {
      callback({ ...this.currentStats });
    } else {
      // Otherwise trigger an immediate refresh to satisfy the new subscriber
      this.refreshStats();
    }
    
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  /**
   * Returns the latest available stats.
   */
  public async getLatestStats(): Promise<LeetCodeStats | null> {
    if (this.currentStats) return { ...this.currentStats };
    await this.refreshStats();
    return this.currentStats ? { ...this.currentStats } : null;
  }
}

export const leetCodeService = new LeetCodeRealtimeService();

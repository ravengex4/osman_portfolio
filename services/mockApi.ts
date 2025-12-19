
/**
 * Simulated backend service for interviewing purpose.
 */

export const mockApi = {
  auth: {
    login: async () => ({ status: 'success', token: 'mock-jwt-token' }),
    me: async () => ({ name: 'Mohammed Osman Ghani', role: 'ADMIN' })
  },
  machines: {
    getAll: async () => [
      { id: '1', name: 'Primary-Node-Alpha', status: 'online', load: '12%' },
      { id: '2', name: 'GPU-Cluster-X1', status: 'processing', load: '88%' }
    ]
  },
  github: {
    getRepos: async (username: string) => [
      { name: 'ai-course-gen', stars: 12, forks: 4 },
      { name: 'skill-bridge', stars: 8, forks: 2 }
    ]
  }
};

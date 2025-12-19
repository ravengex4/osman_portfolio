
export interface Achievement {
  title: string;
  organizer: string;
  year: string;
  description: string;
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
  stars?: number;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Language' | 'Frontend' | 'CS Fundamentals';
}

export interface LeetCodeStats {
  username: string;
  solved: number;
  easy: number;
  medium: number;
  hard: number;
}

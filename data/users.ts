type User = {
  description: string;
  username: string;
  imgFilename: string;
};

export const USERS: Record<string, User> = {
  standard: {
    description: 'Standard User',
    username: 'standard_user',
    imgFilename: 'standardUser.png',
  },
  problem: {
    description: 'Problem User',
    username: 'problem_user',
    imgFilename: 'problemUser.png',
  },
  error: {
    description: 'Error User',
    username: 'error_user',
    imgFilename: 'errorUser.png',
  },
  visual: {
    description: 'Visual User',
    username: 'visual_user',
    imgFilename: 'visualUser.png',
  },
  performanceGlitch: {
    description: 'Peformance Glitch User',
    username: 'performance_glitch_user',
    imgFilename: 'performanceGlitchUser.png',
  },
};

export interface Topic {
    name: string;
    subtopics: string[];
    completed: boolean;
  }
  
  export interface StudyChallenge {
    title: string;
    duration: number;
    topics: Topic[];
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    focus: 'html' | 'css' | 'javascript' | 'all';
  }
  
  export interface UserPreferences {
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    focus: 'html' | 'css' | 'javascript' | 'all';
    duration: number;
  }
  
  
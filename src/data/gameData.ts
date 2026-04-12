export interface LevelData {
  id: number;
  title: string;
  world: string;
  description: string;
  emoji: string;
  question: string;
  options: { id: string; text: string; emoji: string }[];
  correctAnswer: string;
  explanation: string;
  changeType: string;
  transformation: string;
}

import quizes from "./quizes.json";

export const gameLevels: LevelData[] = quizes as LevelData[];

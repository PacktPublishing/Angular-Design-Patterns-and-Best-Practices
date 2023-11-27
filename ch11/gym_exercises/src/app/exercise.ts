export interface Exercise {
  id?: string;
  description: string;
}

export type ExerciseList = Array<Exercise>;

export interface ExerciseListAPI {
  hasNext: boolean;
  items: ExerciseList;
}

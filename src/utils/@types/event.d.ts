interface TopFiveType {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnailImage: string;
  remainingDays: number;
  goal: {
    targetNumber: number;
    registrantNumber: number;
    progressRate: number;
  };
}

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

interface EventFilterType {
  search: string;
  sort: "new" | "liked" | "imm";
  category: string;
  page: number;
}

interface EventPreviewType {
  programId: number;
  title: string;
  thumbnail: string;
  category: string;
  content: string;
  isOpen: boolean;
  remainingDays: number;
  goal: {
    targetNumber: number;
    registrationNumber: number;
    progressRate: number;
  };
  hasLike: boolean;
}

interface EventDetailType {}

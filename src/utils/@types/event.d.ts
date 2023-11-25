type CategoryType = "" | "PLAY" | "EXHIBIT" | "BAR" | "ACADEMIC" | "ETC";
type SortType = "NEW" | "POPULAR" | "DEADLINE";

interface TopFiveType {
  programId: number;
  title: string;
  category: CategoryType;
  content: string;
  thumbnailImage: string;
  remainingDays: number;
  goal: {
    targetNumber: number;
    registrantNumber: number;
    progressRate: number;
  };
}

interface EventFilterType {
  keyword: string;
  sort: SortType;
  category: string;
  page: number;
}

interface EventPreviewType {
  programId: number;
  title: string;
  thumbnailImage: string;
  category: CategoryType;
  content: string;
  isOpen: boolean;
  remainingDays: number;
  goal: {
    targetNumber: number;
    registrantNumber: number;
    progressRate: number;
  };
  hasLike: boolean;
}

interface EventRegisterInfoType {
  isRegistered: boolean;
  isHost: boolean;
  title: string;
  imageUrl: string;
  category: CategoryType;
  progressRate: number;
  remainingDays: number;
  date: string;
  location: string;
  price: string;
  depositInfo: string;
}

interface EventRegisterDataType {
  title: string;
  input: {
    text: string;
    placeholder: string;
    key:
      | "depositorName"
      | "depositAmount"
      | "depositDate"
      | "registrantName"
      | "registrantPhone"
      | "refundName"
      | "refundBank"
      | "refundAccount";
  }[];
}
interface EventRegisterFormType {
  depositorName: string;
  depositAmount: number | undefined | string;
  depositDate: Date | null | string;
  registrantName: string;
  registrantPhone: string;
  refundBank: string;
  refundAccount: string;
  refundName: string;
}

interface EventNoticeType {
  noticeId: number;
  title: string;
  content: string;
  createdDate: string;
}

interface EventDetailType {
  program: {
    programId: number;
    title: string;
    content: string;
    category: CategoryType;
    schedule: string;
    postalCode: string;
    location: string;
    deadline: string;
    remainingDays: number;
    isOpen: boolean;
    depositInfo: string;
    price: string;
    goal: {
      targetNumber: number;
      registrantNumber: number;
      progressRate: number;
    };
    likeNumber: number;
    contentImages: {
      id: number;
      url: string;
    }[];
    notices: EventNoticeType[];
    host: {
      name: string;
      description: string;
    };
  };
  member: {
    hasLike: boolean;
    hasRegistration: boolean;
    isHost: boolean;
  };
  otherPrograms: EventPreviewType[];
}

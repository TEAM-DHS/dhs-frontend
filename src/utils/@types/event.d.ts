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

interface ProgramType {
  title: string;
  category: string;
  schedule: string;
  location: string;
  postalCode: string;
  deadline: string;
  targetNumber: number;
  content: string;
  depositAccount: string;
  depositBank: string;
  depositName: string;
  price: string;
  hostName: string;
  hostDescription: string;
}
interface ImgType {
  images: File[];
}

interface BankType {
  depositAccount: string;
  setDepositAccount: React.Dispatch<React.SetStateAction<string>>;
  depositBank: string;
  setDepositBank: React.Dispatch<React.SetStateAction<string>>;
  depositName: string;
  setDepositName: React.Dispatch<React.SetStateAction<string>>;
}

interface EventCategoryType {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

interface DescriptionType {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

interface EndDateType {
  deadline: string;
  setDeadline: React.Dispatch<React.SetStateAction<string>>;
}

interface EventDateType {
  schedule: string;
  setSchedule: React.Dispatch<React.SetStateAction<string>>;
}

interface EventTitleType {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

interface PeopleType {
  targetNumber: number;
  setTargetNumber: React.Dispatch<React.SetStateAction<number>>;
}

interface PersonalInfoType {
  agree: boolean;
  setAgree: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Photos {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

interface PlaceType {
  postalCode: string;
  setPostalCode: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

interface PriceType {
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
}

interface QuestionType {
  title: string;
}

interface TeamIntroType {
  hostDescription: string;
  setHostDescription: React.Dispatch<React.SetStateAction<string>>;
}

interface TeamNameType {
  hostName: string;
  setHostName: React.Dispatch<React.SetStateAction<string>>;
}

interface Photos {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

interface ButtonProps {
  text: string;
  isValid?: boolean;
  clickFn?: () => void;
}

type IdInputProps = {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setIsValidId: React.Dispatch<React.SetStateAction<boolean>>;
};

interface NavigateProps {
  message: string;
  route: string;
  url: string;
}

type PasswordInputProps = {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setIsValidPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

interface TemplateProps {
  children: ReactNode;
}

interface EmptyMessageProps {
  message: string;
}

interface isCategoryProps {
  isCategory?: boolean;
}

interface PageType {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  category: string;
  getData: () => Promise<void>;
  setData: React.Dispatch<React.SetStateAction<EventPreviewType[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

interface CloseButtonProps {
  setIsClose: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CloseModalProps {
  setIsClose: React.Dispatch<React.SetStateAction<boolean>>;
}

type PaymentType = {
  check: boolean;
  name: string;
  date: string;
  price: string;
};

type RefundType = {
  status: string;
  bank: string;
  account: string;
  name: string;
};

type ListPropsType = {
  name: string;
  phone: string;
  payment: PaymentType;
  refund: RefundType;
};

interface ListType {
  name: string;
  phone: string;
  payment: {
    check: boolean;
    name: string;
    date: string;
    price: string;
  };
  refund: {
    status: string;
    bank: string;
    account: string;
    name: string;
  };
}

interface ListType {
  name: string;
  phone: string;
  payment: {
    check: boolean;
    name: string;
    date: string;
    price: string;
  };
  refund: {
    status: string;
    bank: string;
    account: string;
    name: string;
  };
}

interface TableProps{
  data: ListType[];
}

type PasswordReInputProps = {
  rePassword: string;
  setRePassword: React.Dispatch<React.SetStateAction<string>>;
  setIsValidRePassword: React.Dispatch<React.SetStateAction<boolean>>;
  password: string;
};


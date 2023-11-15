type PaymentType = {
  status: string;
  name: string;
  date: string;
  price: number;
};

type RefundType = {
  status: string;
  bank: string;
  account: string;
  name: string;
};

type RegisterType = {
  name: string;
  phone: string;
  payment: PaymentType;
  refund: RefundType;
};

export const registerData: RegisterType[] = [
  {
    name: "김갑을",
    phone: "010-0000-0000",
    payment: {
      status: "입금 완료",
      name: "김갑을",
      date: "2023-10-08T18:22:52",
      price: 9000,
    },
    refund: {
      status: "해당 없음",
      bank: "신한은행",
      account: "110-000-000000",
      name: "김갑을",
    },
  },
  {
    name: "박병정",
    phone: "010-1111-0000",
    payment: {
      status: "입금 확인 중",
      name: "박병정",
      date: "2023-10-09T09:28:00",
      price: 10000,
    },
    refund: {
      status: "해당 없음",
      bank: "신한은행",
      account: "110-111-000000",
      name: "박병정",
    },
  },
];

export const registerCategory = [
  "입금자명",
  "입금 날짜",
  "금액",
  "신청자명",
  "전화번호",
  "환불자명",
  "환불은행",
  "환불계좌",
  "입금확인",
  "환불상태",
];

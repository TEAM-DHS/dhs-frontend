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

type ListPropsType = {
  name: string;
  phone: string;
  payment: PaymentType;
  refund: RefundType;
};

const List: React.FC<ListPropsType> = ({ name, phone, payment, refund }) => {
  return (
    <>
      <tr className="pr-auto pl-auto text-p border-t border-gray-300">
        <td className="pb-[17px] pt-[17px] text-center">{payment.name}</td>
        <td className="pb-[17px] pt-[17px] text-center">
          {payment.date.slice(0, 10)}
        </td>
        <td className="pb-[17px] pt-[17px] text-center">{payment.price}</td>
        <td className="pb-[17px] pt-[17px] text-center">{name}</td>
        <td className="pb-[17px] pt-[17px] text-center">{phone}</td>
        <td className="pb-[17px] pt-[17px] text-center">{refund.name}</td>
        <td className="pb-[17px] pt-[17px] text-center">{refund.bank}</td>
        <td className="pb-[17px] pt-[17px] text-center">{refund.account}</td>
        <td className="pb-[17px] pt-[17px] text-center">{payment.status}</td>
        <td className="pb-[17px] pt-[17px] text-center">{refund.status}</td>
      </tr>
    </>
  );
};

export default List;

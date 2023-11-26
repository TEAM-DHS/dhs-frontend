const List = ({ name, phone, payment, refund }: ListPropsType) => {
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
        <td className="pb-[17px] pt-[17px] text-center">
          {payment.check ? "확인" : "미확인"}
        </td>
        <td className="pb-[17px] pt-[17px] text-center">{refund.status}</td>
      </tr>
    </>
  );
};

export default List;

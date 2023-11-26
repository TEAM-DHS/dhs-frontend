import { useState, MouseEventHandler } from "react";
import { postProgramNotice } from "../../api/program";

type Props = {
  closer: () => void;
  id: number;
  trigger: number;
  setTrigger: (value: number) => void;
};
const NoticeModal = ({ closer, id, trigger, setTrigger }: Props) => {
  const [noticeForm, setNoticeForm] = useState<{
    title: string;
    content: string;
  }>({ title: "", content: "" });
  const isCompleted = noticeForm.title !== "" && noticeForm.content !== "";

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (event.target) {
      const { name, value } = event.target;
      setNoticeForm({ ...noticeForm, [name]: value });
    }
  };

  const onSubmit = () => {
    postProgramNotice(id, {
      title: noticeForm.title,
      content: noticeForm.content,
    })
      .then(res => {
        alert("공지가 등록되었습니다.");
        closer();
        setTrigger(trigger + 1);
      })
      .catch(err => console.log(err));
  };

  const inputClassName =
    "w-[calc(100%-65px)] border-[1px] border-lightGray outline-none focus:border-mainBlue rounded-[6px] px-[10px] py-[6px] font-regular text-p text-black";

  return (
    <div className="w-full flex flex-col items-center gap-[50px]">
      <div className="font-bold text-[28px]">공지 등록</div>
      <div className="w-[calc(100%-60px)] flex flex-col">
        <div className="flex gap-[40px] items-center">
          <div className="font-bold text-slateBlack text-p">제목</div>
          <input
            type="text"
            name="title"
            value={noticeForm.title}
            onChange={onChange}
            maxLength={30}
            className={inputClassName}
          />
        </div>
        <div className="flex justify-end font-regular text-[12px] text-darkGray py-[5px] pr-[5px]">
          {noticeForm.title.length + "/30"}
        </div>
        <div className="flex gap-[40px] mt-[5px]">
          <div className="font-bold text-slateBlack text-p mt-[5px]">내용</div>
          <textarea
            name="content"
            value={noticeForm.content}
            onChange={onChange}
            maxLength={500}
            rows={5}
            className={inputClassName + " resize-none"}
          />
        </div>
        <div className="flex justify-end font-regular text-[12px] text-darkGray py-[5px] pr-[5px]">
          {noticeForm.content.length + "/500"}
        </div>
      </div>
      <div className="flex gap-[40px]">
        <div
          className="py-[12px] px-[42px] rounded-[12px] font-bold text-p text-white bg-mainBlue cursor-pointer"
          onClick={
            isCompleted
              ? onSubmit
              : () => alert("제목과 내용을 모두 입력하였는지 확인해주세요!")
          }
        >
          등록
        </div>
        <div
          className="py-[12px] px-[42px] rounded-[12px] cursor-pointer font-bold text-p text-white bg-lightBlue"
          onClick={closer}
        >
          취소
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;

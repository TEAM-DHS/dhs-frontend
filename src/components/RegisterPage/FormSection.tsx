import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/registerform.css";
import { eventRegisterData } from "../../utils/data/eventData";
import { DateTimePicker } from "@mui/x-date-pickers";

import { postProgramRegister } from "../../api/program";

const FormSection = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [registerForm, setRegisterForm] = useState<EventRegisterFormType>({
    depositorName: "",
    depositAmount: undefined,
    depositDate: null,
    registrantName: "",
    registrantPhone: "",
    refundName: "",
    refundBank: "",
    refundAccount: "",
  });
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const isNumeric = (target: string) =>
    !(
      target.includes("e") ||
      target.includes("E") ||
      target.includes("-") ||
      target.includes("+")
    );
  useEffect(() => {
    setIsValid(
      !!registerForm.depositorName &&
        !!registerForm.depositAmount &&
        isNumeric(String(registerForm.depositAmount)) &&
        !!registerForm.depositDate &&
        !!registerForm.registrantPhone &&
        /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}$/.test(
          registerForm.registrantPhone,
        ) &&
        !!registerForm.refundName &&
        !!registerForm.refundBank &&
        !!registerForm.refundAccount &&
        isNumeric(String(registerForm.refundAccount)),
    );
  }, [registerForm]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      const { name, value } = event.target;
      if (name === "depositAmount")
        setRegisterForm({
          ...registerForm,
          [name]: Number(value),
        });
      else
        setRegisterForm({
          ...registerForm,
          [name]: value,
        });
    }
  };

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    nav(-1);
    // postProgramRegister(Number(id), {
    //   ...registerForm,
    //   depositAmount: `${registerForm.depositAmount!.toLocaleString()}원`,
    //   depositDate: String(registerForm.depositDate),
    // })
    //   .then(res => nav(-1))
    //   .catch(err => console.log(err));
  };

  return (
    <form
      className="w-full flex flex-col items-center"
      onSubmit={onSubmit}
      noValidate
    >
      <div className="w-full flex justify-end pt-[16px] pb-[40px]">
        <div className="font-bold text-sm text-mainBlue">
          * 반드시 입금 후 작성해주세요!
        </div>
      </div>
      <div className="w-full grid grid-cols-[1fr_3fr] gap-y-[63px] mobile:grid-cols-[1fr] mobile:gap-y-[20px]">
        {eventRegisterData.map((section: EventRegisterDataType) => (
          <React.Fragment key={section.title}>
            <div className="font-bold text-md text-black flex mobile:text-[18px]">
              {section.title}
              <div className="font-bold text-sm text-mainBlue ml-[3px]">*</div>
            </div>
            <div className="grid grid-cols-[90px_1fr] gap-y-[12px] mobile:mb-[50px]">
              {section.input.map(el => (
                <React.Fragment key={el.key}>
                  <div className="h-[35px] flex items-center font-bold text-md text-slateBlack">
                    {el.text}
                  </div>
                  {el.key === "depositDate" ? (
                    <DateTimePicker
                      label="입금하신 날짜와 시간을 입력해주세요."
                      value={registerForm.depositDate}
                      onChange={newValue =>
                        newValue &&
                        setRegisterForm({
                          ...registerForm,
                          depositDate: new Date(newValue).toISOString(),
                        })
                      }
                      ampm={false}
                      viewRenderers={{
                        hours: null,
                        minutes: null,
                        seconds: null,
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": {
                            borderColor: "#e1e1e1",
                          },
                          "&:hover > fieldset": {
                            borderColor: "#e1e1e1",
                          },
                        },
                        "& .Mui-focused": {
                          "& > fieldset": {
                            borderColor: "#185ADB",
                            boxShadow:
                              "0.2px 0.2px 1px 1px rgba(24, 90, 219, 0.2)",
                          },
                          "&:hover > fieldset": {
                            borderColor: "#185ADB",
                          },
                        },
                      }}
                    />
                  ) : (
                    <input
                      placeholder={el.placeholder}
                      value={
                        registerForm[el.key as keyof EventRegisterFormType]
                          ? String(
                              registerForm[
                                el.key as keyof EventRegisterFormType
                              ],
                            )
                          : ""
                      }
                      name={el.key}
                      onChange={onChange}
                      autoComplete="off"
                      type={
                        el.key === "depositAmount"
                          ? "number"
                          : el.key === "registrantPhone" ||
                            el.key === "refundAccount"
                          ? "tel"
                          : "text"
                      }
                      pattern={
                        el.key === "registrantPhone"
                          ? "[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}"
                          : el.key === "depositAmount" ||
                            el.key === "refundAccount"
                          ? "[0-9]+"
                          : undefined
                      }
                      maxLength={el.key === "registrantPhone" ? 13 : 30}
                      className="h-[35px] px-[12px] border-[1px] border-lightGray rounded-[6px] outline-none font-regular text-p text-black focus:border-mainBlue focus:shadow-[0.2px_0.2px_1px_1px] focus:shadow-mainBlue/20 focus:invalid:shadow-warningRed/20 invalid:border-warningRed focus:invalid:border-warningRed invalid:animate-[customShake_0.3s_2]"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center mt-[60px] mobile:w-full mobile:ml-[10px]">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="cursor-pointer mr-[10px] w-[20px] h-[20px] mobile:mr-[16px] mobile:w-[30px] mobile:h-[30px]"
        />
        <label
          onClick={() => setIsChecked(!isChecked)}
          className="flex font-regular text-p text-slateBlack break-keep mobile:flex-col"
        >
          입금 후에만 신청이 가능합니다.&nbsp;
          <div>
            입금 및 신청 정보를 정확히 입력했는지 확인 후 신청 부탁드립니다!
          </div>
        </label>
      </div>
      <button
        type="submit"
        disabled={!(isValid && isChecked)}
        className="w-[500px] mobile:w-full p-[20px] rounded-[12px] bg-mainBlue disabled:bg-darkGray font-bold text-md text-white mt-[60px] mb-[160px]"
      >
        신청하기
      </button>
    </form>
  );
};

export default FormSection;

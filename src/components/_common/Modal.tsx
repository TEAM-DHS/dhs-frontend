import { MouseEventHandler, useEffect } from "react";

type ModalProps = {
  children: any;
  isOpen: boolean;
  closer: MouseEventHandler<HTMLDivElement | SVGSVGElement>;
};

const Modal = ({ children, isOpen, closer }: ModalProps) => {
  useEffect(() => {
    document.body.style.cssText = `
              position: fixed;
              top: -${window.scrollY}px;
              overflow-y: scroll;
              width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  return (
    <>
      {isOpen ? (
        <div className="fixed w-full h-full z-[999] top-0 left-0 flex flex-col justify-center items-center bg-transparent">
          <div
            className="fixed w-full h-full bg-black/40 animate-[modalBgShow_0.3s]"
            onClick={closer}
          />
          <div className="relative flex flex-col w-[700px] mobile:w-[calc(100%-68px)] bg-white rounded-[6px] p-[50px] animate-[modalBlockShow_0.3s]">
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;

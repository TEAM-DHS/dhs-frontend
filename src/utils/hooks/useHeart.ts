import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postHeart, deleteHeart } from "../../api/heart";
import { useRecoilValue } from "recoil";
import { isLoginState } from "../../services/store/auth";

const useHeart = (programId: number, hasLiked: boolean) => {
  const nav = useNavigate();
  const isLogin = useRecoilValue(isLoginState);

  const [state, setState] = useState<boolean>(hasLiked);
  const [trigger, setTrigger] = useState<number>(0);
  const [id, setId] = useState<number>(0);
  useEffect(() => {
    setState(hasLiked);
    setId(programId);
  }, [hasLiked]);

  const toggle = () => setTrigger(trigger + 1);
  useEffect(() => {
    if (typeof hasLiked !== "boolean") return;
    if (trigger === 0) return;
    if (isLogin) {
      if (state) {
        deleteHeart(id)
          .then(res => {
            console.log(res.data);
            setState(!state);
          })
          .catch(err => console.log(err));
      } else {
        postHeart(id)
          .then(res => {
            console.log(res.data);
            setState(!state);
          })
          .catch(err => console.log(err));
      }
    } else {
      alert("로그인 후 사용하실 수 있습니다.");
      nav("/login");
    }
  }, [trigger]);

  return { state, toggle };
};

export default useHeart;

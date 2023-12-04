import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProgramDetail } from "../../api/program";
import { postHeart } from "../../api/heart";
import { useRecoilValue } from "recoil";
import { isLoginState } from "../../services/store/auth";

const useHeart = (programId: number, hasLiked: boolean, likeNumber: number) => {
  const nav = useNavigate();
  const isLogin = useRecoilValue(isLoginState);

  const [state, setState] = useState<boolean>(hasLiked);
  const [likedNum, setLikedNum] = useState<number>(likeNumber);
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
    if (state && likeNumber > 0) {
      setState(false);
      setLikedNum(likedNum - 1);
    } else if (state === false) {
      setState(true);
      setLikedNum(likedNum + 1);
    }
    // if (isLogin) {
    //   postHeart(id)
    //     .then(res => {
    //       setState(!state);
    //       getProgramDetail(id)
    //         .then(res => setLikedNum(res.program.likeNumber))
    //         .catch(err => console.log(err));
    //     })
    //     .catch(err => console.log(err));
    // } else {
    //   alert("로그인 후 사용하실 수 있습니다.");
    //   nav("/login");
    // }
  }, [trigger]);

  return { state, toggle, likedNum };
};

export default useHeart;

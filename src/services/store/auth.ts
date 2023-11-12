import { atom } from "recoil";

export const accessTokenState = atom<string>({
  key: "accessTokenState",
  default: localStorage.getItem("accessToken") || "",
});

export const isLoginState = atom<boolean>({
  key: "isLoginState",
  default: !!localStorage.getItem("accessToken"),
});

export const memberInfoState = atom<any>({
  key: "memberInfoState",
  default: {},
});
import { atom } from "recoil";

export const accessTokenState = atom<string>({
  key: "accessTokenState",
  default: localStorage.getItem("authtoken") || "",
});

export const isLoginState = atom<boolean>({
  key: "isLoginState",
  // default: !!localStorage.getItem("authtoken"),
  default: true,
});

export const memberInfoState = atom<any>({
  key: "memberInfoState",
  default: {},
});

import client from "./client";

// 회원가입
export const postSignup = async userInfo => {
  try {
    const res = await client.post("/auth/signup", userInfo);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

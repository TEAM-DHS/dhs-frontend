import client from "./client";

// get heart
export const getHeart = async () => {
  try {
    const res = await client.get("/hearts");
    return res.data;
  } catch (err) {
    throw err;
  }
};

// post heart
export const postHeart = async (programId: number) => {
  try {
    const res = await client.post("/hearts", { programId: programId });
    return res.data;
  } catch (err) {
    throw err;
  }
};

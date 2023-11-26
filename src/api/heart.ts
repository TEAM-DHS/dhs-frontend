import apiClient from ".";

// get heart
export const getHeart = async () => {
  try {
    const res = await apiClient.get("/hearts");
    return res.data;
  } catch (err) {
    throw err;
  }
};

// post heart
export const postHeart = async (programId: number) => {
  try {
    const res = await apiClient.post("/hearts", { programId: programId });
    return res.data;
  } catch (err) {
    throw err;
  }
};

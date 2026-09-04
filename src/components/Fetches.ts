export const fetchPost = {
  async postUserData(userData: any) {
    const response = await fetch(
      "https://gamernetwork-production.up.railway.app/api/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      },
    );

    const data = await response.json();
    return data;
  },
};

export const fetchGet = {
  async getUsers() {
    const res = await fetch(
      `https://gamernetwork-production.up.railway.app/api/users`,
    );
    return res.json();
  },
};

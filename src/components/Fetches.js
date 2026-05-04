export const fetchPost = {
  async postUserData(userData) {
    const response = await fetch(
      "https://chuck-explorer-examinations-sites.trycloudflare.com/api/users",
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

import GoTrue from "gotrue-js";

export default new GoTrue({
  APIUrl: "https://soulstore.netlify.app/.netlify/identity",
  setCookie: false,
});
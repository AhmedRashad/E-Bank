import Cookie from "js-cookie";

const RemoveCookie = (cookiename) => {
  return Cookie.remove(cookiename);
};

export default RemoveCookie;

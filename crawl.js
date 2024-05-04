export const normalizeURL = (url) => {
  try {
    const urlObj = new URL(url);
    let path;
    if (urlObj.pathname.endsWith("/")) {
      path = urlObj.pathname.slice(0, -1);
    } else {
      path = urlObj.pathname;
    }
    return `${urlObj.host}${path}`;
  } catch (error) {
    return "invalid url";
  }
};

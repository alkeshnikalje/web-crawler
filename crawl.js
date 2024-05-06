import jsdom from "jsdom";
const { JSDOM } = jsdom;

const normalizeURL = (url) => {
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

const getURLsFromHTML = (htmlBody, baseURL) => {
  const dom = new JSDOM(htmlBody);
  const anchorElements = dom.window.document.querySelectorAll("a");
  let fullUrls = [];
  for (let i = 0; i < anchorElements.length; i++) {
    if (anchorElements[i].hasAttribute("href")) {
      const url = anchorElements[i].getAttribute("href");
      const fullUrl = new URL(url, baseURL).href;
      fullUrls.push(fullUrl);
    }
  }
  return fullUrls;
};

const crawlPage = async (URL) => {
  try {
    const response = await fetch(URL);
    if (response.status >= 400) {
      console.log(`Got HTTP error: ${response.status} ${response.statusText}`);
      return;
    }
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("text/html")) {
      console.log(`Got non-HTML response: ${contentType}`);
      return;
    }
    const html = await response.text();
    console.log(html);
  } catch (error) {
    throw new Error(`Got Network error: ${error.message}`);
  }
};

export { normalizeURL, getURLsFromHTML, crawlPage };

import { test, expect } from "@jest/globals";
import { normalizeURL, getURLsFromHTML } from "./crawl";
test("normalizes a url to a single output string", () => {
  expect(normalizeURL("https://blog.boot.dev/path/")).toBe(
    "blog.boot.dev/path"
  );
});

// tests for normalizeURL function
test("normalizes a url to a single output string", () => {
  expect(normalizeURL("https://google.com/path")).toBe("google.com/path");
});

test("normalizes a url to a single output string", () => {
  expect(normalizeURL("/google.com/path")).toBe("invalid url");
});

test("normalizes a url to a single output string", () => {
  expect(normalizeURL("http://blog.boot.dev/path/")).toBe("blog.boot.dev/path");
});

test("normalizes a url to a single output string", () => {
  expect(normalizeURL("https://BLOG.BOOT.DEV/path/")).toBe(
    "blog.boot.dev/path"
  );
});

// tests for getURLsFromHTML function
test("getURLsFromHTML absolute", () => {
  const inputURL = "https://blog.boot.dev";
  const inputBody =
    '<html><body><a href="https://blog.boot.dev"><span>Boot.dev></span></a></body></html>';
  const actual = getURLsFromHTML(inputBody, inputURL);
  const expected = ["https://blog.boot.dev/"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML relative", () => {
  const inputURL = "https://blog.boot.dev";
  const inputBody =
    '<html><body><a href="/path/one"><span>Boot.dev></span></a></body></html>';
  const actual = getURLsFromHTML(inputBody, inputURL);
  const expected = ["https://blog.boot.dev/path/one"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML both", () => {
  const inputURL = "https://blog.boot.dev";
  const inputBody =
    '<html><body><a href="/path/one"><span>Boot.dev></span></a><a href="https://other.com/path/one"><span>Boot.dev></span></a></body></html>';
  const actual = getURLsFromHTML(inputBody, inputURL);
  const expected = [
    "https://blog.boot.dev/path/one",
    "https://other.com/path/one",
  ];
  expect(actual).toEqual(expected);
});

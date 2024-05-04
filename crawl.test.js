import { test, expect } from "@jest/globals";
import { normalizeURL } from "./crawl";

test("normalizes a url to a single output string", () => {
  expect(normalizeURL("https://blog.boot.dev/path/")).toBe(
    "blog.boot.dev/path"
  );
});

test("normalizes a url to a single output string", () => {
  expect(normalizeURL("https://google.com/path")).toBe("google.com/path");
});

test("normalizes a url to a single output string", () => {
  expect(normalizeURL("/google.com/path")).toBe("invalid url");
});

test("normalizes a url to a single output string", () => {
  expect(normalizeURL("http://blog.boot.dev/path/")).toBe("blog.boot.dev/path");
});

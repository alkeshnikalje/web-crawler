import { crawlPage } from "./crawl.js";
import { printReport } from "./report.js";

const main = async () => {
  if (process.argv.length < 3) {
    console.log("no website url provided");
    return;
  }
  if (process.argv.length > 3) {
    console.log("too many website urls provided");
    return;
  }
  const baseURL = process.argv[2];

  console.log(`starting crawl of: ${baseURL}...`);
  const pages = await crawlPage(baseURL);
  printReport(pages);
};

main();

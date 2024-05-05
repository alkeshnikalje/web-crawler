const main = () => {
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
};

main();

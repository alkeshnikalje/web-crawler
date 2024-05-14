const printReport = (pages) => {
  console.log("the report is starting..");
  const sortedPages = Object.fromEntries(
    Object.entries(pages).sort(([, a], [, b]) => b - a)
  );
  for (let page in pages) {
    console.log(`Found ${pages[page]} internal links to ${page}`);
  }
};

export { printReport };

const puppeteer = require("puppeteer");
(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto("/addUser.html");
    await page.click("#addUser");

    await page.goto("/data.html");
    await page.click("#showAllData");

    await page.waitForSelector("#status:not(:empty)");

    let status = await page.$("#status");
    console.log(await status.evaluate((node) => node.innerHTML));

    await page.goto("/allUsers.html");
    await page.click("#showAllData");
    await page.waitForSelector("#status:not(:empty)");
    await page.screenshot({ path: "screen.png" });

    browser.close();
  } catch (e) {
    console.log(e);
  }
})();

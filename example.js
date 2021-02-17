const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(
		'https://www.google.com/search?q=hour+now&oq=hour+now&aqs=chrome..69i57j0i22i30l9.1149j0j7&sourceid=chrome&ie=UTF-8'
	);
	await page.screenshot({ path: 'example.png' });

	await browser.close();
})();

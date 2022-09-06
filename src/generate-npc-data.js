const puppeteer = require('puppeteer');
const WEBSITE_URL = 'http://www.npcgenerator.com/';
const fs = require('fs');

const removeEscapeCharacter = (str) => {
    // Remove the trailing \n from a string if it exists
    if (str.endsWith('\n')) {
        return str.slice(0, -1);
    }
    return str;
}

async function main() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(WEBSITE_URL);

    // Get the NPC data from the page
    const description = await page.$$eval('div.npc-data > *', values => { return values.filter(value => value.innerText !== "#").map(value => value.innerText)})
    const noEscapeDescription = noEscapeDescription.map(string => removeEscapeCharacter(string));
    console.log(noEscapeDescription)
    // Put the NPC data into a file
    fs.writeFileSync('./npc-data.txt', noEscapeDescription.join('\n'));
    await browser.close();
}

main();
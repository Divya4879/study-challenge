export async function scrapeMDN(topic: string) {
    const response = await fetch('https://api.brightdata.com/scrape', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
      },
      body: JSON.stringify({
        url: `https://developer.mozilla.org/en-US/docs/Web/${topic}`,
        // Add specific scraping rules based on MDN's structure
      }),
    });
  
    return response.json();
  }
  
  export async function scrapeJavaScriptInfo(topic: string) {
    const response = await fetch('https://api.brightdata.com/scrape', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
      },
      body: JSON.stringify({
        url: `https://javascript.info/${topic}`,
        // Add specific scraping rules based on JavaScript.info's structure
      }),
    });
  
    return response.json();
  }
  
  
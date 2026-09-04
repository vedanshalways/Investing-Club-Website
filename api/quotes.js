import YahooFinance from 'yahoo-finance2'

const yahooFinance = new YahooFinance({ suppressNotices: ['yahooSurvey'] })

const SYMBOLS = [
  'SPY', 'QQQ', 'AAPL', 'MSFT', 'NVDA', 'GOOGL', 'AMZN', 'META', 'TSLA',
  'COST', 'V', 'JPM', 'DIS', 'COIN', 'AMD', 'NFLX', 'UBER', 'GLD', 'BTC-USD',
]

export default async function handler(req, res) {
  try {
    const quotes = await yahooFinance.quote(SYMBOLS)
    const list = Array.isArray(quotes) ? quotes : [quotes]
    const results = list
      .filter((q) => typeof q.regularMarketPrice === 'number')
      .map((q) => ({
        symbol: q.symbol,
        price: q.regularMarketPrice,
        changePercent: q.regularMarketChangePercent ?? 0,
      }))

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120')
    res.status(200).json({ results })
  } catch {
    res.status(502).json({ error: 'quote_fetch_failed' })
  }
}

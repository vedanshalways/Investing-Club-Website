import kavinPhoto from '../assets/members/kavin.jpg'
import yuviPhoto from '../assets/members/yuvi.jpeg'
import vedanshPhoto from '../assets/members/vedansh.jpg'
import willPhoto from '../assets/members/will.jpeg'
import trepanierPhoto from '../assets/members/mr-trepanier.jpg'

export const stats = [
  { n: 31, suffix: '', label: 'Members', count: true },
  { n: 2025, suffix: '', label: 'Founded', count: true },
]

export const staticBand = [
  'Research',
  'Debate',
  'Invest',
  'Repeat',
  'Paper trading on Quantaify',
  'Club portfolio',
]

export const aboutCards = [
  {
    num: '/ 01',
    title: 'EC3 meetings',
    text: "Every EC3. Market recap, stock pitches from members, and strategy discussion. Open to all grades, no experience required.",
  },
  {
    num: '/ 02',
    title: 'Paper trading comp',
    text: "Every member gets a $10,000 virtual portfolio on Quantaify. Top three returns at end of semester take home prizes from the club fund.",
  },
  {
    num: '/ 03',
    title: 'Group portfolio',
    text: 'We manage a collaborative long-only portfolio. Members pitch, the club votes, officers execute. Every trade is logged and reviewed the following meeting.',
  },
]

export const resources = [
  {
    tag: 'TRADING',
    title: 'Quantaify.org',
    text: 'Our official paper trading platform. Sign up with your school email to join the club competition and track your virtual portfolio.',
    link: 'quantaify.org',
    href: 'https://quantaify.org',
  },
  {
    tag: 'LEARNING',
    title: 'Perplexity Finance',
    text: 'AI-powered research for company snapshots, earnings, and financials. Ask a question and get sourced, up-to-date answers instead of digging through filings yourself.',
    link: 'perplexity.ai/finance',
    href: 'https://www.perplexity.ai/finance',
  },
  {
    tag: 'NEWS',
    title: 'Yahoo Finance',
    text: "Free real-time quotes, charts, news, and earnings calendars. Build a watchlist of stocks you're researching before your pitch.",
    link: 'finance.yahoo.com',
    href: 'https://finance.yahoo.com',
  },
  {
    tag: 'CHARTING',
    title: 'TradingView',
    text: 'Free interactive charts with technical indicators, drawing tools, and price alerts. The standard for spotting trends before you pitch a stock.',
    link: 'tradingview.com',
    href: 'https://www.tradingview.com',
  },
  {
    tag: 'SCREENER',
    title: 'Finviz',
    text: 'A visual stock screener and market heatmap. Filter by sector, valuation, or performance to find candidates worth researching further.',
    link: 'finviz.com',
    href: 'https://finviz.com',
  },
  {
    tag: 'MACRO DATA',
    title: 'FRED',
    text: 'Federal Reserve Economic Data: interest rates, inflation, unemployment, and GDP, straight from the source. Essential for the macro unit.',
    link: 'fred.stlouisfed.org',
    href: 'https://fred.stlouisfed.org',
  },
]

export const members = [
  { role: 'PRESIDENT', name: 'Kavin', grade: "JUNIOR · JOINED '25", photo: kavinPhoto, advisor: false },
  { role: 'VICE PRESIDENT', name: 'Yuvi', grade: "JUNIOR · JOINED '25", photo: yuviPhoto, advisor: false },
  { role: 'TREASURER', name: 'Vedansh', grade: "JUNIOR · JOINED '25", photo: vedanshPhoto, advisor: false },
  { role: 'SECRETARY', name: 'Will', grade: "JUNIOR · JOINED '25", photo: willPhoto, advisor: false },
  { role: 'ADVISOR', name: 'Mr. Trepanier', grade: 'FACULTY · ADVISOR / SPEAKER', photo: trepanierPhoto, advisor: true },
]

export const joinSteps = [
  { num: '01', text: 'Stop by an EC3 meeting. No sign-up needed, just show up.' },
  { num: '02', text: 'Create your account on Quantaify and claim your $10,000 paper portfolio.' },
  { num: '03', text: "Bring a stock idea to pitch, even a rough one. That's how everyone starts." },
]

export const tickerFallback = [
  ['S&P 500', '5,308.13', '+0.42'],
  ['NASDAQ', '18,737.21', '+0.98'],
  ['AAPL', '201.36', '-0.61'],
  ['MSFT', '458.87', '+1.24'],
  ['NVDA', '131.38', '+4.89'],
  ['GOOGL', '175.08', '+0.33'],
  ['AMZN', '213.22', '+0.77'],
  ['META', '640.12', '+1.52'],
  ['TSLA', '339.44', '+2.18'],
  ['COST', '1,012.88', '-0.22'],
  ['V', '352.90', '+0.44'],
  ['JPM', '269.44', '+0.66'],
  ['DIS', '99.14', '-0.88'],
  ['COIN', '263.18', '+3.44'],
  ['AMD', '119.92', '+1.22'],
  ['NFLX', '1,232.55', '+0.71'],
  ['UBER', '88.44', '+0.55'],
  ['GOLD', '3,312.40', '+0.38'],
  ['BTC', '106,842', '+1.94'],
]

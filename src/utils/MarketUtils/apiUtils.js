export async function fetchData() {
    await new Promise(resolve=> setTimeout(resolve,3000))
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false")

    return res.json()
}
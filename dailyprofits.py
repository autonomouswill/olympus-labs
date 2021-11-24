import re
from coinmarketcapapi import CoinMarketCapAPI

cmc = CoinMarketCapAPI('9bf3ebd3-65a1-4e38-8723-5acbf4db56b3')


def dailyProfits():
    cmc_data = cmc.cryptocurrency_info(symbol='OHM')
    currentPrice = float(re.findall(r"\d*\.\d* USD", cmc_data.data['OHM']['description'])[0].split(' ')[0])
    return {'result': f"{currentPrice}"}

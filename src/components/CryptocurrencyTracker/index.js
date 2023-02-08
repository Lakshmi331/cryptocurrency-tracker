import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrencies()
  }

  getCryptocurrencies = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()

    const updatedData = data.map(eachCryptocurrency => ({
      id: eachCryptocurrency.id,
      currencyLogoUrl: eachCryptocurrency.currency_logo,
      currencyName: eachCryptocurrency.currency_name,
      usdValue: eachCryptocurrency.usd_value,
      euroValue: eachCryptocurrency.euro_value,
    }))
    this.setState({cryptocurrenciesData: updatedData, isLoading: false})
  }

  renderCryptocurrenciesList = () => {
    const {cryptocurrenciesData} = this.state

    return <CryptocurrencyList cryptocurrenciesData={cryptocurrenciesData} />
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker

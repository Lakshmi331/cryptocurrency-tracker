import './index.css'

const CryptocurrencyItem = props => {
  const {eachCryptocurrencyDetails} = props
  const {
    currencyLogoUrl,
    currencyName,
    usdValue,
    euroValue,
  } = eachCryptocurrencyDetails

  return (
    <li className="cryptocurrency-container">
      <div className="logo-and-title-container">
        <img
          src={currencyLogoUrl}
          alt={currencyName}
          className="currency-logo"
        />
        <p className="currency-name">{currencyName}</p>
        <div className="usd-and-euro-values-container">
          <p className="currency-value">{usdValue}</p>
          <p className="currency-value">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

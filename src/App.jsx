import { useState } from 'react'
import Input from './Components/Input'
import useCurrencyinfo from './hooks/useCurrencyinfo'

// import './App.css'

function App() {
  const [amount, setAmount] = useState()
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState('inr')
  const [convertedAmount, setconvertedAmount] = useState(0)

  const currencyinfo = useCurrencyinfo(from)
  const options = Object.keys(currencyinfo)

  const swap = ()=>{
    setfrom(to)
    setto(from)
    setconvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert =() =>{
    setconvertedAmount(amount * currencyinfo[to])

  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url("src/Components/pexels-itzel-zarate-1170413563-22858523.jpg")`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <Input
                            label="From"
                            amount = {amount}
                            currencyOption = {options}
                            onCurrencyChange ={(currency)=>
                              setAmount(amount)
                            }
                            selectCurrency = {from}
                            onAmountChange={(amount)=>setAmount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                    <Input
                            label="to"
                            amount = {convertedAmount}
                            currencyOption = {options}
                            onCurrencyChange ={(currency)=>
                              setto(currency)
                            }
                            selectCurrency = {from}
                            amountDisable
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert ({from.toUpperCase()} to {to.toLowerCase()})
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App

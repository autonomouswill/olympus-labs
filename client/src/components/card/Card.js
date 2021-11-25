import React from 'react';

function Card(props) {
  let balance = props.value;
  const renderProfit = () => {
    return (
      <>
        <div class="flex-grow flex px-6 py-6 text-neutral items-center">
          <div class="flex-1 border-b mx-40 py-6">
            <span class="text-8xl">${balance.toFixed(2).toString()}</span>
          </div>
        </div>
        <div class="px-6 py-2">
          <div class="text-center text-neutral">
            Projected Earnings based on current rates.
          </div>
          <div class="text-center text-neutral">
            Not Financial Advice.
          </div>
        </div>
      </>
    )
  }

  const renderConnectWallet = () => {
    return (
      <div class="px-6 py-2">
        <div class="text-center text-black bg-white">
          Connect the wallet you used to stake OHM to see your rewards.
        </div>
      </div>
    )
  }

  const timeNavBar = () => {
    return (
      <div class="navbar mb-2 border-b bg-white text-neutral rounded-box">
        <div class="px-2 mx-2 navbar-start">
          <span class="text-lg font-bold">
            Estimated Profit
          </span>
        </div> 
        <div class="hidden px-2 mx-2 navbar-center lg:flex">
          <div class="flex items-stretch">
            <button class="btn btn-ghost btn-sm rounded-btn" onClick={balance = Number(props.value)*1.00}>
              Daily
            </button> 
            <button class="btn btn-ghost btn-sm rounded-btn" onClick={balance = Number(props.value)*7.00}>
              Weekly
            </button> 
            <button class="btn btn-ghost btn-sm rounded-btn" onClick={balance = Number(props.value)*30.00}>
              Monthly
            </button> 
            <button class="btn btn-ghost btn-sm rounded-btn" onClick={balance = Number(props.value)*365.00}>
              Yearly
            </button>
          </div>
        </div> 
      </div>
    )
  }

  return (
    <div class="flex flex-wrap justify-center h-3/4 -mr-40">
      <div class="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
        <div class="flex-grow flex flex-col bg-white opacity-80 border-t border-b md:rounded sm:border shadow overflow-hidden">
          {timeNavBar()}
          {renderProfit()}
          <div class="flex-grow flex px-6 py-10"/>
          <div class="flex-grow flex px-6 py-5"/>
        </div>
      </div>
    </div>
  )
}

export default Card;
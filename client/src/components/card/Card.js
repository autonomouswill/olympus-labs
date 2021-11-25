import React from 'react';

function Card(props) {

  const renderProfit = () => {
    return (
      <>
        <div class="flex-grow flex px-6 py-6 text-grey-darker items-center">
          <div class="flex-1 border-b mx-40 py-6">
            <span class="text-8xl">${(Number(props.value).toFixed(2)).toString()}</span>
          </div>
        </div>
        <div class="px-6 py-2">
          <div class="text-center text-grey">
            Earning per day
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

  return (
    <div class="flex flex-wrap justify-center h-3/4 -mr-40">
    <div class="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
      <div class="flex-grow flex flex-col bg-white opacity-80 border-t border-b md:rounded sm:border shadow overflow-hidden">
        <div class="border-b">
          <div class="flex justify-between px-6 -mb-px">
            <h3 class="text-blue-dark py-4 font-normal text-xl text-bold">Daily Income</h3>
          </div>
        </div>
        <div class="flex-grow flex-1 px-6 py-6 text-grey-darker items-center -mx-4">
        </div>
        {renderProfit()}
        <div class="flex-grow flex px-6 py-10"/>
        <div class="flex-grow flex px-6 py-5"/>
      </div>
    </div>
    </div>
  )
}

export default Card;
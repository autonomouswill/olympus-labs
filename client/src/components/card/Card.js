function Card(props) {
  return (
    <div class="flex flex-wrap justify-center py-6">
    <div class="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
      <div class="flex-grow flex flex-col bg-white border-t border-b md:rounded sm:border shadow overflow-hidden">
        <div class="border-b">
          <div class="flex justify-between px-6 -mb-px">
            <h3 class="text-blue-dark py-4 font-normal text-xl text-bold">Daily Income</h3>
          </div>
        </div>
        <div class="flex-grow flex-1 px-6 py-6 text-grey-darker items-center -mx-4">
          <button type="button" class="appearance-none text-blue-dark border-b border-blue-dark mr-10">
              Daily
          </button>
          <button type="button" class="appearance-none text-grey-dark border-b border-transparent mr-10">
              Weekly
          </button>
          <button type="button" class="appearance-none text-grey-dark border-b border-transparent mr-10">
              Monthly
          </button>
          <button type="button" class="appearance-none text-grey-dark border-b border-transparent">
              All
          </button>
        </div>
        <div class="flex-grow flex px-6 py-6 text-grey-darker items-center">
          <div class="flex-1 border-b mx-40 py-6">
            <span class="text-8xl">${props.value}</span>
            {/* <span class="text-6xl">.73</span> */}
          </div>
        </div>
        <div class="px-6 py-2">
          <div class="text-center text-grey">
            Earning per day
          </div>
        </div>
        <div class="flex-grow flex px-6 py-10"/>
        <div class="flex-grow flex px-6 py-5"/>
      </div>
    </div>
    </div>
  )
}

export default Card;
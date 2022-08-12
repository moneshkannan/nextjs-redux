import type { NextPage } from 'next'
import Head from 'next/head'
import {useDispatch, useSelector} from 'react-redux'
import {increment,decrement} from '../slices/counterSlice'
import type {RootState} from '../store'

const Home: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1> the value of counter is {count}</h1>
        <button 
        className="w-full h-10 bg-green-400/50"
        onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button 
        className="w-full h-10 bg-red-400/50"
        onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
      </main>
    </div>
  )
}

export default Home

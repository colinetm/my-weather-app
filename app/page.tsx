"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link"
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import CurrentWeather from './components/currentWeather'


 // Create a client
 const queryClient = new QueryClient()

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>My Weather App</h1>
     
      <QueryClientProvider client={queryClient}>
        <CurrentWeather/>
        
      </QueryClientProvider>
    </main>
  )
}

import LoginForm from '@/components/loginForm'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <LoginForm/>
    </main>
  )
}

export default Home
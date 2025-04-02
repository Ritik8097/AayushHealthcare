import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
      <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    <p class="text-base font-semibold " style={{ color: "#D1A272"}}>404</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
    <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
    <div class="mt-3 flex items-center justify-center gap-x-6">
        <Link to='/'>
    <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80  px-6 py-2 rounded-lg text-white" style={{background:"#d1a272"}}> Go to Home</button>
    </Link>
    </div>
  </div>
</main>
    </div>
  )
}

export default ErrorPage

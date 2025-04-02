import React from 'react'

function HeaderLoad() {
  return (
    <div>
      <nav class="bg-#fff shadow-md animate-pulse">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center h-auto">
      <div class="flex items-center">
        <div class="h-10 bg-gray-200 rounded"></div>
      </div>
      <div class="hidden md:flex space-x-4">
        <div class="w-16 h-6 bg-gray-200 rounded"></div>
        <div class="w-16 h-6 bg-gray-200 rounded"></div>
        <div class="w-16 h-6 bg-gray-200 rounded"></div>
        <div class="w-16 h-6 bg-gray-200 rounded"></div>
      </div>
      <div class="md:hidden">
        <div class="h-8 w-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
  <div id="mobile-menu" class="fixed top-0 right-0 h-full w-64 bg-primary shadow-md z-50 transform">
    <div class="absolute top-4 right-4 h-8 w-8 rounded bg-gray-200"></div>
    <div class="flex flex-col mt-16">
      <div class="block py-2 px-4 h-6 bg-gray-200 rounded"></div>
      <div class="block py-2 px-4 h-6 bg-gray-200 rounded"></div>
      <div class="block py-2 px-4 h-6 bg-gray-200 rounded"></div>
      <div class="block py-2 px-4 h-6 bg-gray-200 rounded"></div>
    </div>
  </div>
</nav>

<div class="relative animate-pulse">
  <div>
    <div class="relative">
      <div class="w-full min-h-64 bg-gray-200"></div>
      <div class="absolute top-1/4 left-0 w-full p-7">
        <div class="md:w-1/3 w-full h-8 bg-gray-400 rounded"></div>
      </div>
    </div>
    
    
    
  </div>
</div>
<section class="bg-card py-12 px-4 md:px-8 animate-pulse">
  <div class="h-8 bg-gray-200 rounded mb-8 w-1/3 mx-auto"></div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="w-full h-96 bg-gray-200"></div>
      <div class="p-4">
        <div class="h-6 bg-gray-200 rounded mb-2"></div>
        <div class="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div class="bg-gray-200 h-10 mt-4"></div>
      </div>
    </div>

    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="w-full h-96 bg-gray-200"></div>
      <div class="p-4">
        <div class="h-6 bg-gray-200 rounded mb-2"></div>
        <div class="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div class="bg-gray-200 h-10 mt-4"></div>
      </div>
    </div>

    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="w-full h-96 bg-gray-200"></div>
      <div class="p-4">
        <div class="h-6 bg-gray-200 rounded mb-2"></div>
        <div class="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div class="bg-gray-200 h-10 mt-4"></div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default HeaderLoad

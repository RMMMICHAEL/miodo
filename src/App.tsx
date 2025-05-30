import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <nav className="container mx-auto p-4">
          <h1 className="text-2xl font-bold text-gray-900">Modern Layout</h1>
        </nav>
      </header>
      
      <main className="container mx-auto p-4">
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Card 1</h2>
            <p className="text-gray-600">Responsive card with modern styling</p>
          </div>
          
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Card 2</h2>
            <p className="text-gray-600">Using Tailwind's utility classes</p>
          </div>
          
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Card 3</h2>
            <p className="text-gray-600">No pixel values needed</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
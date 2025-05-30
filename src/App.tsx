import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-indigo-50">
      <header className="bg-indigo-600 shadow">
        <nav className="container mx-auto p-6">
          <h1 className="text-2xl font-bold text-white">Modern Layout</h1>
        </nav>
      </header>
      
      <main className="container mx-auto p-6">
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-indigo-100">
            <h2 className="text-xl font-semibold mb-3 text-indigo-900">Card 1</h2>
            <p className="text-indigo-700">Responsive card with modern styling</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-indigo-100">
            <h2 className="text-xl font-semibold mb-3 text-indigo-900">Card 2</h2>
            <p className="text-indigo-700">Using Tailwind's utility classes</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-indigo-100">
            <h2 className="text-xl font-semibold mb-3 text-indigo-900">Card 3</h2>
            <p className="text-indigo-700">No pixel values needed</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
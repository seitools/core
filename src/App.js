import { Component } from 'react'

import Logo from './assets/altafino.svg'
import './app.styles.scss'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Table } from './components/Table'
import { Card } from './components/Card'
import { Pagination } from './components/Pagination'

window.addEventListener('message', function(message) { 
  console.log(message.data)
}, true);

class App extends Component {
  render() {
    return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Desktop sidebar */}

        <Sidebar></Sidebar>

        <div className="flex flex-col flex-1 w-full">

          <Header></Header>

          <main className="h-full overflow-y-auto">
            <div className="container px-6 mx-auto grid">
              <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Dashboard
              </h2>
              {/* CTA */}
              <a className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple" href="https://github.com/estevanmaito/windmill-dashboard">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                  </svg>
                  <span>Star this project on GitHub</span>
                </div>
                <span>View more →</span>
              </a>
              {/* Cards */}
              <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
              </div>
              {/* Table */}
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <Table></Table>
                </div>
                <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                  <span className="flex items-center col-span-3">
                    Showing 21-30 of 100
                  </span>
                  <span className="col-span-2" />
                  <Pagination></Pagination>
                 </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
};

export default App

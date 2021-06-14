import { Component } from 'react'

import Logo from './assets/altafino.svg'
import './app.styles.scss'

class App extends Component {
  render() {
    return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Desktop sidebar */}
        <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
          <div className="py-4 text-gray-500 dark:text-gray-400">
            <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
              SEI
              <span className="text-sm">Controle de Processos</span>
            </a>
            <ul className="mt-6">
              <li className="relative px-6 py-3">
                <span className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg" aria-hidden="true" />
                <a className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100" href="index.html">
                  <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                    </path>
                  </svg>
                  <span className="ml-4" />
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="flex flex-col flex-1 w-full">
          <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
            <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
              {/* Mobile hamburger */}
              <button className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple" aria-label="Menu">
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              {/* Search input */}
              <div className="flex justify-center flex-1 lg:mr-32">
                <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                  <div className="absolute inset-y-0 flex items-center pl-2">
                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input className="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Search for projects" aria-label="Search" />
                </div>
              </div>
              <ul className="flex items-center flex-shrink-0 space-x-6">
                {/* Theme toggler */}
                <li className="flex">
                  <button className="rounded-md focus:outline-none focus:shadow-outline-purple" aria-label="Toggle color mode">
                  </button>
                </li>
                {/* Notifications menu */}
                <li className="relative">
                  <button className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple" aria-label="Notifications" aria-haspopup="true">
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
                      </path>
                    </svg>
                    {/* Notification badge */}
                    <span aria-hidden="true" className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800" />
                  </button>
                  <template />
                </li>
                {/* Profile menu */}
                <li className="relative">
                  <button className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none" aria-label="Account" aria-haspopup="true">
                  </button>
                  <template />
                </li>
              </ul>
            </div>
          </header>
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
                {/* Card */}
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                  <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Total clients
                    </p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      6389
                    </p>
                  </div>
                </div>
                {/* Card */}
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                  <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Account balance
                    </p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      $ 46,760.89
                    </p>
                  </div>
                </div>
                {/* Card */}
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                  <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      New sales
                    </p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      376
                    </p>
                  </div>
                </div>
                {/* Card */}
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                  <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Pending contacts
                    </p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      35
                    </p>
                  </div>
                </div>
              </div>
              {/* New Table */}
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full whitespace-no-wrap">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                        <th className="px-4 py-3">Client</th>
                        <th className="px-4 py-3">Amount</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            {/* Avatar with inset shadow */}
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                            </div>
                            <div>
                              <p className="font-semibold">Hans Burger</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                10x Developer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          $ 863.45
                        </td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Approved
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          6/10/2020
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            {/* Avatar with inset shadow */}
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                            </div>
                            <div>
                              <p className="font-semibold">Jolina Angelie</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Unemployed
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          $ 369.95
                        </td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                            Pending
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          6/10/2020
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            {/* Avatar with inset shadow */}
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                            </div>
                            <div>
                              <p className="font-semibold">Sarah Curry</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Designer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          $ 86.00
                        </td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                            Denied
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          6/10/2020
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            {/* Avatar with inset shadow */}
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                            </div>
                            <div>
                              <p className="font-semibold">Rulia Joberts</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Actress
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          $ 1276.45
                        </td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Approved
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          6/10/2020
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            {/* Avatar with inset shadow */}
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                            </div>
                            <div>
                              <p className="font-semibold">Wenzel Dashington</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Actor
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          $ 863.45
                        </td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700">
                            Expired
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          6/10/2020
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            {/* Avatar with inset shadow */}
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                            </div>
                            <div>
                              <p className="font-semibold">Dave Li</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Influencer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          $ 863.45
                        </td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Approved
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          6/10/2020
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            {/* Avatar with inset shadow */}
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                            </div>
                            <div>
                              <p className="font-semibold">Maria Ramovic</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Runner
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          $ 863.45
                        </td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Approved
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          6/10/2020
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            {/* Avatar with inset shadow */}
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                            </div>
                            <div>
                              <p className="font-semibold">Hitney Wouston</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Singer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          $ 863.45
                        </td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Approved
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          6/10/2020
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            {/* Avatar with inset shadow */}
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                            </div>
                            <div>
                              <p className="font-semibold">Hans Burger</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                10x Developer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          $ 863.45
                        </td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Approved
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          6/10/2020
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                  <span className="flex items-center col-span-3">
                    Showing 21-30 of 100
                  </span>
                  <span className="col-span-2" />
                  {/* Pagination */}
                  <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                    <nav aria-label="Table navigation">
                      <ul className="inline-flex items-center">
                        <li>
                          <button className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                            <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd" />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                            1
                          </button>
                        </li>
                        <li>
                          <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                            2
                          </button>
                        </li>
                        <li>
                          <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                            3
                          </button>
                        </li>
                        <li>
                          <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                            4
                          </button>
                        </li>
                        <li>
                          <span className="px-3 py-1">...</span>
                        </li>
                        <li>
                          <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                            8
                          </button>
                        </li>
                        <li>
                          <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                            9
                          </button>
                        </li>
                        <li>
                          <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
                            <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd" />
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </span>
                </div>
              </div>
              {/* Charts */}
              <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Charts
              </h2>
              <div className="grid gap-6 mb-8 md:grid-cols-2">
                <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                  <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                    Revenue
                  </h4>
                  <canvas id="pie" />
                  <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
                    {/* Chart legend */}
                    <div className="flex items-center">
                      <span className="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full" />
                      <span>Shirts</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full" />
                      <span>Shoes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full" />
                      <span>Bags</span>
                    </div>
                  </div>
                </div>
                <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                  <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                    Traffic
                  </h4>
                  <canvas id="line" />
                  <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
                    {/* Chart legend */}
                    <div className="flex items-center">
                      <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full" />
                      <span>Organic</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full" />
                      <span>Paid</span>
                    </div>
                  </div>
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

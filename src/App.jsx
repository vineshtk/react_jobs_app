import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
    // <Route path='/about' element={<h1>My App</h1>} />

  ))

const App = () => {
  // return (
  //   <>
  //     <Navbar />
  //     {/* <Hero title='This is title' subtitle='This is subtitle' /> */}
  //     <Hero />
  //     <HomeCards />
  //     <JobListings />
  //     <ViewAllJobs />
  //   </>

  // )
  return <RouterProvider router={router} />
}

export default App
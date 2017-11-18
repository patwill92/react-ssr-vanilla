import React from 'react';
import App from './App'
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage'
import AdminsPage from './pages/AdminsListPage'
import ErrorPage from './pages/ErrorPage'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...AdminsPage,
        path: '/admins'
      },
      {
        ...UsersListPage,
        path: '/users',
      },
      {
        ...ErrorPage
      }
    ]
  }
];


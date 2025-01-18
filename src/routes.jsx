import React from 'react';
import { Navigate } from 'react-router-dom';
import ArchivePage from './pages/ArchivePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NewNotePage from './pages/NewNotePage';
import NoteDetailPage from './pages/NoteDetailPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';

export const protectedRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/notes/new', element: <NewNotePage /> },
  { path: '/notes/note', element: <NoteDetailPage /> },
  { path: '/archive', element: <ArchivePage /> },
  { path: '*', element: <NotFoundPage /> },
];

export const publicRoutes = [
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '*', element: <NotFoundPage /> },
];

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './pages/__root'
import { Route as AuthRouteImport } from './pages/auth/route'
import { Route as AdminRouteImport } from './pages/admin/route'
import { Route as AdminIndexImport } from './pages/admin/index'
import { Route as FrontIndexImport } from './pages/_front/index'
import { Route as Error500Import } from './pages/error/500'
import { Route as Error403Import } from './pages/error/403'
import { Route as AuthRegisterImport } from './pages/auth/register'
import { Route as AuthLoginImport } from './pages/auth/login'
import { Route as AdminWorkbenchImport } from './pages/admin/workbench'
import { Route as FrontComponentsImport } from './pages/_front/components'

// Create Virtual Routes

const FrontRouteLazyImport = createFileRoute('/_front')()
const Error404LazyImport = createFileRoute('/error/404')()

// Create/Update Routes

const FrontRouteLazyRoute = FrontRouteLazyImport.update({
  id: '/_front',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./pages/_front/route.lazy').then((d) => d.Route))

const AuthRouteRoute = AuthRouteImport.update({
  id: '/auth',
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

const AdminRouteRoute = AdminRouteImport.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => rootRoute,
} as any)

const AdminIndexRoute = AdminIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AdminRouteRoute,
} as any)

const FrontIndexRoute = FrontIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => FrontRouteLazyRoute,
} as any)

const Error404LazyRoute = Error404LazyImport.update({
  id: '/error/404',
  path: '/error/404',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./pages/error/404.lazy').then((d) => d.Route))

const Error500Route = Error500Import.update({
  id: '/error/500',
  path: '/error/500',
  getParentRoute: () => rootRoute,
} as any)

const Error403Route = Error403Import.update({
  id: '/error/403',
  path: '/error/403',
  getParentRoute: () => rootRoute,
} as any)

const AuthRegisterRoute = AuthRegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AdminWorkbenchRoute = AdminWorkbenchImport.update({
  id: '/workbench',
  path: '/workbench',
  getParentRoute: () => AdminRouteRoute,
} as any)

const FrontComponentsRoute = FrontComponentsImport.update({
  id: '/components',
  path: '/components',
  getParentRoute: () => FrontRouteLazyRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminRouteImport
      parentRoute: typeof rootRoute
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthRouteImport
      parentRoute: typeof rootRoute
    }
    '/_front': {
      id: '/_front'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof FrontRouteLazyImport
      parentRoute: typeof rootRoute
    }
    '/_front/components': {
      id: '/_front/components'
      path: '/components'
      fullPath: '/components'
      preLoaderRoute: typeof FrontComponentsImport
      parentRoute: typeof FrontRouteLazyImport
    }
    '/admin/workbench': {
      id: '/admin/workbench'
      path: '/workbench'
      fullPath: '/admin/workbench'
      preLoaderRoute: typeof AdminWorkbenchImport
      parentRoute: typeof AdminRouteImport
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthRouteImport
    }
    '/auth/register': {
      id: '/auth/register'
      path: '/register'
      fullPath: '/auth/register'
      preLoaderRoute: typeof AuthRegisterImport
      parentRoute: typeof AuthRouteImport
    }
    '/error/403': {
      id: '/error/403'
      path: '/error/403'
      fullPath: '/error/403'
      preLoaderRoute: typeof Error403Import
      parentRoute: typeof rootRoute
    }
    '/error/500': {
      id: '/error/500'
      path: '/error/500'
      fullPath: '/error/500'
      preLoaderRoute: typeof Error500Import
      parentRoute: typeof rootRoute
    }
    '/error/404': {
      id: '/error/404'
      path: '/error/404'
      fullPath: '/error/404'
      preLoaderRoute: typeof Error404LazyImport
      parentRoute: typeof rootRoute
    }
    '/_front/': {
      id: '/_front/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof FrontIndexImport
      parentRoute: typeof FrontRouteLazyImport
    }
    '/admin/': {
      id: '/admin/'
      path: '/'
      fullPath: '/admin/'
      preLoaderRoute: typeof AdminIndexImport
      parentRoute: typeof AdminRouteImport
    }
  }
}

// Create and export the route tree

interface AdminRouteRouteChildren {
  AdminWorkbenchRoute: typeof AdminWorkbenchRoute
  AdminIndexRoute: typeof AdminIndexRoute
}

const AdminRouteRouteChildren: AdminRouteRouteChildren = {
  AdminWorkbenchRoute: AdminWorkbenchRoute,
  AdminIndexRoute: AdminIndexRoute,
}

const AdminRouteRouteWithChildren = AdminRouteRoute._addFileChildren(
  AdminRouteRouteChildren,
)

interface AuthRouteRouteChildren {
  AuthLoginRoute: typeof AuthLoginRoute
  AuthRegisterRoute: typeof AuthRegisterRoute
}

const AuthRouteRouteChildren: AuthRouteRouteChildren = {
  AuthLoginRoute: AuthLoginRoute,
  AuthRegisterRoute: AuthRegisterRoute,
}

const AuthRouteRouteWithChildren = AuthRouteRoute._addFileChildren(
  AuthRouteRouteChildren,
)

interface FrontRouteLazyRouteChildren {
  FrontComponentsRoute: typeof FrontComponentsRoute
  FrontIndexRoute: typeof FrontIndexRoute
}

const FrontRouteLazyRouteChildren: FrontRouteLazyRouteChildren = {
  FrontComponentsRoute: FrontComponentsRoute,
  FrontIndexRoute: FrontIndexRoute,
}

const FrontRouteLazyRouteWithChildren = FrontRouteLazyRoute._addFileChildren(
  FrontRouteLazyRouteChildren,
)

export interface FileRoutesByFullPath {
  '/admin': typeof AdminRouteRouteWithChildren
  '/auth': typeof AuthRouteRouteWithChildren
  '': typeof FrontRouteLazyRouteWithChildren
  '/components': typeof FrontComponentsRoute
  '/admin/workbench': typeof AdminWorkbenchRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/error/403': typeof Error403Route
  '/error/500': typeof Error500Route
  '/error/404': typeof Error404LazyRoute
  '/': typeof FrontIndexRoute
  '/admin/': typeof AdminIndexRoute
}

export interface FileRoutesByTo {
  '/auth': typeof AuthRouteRouteWithChildren
  '/components': typeof FrontComponentsRoute
  '/admin/workbench': typeof AdminWorkbenchRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/error/403': typeof Error403Route
  '/error/500': typeof Error500Route
  '/error/404': typeof Error404LazyRoute
  '/': typeof FrontIndexRoute
  '/admin': typeof AdminIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/admin': typeof AdminRouteRouteWithChildren
  '/auth': typeof AuthRouteRouteWithChildren
  '/_front': typeof FrontRouteLazyRouteWithChildren
  '/_front/components': typeof FrontComponentsRoute
  '/admin/workbench': typeof AdminWorkbenchRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/error/403': typeof Error403Route
  '/error/500': typeof Error500Route
  '/error/404': typeof Error404LazyRoute
  '/_front/': typeof FrontIndexRoute
  '/admin/': typeof AdminIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/admin'
    | '/auth'
    | ''
    | '/components'
    | '/admin/workbench'
    | '/auth/login'
    | '/auth/register'
    | '/error/403'
    | '/error/500'
    | '/error/404'
    | '/'
    | '/admin/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/auth'
    | '/components'
    | '/admin/workbench'
    | '/auth/login'
    | '/auth/register'
    | '/error/403'
    | '/error/500'
    | '/error/404'
    | '/'
    | '/admin'
  id:
    | '__root__'
    | '/admin'
    | '/auth'
    | '/_front'
    | '/_front/components'
    | '/admin/workbench'
    | '/auth/login'
    | '/auth/register'
    | '/error/403'
    | '/error/500'
    | '/error/404'
    | '/_front/'
    | '/admin/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AdminRouteRoute: typeof AdminRouteRouteWithChildren
  AuthRouteRoute: typeof AuthRouteRouteWithChildren
  FrontRouteLazyRoute: typeof FrontRouteLazyRouteWithChildren
  Error403Route: typeof Error403Route
  Error500Route: typeof Error500Route
  Error404LazyRoute: typeof Error404LazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  AdminRouteRoute: AdminRouteRouteWithChildren,
  AuthRouteRoute: AuthRouteRouteWithChildren,
  FrontRouteLazyRoute: FrontRouteLazyRouteWithChildren,
  Error403Route: Error403Route,
  Error500Route: Error500Route,
  Error404LazyRoute: Error404LazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/admin",
        "/auth",
        "/_front",
        "/error/403",
        "/error/500",
        "/error/404"
      ]
    },
    "/admin": {
      "filePath": "admin/route.tsx",
      "children": [
        "/admin/workbench",
        "/admin/"
      ]
    },
    "/auth": {
      "filePath": "auth/route.tsx",
      "children": [
        "/auth/login",
        "/auth/register"
      ]
    },
    "/_front": {
      "filePath": "_front/route.lazy.tsx",
      "children": [
        "/_front/components",
        "/_front/"
      ]
    },
    "/_front/components": {
      "filePath": "_front/components.tsx",
      "parent": "/_front"
    },
    "/admin/workbench": {
      "filePath": "admin/workbench.tsx",
      "parent": "/admin"
    },
    "/auth/login": {
      "filePath": "auth/login.tsx",
      "parent": "/auth"
    },
    "/auth/register": {
      "filePath": "auth/register.tsx",
      "parent": "/auth"
    },
    "/error/403": {
      "filePath": "error/403.tsx"
    },
    "/error/500": {
      "filePath": "error/500.tsx"
    },
    "/error/404": {
      "filePath": "error/404.lazy.tsx"
    },
    "/_front/": {
      "filePath": "_front/index.tsx",
      "parent": "/_front"
    },
    "/admin/": {
      "filePath": "admin/index.tsx",
      "parent": "/admin"
    }
  }
}
ROUTE_MANIFEST_END */

import { useState, useEffect, Children } from 'react'
import { EVENTS } from './assets/const.js'
import { match } from 'path-to-regexp'

export function Router({ children, routes  = [], defaultComponent: DefaultComponent = () => <h1>404 Not Found</h1> }) { 
  const [currentPath, setCurrentPath ]= useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    } 
  }, [])

  let routeParams = {}

  // add routes from children <Route /> components
  const routesFromChildren = Children.map(children, ({ props,type }) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren ).filter(Boolean)

  // buscamos la ruta que coincida con la URL actual
  // si la ruta es dinamica, extraemos los parametros
  // y los pasamos al componente como props

  const Page = routesToUse.find(({path}) => {
    if(path === currentPath) return true

    // hemos usado path-to-regexp para poder detectar rutas dinamicas
     //search/:query  <- :query es una ruta dinamica
    const matcherUrl = match(path, { decode : decodeURIComponent} )
    const matched = matcherUrl(currentPath)

    if(!matched) return false
      // guardamos los parametros de la url dinamica
      //y que hemos extraido con path-to-regexp
      // por ejemplo si la ruta es /search/:query
      // y la url es /search/javascript
      //  matched.params.query === 'javascript'  / {query: 'javascript'}
      routeParams = matched.params 
      return true
    
  
  })?.Component 

  return Page 
    ? <Page routeParams={routeParams} /> 
    : <DefaultComponent routeParams={routeParams} />
}
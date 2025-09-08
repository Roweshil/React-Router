import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Router } from "../Router";
import { getCurrentPath } from "../utils.js";
import { Route } from "../Route";
import { Link } from "../Link";


vi.mock('../utils.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render without problem', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if no route match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that match', () => {
    getCurrentPath.mockReturnValue('/about')

    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>  
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>  
      }
    ]
    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('should navigate using links', async () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router>
        <Route path='/' Component={() => {
          return (
            <><h1>Home</h1>
            <Link to= '/about'>Go to About</Link>
            </>
          )
        }} />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )

    //click en link
    const button = screen.getByText(/Go to About/)
    fireEvent.click(button)

    const aboutTitle = await screen.getByText('About')

    expect(aboutTitle).toBeTruthy()
  })
})
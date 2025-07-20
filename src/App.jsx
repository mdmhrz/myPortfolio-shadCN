import { Button } from "@/components/ui/button"
import Navbar from "./Shared/Navbar"
import { ThemeProvider } from "./components/theme-provider"
import { BrowserRouter } from "react-router"


function App() {
  return (
    <h1>Hello from React App</h1>

    // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    //   <BrowserRouter>
    //     <div className="flex items-center justify-center">
    //       <Navbar></Navbar>
    //     </div>
    //   </BrowserRouter>
    // </ThemeProvider>
  )
}

export default App
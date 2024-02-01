import { ThemeProvider } from '@mui/material'
import Home from "./pages/home";
import { theme } from "./theme";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>}
        />
      </Routes>
    </Router>
  )
}

export default App

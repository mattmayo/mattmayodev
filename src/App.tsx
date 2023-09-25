import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Resume from './Resume.tsx'

function App() {
  return (
    <>
      <Resume />
      <Typography variant="body2">
        <p>
          Built with ReactJS and served on NextJS. Code in{' '}
          <Link href="https://github.com/mattmayo/mattmayodev">Github</Link>
        </p>
      </Typography>
    </>
  )
}

export default App

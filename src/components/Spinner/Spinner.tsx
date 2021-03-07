import { Box, CircularProgress } from '@material-ui/core'
import React from 'react'

const Spinner = () => (
  <Box
    style={{
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex'
    }}
  >
    <CircularProgress />
  </Box>
)

export default Spinner

import { Movies } from 'components'
import React from 'react'
import { withRouter } from 'react-router-dom'

const DashboardPage = () => {
  return (
    <div>
      DashboardPage: <Movies />
    </div>
  )
}

export default withRouter(DashboardPage)

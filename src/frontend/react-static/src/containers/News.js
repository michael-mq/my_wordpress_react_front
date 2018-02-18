
import React from 'react'
import { withRouteData } from 'react-static'
//

export default withRouteData(({ news }) => (
  <div>
    <h1>News</h1>
    {JSON.stringify(news)}
  </div>
))

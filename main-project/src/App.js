import React from 'react'
const Button = React.lazy(() => import('MicroFrontend/Button'))
const WholeApp = React.lazy(() => import('MicroFrontend/WholeApp'))

export default function App() {
  return (
    <div>
      App 2
      <Button buttonName={"Hey there"} />
      <WholeApp buttonName={"change"} />
    </div>
  )
}
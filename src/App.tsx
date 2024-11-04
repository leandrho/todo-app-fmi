

function App() {
  const bg = {
    backgroundImage: 'url(/images/bg-desktop-light.jpg)',
    backgroundSize: '100% 100%',
    backgroundPosition: 'top',
  }
  return (
    <>
    <div className='min-h-[300px]' style={bg}>
      <header>
        <h1>TODO</h1>
      </header>
    </div>
     
    </>
  )
}

export default App

console.log(ReactDOM.version)
function App (){

     const st1 = {backgroundColor : 'black',color:'white' , display: 'flex', 
        flexFlow:'column', gap:'4px',padding:'50px'}
     const pallete = {backgroundColor : '#23272F', margin:'20px', borderRadius:'10px',height:'60vh',padding:'50px'}
    return(
        <div style = {st1}>
            <h1 style={{fontSize:'80px'}}>Quick Start</h1>
            <p style={{fontSize:'40px', padding:'10px',marginTop:'-20px'}}>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
            
            <div style = {pallete}>
            <h2 style={{margin:'20px',fontSize:'60px'}}>You will learn</h2>
            <ul style={{fontSize:'30px'}}>
                <li style={{padding:'10px'}}>How to create and nest components</li>
                <li style={{padding:'10px'}}>How to add markup and styles</li>
                <li style={{padding:'10px'}}>How to display data</li>
                <li style={{padding:'10px'}}>How to render conditions and lists</li>
                <li style={{padding:'10px'}}>How to respond to events and update the screen</li>
                <li style={{padding:'10px'}}>How to share data between components</li>
            </ul>
            </div>
        </div>
    )
}
ReactDOM.createRoot(document.querySelector('#root')).render(<App/>)
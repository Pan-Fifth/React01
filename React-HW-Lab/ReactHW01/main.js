
function Top (){
    const picStyle = {height:'400px',borderRadius:'100%'}
    const stBot = {display:'flex', alignItems:'center',justifyContent:'space-evenly'}
    const stMain = {display:'flex',flexDirection:'column',backgroundColor:'white',borderRadius:'10px',textAlign:'center',minHeight:'900px',padding:'20px 30px',margin:'2px 10px',gap:'15px'}
    return(
        <div style={{backgroundColor:'skyblue', height:'100vh',paddingTop:'30px'}}>
        <div style={stMain}>
            <div style={{textAlign:'center'}}>
            <img src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="pic01"
            style = {picStyle} />
            </div>
            <div style={{textAlign:'center'}}>
            <Middle/>
            </div>

            <div style = {stBot}> 
                <BottomLeft/> <BottomMiddle/> <BottomRight/>
            </div>
        </div>
        </div>
    )

}
function Middle(){
    return(
        <div>
            <h1  style={{fontSize:'50px'}}>Julienne Moore</h1>
            <p style={{fontSize:'30px'}}>julianne.moor@company.com</p>
        </div>
    )
}
function BottomLeft (){
    const st1 = {display:'flex', flexDirection: 'column', alignItems:'center',gap:'8px'}
    return( 
        <div style = {st1}>
            <h1 style = {{fontSize:'50px',margin:'0'}}>25</h1>
            <p style = {{fontSize:'30px',margin:'0'}}>Posts</p>
        </div>
    )
}
function BottomMiddle (){
    const st1 = {display:'flex', flexDirection: 'column', alignItems:'center',gap:'8px'}
    return( 
        <div style = {st1}>
            <h1 style = {{fontSize:'50px',margin:'0'}}>350</h1>
            <p style = {{fontSize:'30px',margin:'0'}}>Following</p>
        </div>
    )
}
function BottomRight (){
    const st1 = {display:'flex', flexDirection: 'column', alignItems:'center',gap:'8px'}
    return( 
        <div style = {st1}>
            <h1 style = {{fontSize:'50px',margin:'0'}}>1.5k</h1>
            <p style = {{fontSize:'30px',margin:'0'}}>Followers</p>
        </div>
    )
}


ReactDOM.createRoot(document.querySelector('#root'))
.render(<Top/>)
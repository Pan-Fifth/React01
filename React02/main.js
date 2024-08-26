// console.log(React)
// console.log(ReactDOM.version)

// ReactDOM.createRoot(document.querySelector('#root')).render(<h1>Codecamp 18</h1>)

function App (){
    const genRandom = ()=> Math.random().toFixed(3)*100.
    const st1 = {color: 'red', backgroundColor : 'lime'}
    const st2 = {border: '1px solid black', padding : 'auto'}
    const flex = {display: 'flex',justifyContent: 'space-between', alignItems:'baseline'}
    return (
        <div style = {flex}>
            <h1 style= {Object.assign(st1,st2)}>Codecamp 18 Take2: {new Date().toTimeString().split(' ')[0]}</h1>
            <h3>Your Lucky No: {genRandom()}</h3>

        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root'))
.render(
    <App/>
)
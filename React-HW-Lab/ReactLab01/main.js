
function App (){
    const name = 'John'
    const Sname = 'Doe'
    const bd = 1992
    const thisYear = new Date().getFullYear()
    const st1 = {border : '1px solid black',backgroundColor:'lime', textAlign: 'center'}
    return(
    <div>

        <h1 style = {st1}>Lab-01</h1>
        <h1 style = {st1}>Name: {name} {Sname}</h1>
        <h2 style = {{textAlign:'center'}}>Birthday Year: {bd}</h2>
        <p style = {st1}>age: {thisYear-bd}</p>
    </div>
    )

}

ReactDOM.createRoot(document.querySelector('#root'))
.render(<App/>)
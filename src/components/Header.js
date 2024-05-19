import Button from "./Button"

const Header = () => {

    const onClick = () => {
        console.log("Btn Clicked.")
    }

  return (
    <header className="header">
        <h1>Task Tracker</h1>
        <Button color="green" text="Hello" 
        onClick={onClick}/>
    </header>
  )
}

export default Header
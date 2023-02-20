import Button from "./components/Button/Button";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return (
        <>
            <Sidebar />
            <Button ariaLabel="This is a blue button" />
            <Button ariaLabel="This is a red button" />
        </>
    );
}

export default App;

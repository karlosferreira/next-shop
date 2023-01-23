import Navbar from './components/navBar'
import MainMenu from './components/mainMenu'
import MegaMenu from './components/megaMenu'
import ReactHead from './components/head'

export default function Header() {
    return (
        <>
            <ReactHead />
            <header>
                <Navbar />
                <MainMenu />
                <MegaMenu />
            </header>
        </>
    )
}
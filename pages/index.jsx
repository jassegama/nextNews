import { Toolbar } from "../components/toolbar";

export default function Index() {
    return(
        <div className="page-container">

            <Toolbar />

            <div className="flex-1 flex items-center flex-col justify-center">
                <h1 className="mt-[-50px]">NEXT.JS News App</h1>

                <h3>Your one stop shop for the latest news articles</h3>
            </div>

            <footer className="text-sm text-neutral-400 text-center">
                <small>&copy; Copyright , {(new Date().getFullYear())} <a className="underline" href="https://www.linkedin.com/in/jasse-gama-a6090830/" target="_blank">Jasse Gama</a>. All rights Reserved</small>
            </footer>

        </div>
    )
}
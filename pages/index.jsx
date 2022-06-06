import { Footer } from "../components/footer";
import { Toolbar } from "../components/toolbar";

export default function Index() {
    return(
        <div className="page-container">

            <Toolbar />

            <div className="flex-1 flex items-center flex-col justify-center">
                <h1 className="mt-[-50px]">NEXT.JS News App</h1>

                <h3>Your one stop shop for the latest news articles</h3>
            </div>

            <Footer />
        </div>
    )
}
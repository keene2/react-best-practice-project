import { withProviders } from "./providers";
import "./index.scss"
import { Routing } from "@/pages";



const App = () => (<Routing />)
export default withProviders(App)



// "baseUrl": "./src",
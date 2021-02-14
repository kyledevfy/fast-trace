import React, { useState } from "react"
import NavBar from "./NavBar/navbar"
import { Route, Switch } from "react-router-dom"
import Home from "./Home/home"
import Login from "./Auth/login"
import Signup from "./Auth/signup"
import Footer from "./Footer/footer"
import Forgot from "./ForgotPassword/forgot"
import { auth } from "../services/firebase"
import Loading from "./loading"
const Main = () => {
    const [logged, setLogged] = useState(false)
    const [loading, setLoading] = useState(true)

    auth.onAuthStateChanged((user) => {
        if (user) {
            setLogged(true)
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        } else {
            setLogged(false)
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }
    })

    return loading ? (
        <Loading />
    ) : (
        <>
            <NavBar logged={logged} />
            <div className="main-wrapper d-flex flex-column justify-content-between">
                <Switch>
                    <Route exact path="/">
                        <Home logged={logged} />
                    </Route>
                    <Route exact path="/login">
                        <Login logged={logged} />
                    </Route>
                    <Route exact path="/signup">
                        <Signup logged={logged} />
                    </Route>
                    <Route exact path="/forgot">
                        <Forgot logged={logged} />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </>
    )
}

export default Main

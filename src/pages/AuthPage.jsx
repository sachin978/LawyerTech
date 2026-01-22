    import { useState } from "react";
    import Login from "./Login";
    import Signup from "./Signup";
    import "../styles/auth.css";
    import "../styles/animations.css";

    function AuthPage({ onLoginSuccess }) {
    const [mode, setMode] = useState("login");
    const [info, setInfo] = useState("");

    return (
        <div className="auth-container">
        <div className="auth-left">
        <h1>LawyerTech</h1>
        <p>
        Secure. Reliable. Built for modern legal professionals.
        Manage access and operations with confidence.
        </p>

        </div>

        <div className="auth-right">
            <div className="auth-card">
            <div className="auth-toggle">
                <button
                className={mode === "login" ? "active" : ""}
                onClick={() => setMode("login")}
                >
                Login
                </button>
                <button
                className={mode === "signup" ? "active" : ""}
                onClick={() => setMode("signup")}
                >
                Signup
                </button>
            </div>

            {info && <p className="message">{info}</p>}

            {mode === "login" && (
                <Login onLoginSuccess={onLoginSuccess} />
            )}

            {mode === "signup" && (
                <Signup
                onSignupSuccess={() => {
                    setMode("login");
                    setInfo("Signup successful. Please login.");
                }}
                />
            )}
            </div>
        </div>
        </div>
    );
    }

    export default AuthPage;

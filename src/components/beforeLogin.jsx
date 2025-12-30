function BeforeLogin() {
    return (
        <div className="container text-center" style={{ marginTop: "10%" }}>
            
            {/* Heading */}
            <h1 className="mb-3">
                MobileMart
            </h1>

            {/* Tagline */}
            <p className="text-muted mb-4">
                Your one-stop online destination for the latest and best mobile phones
            </p>

            {/* Buttons */}
            <div className="d-flex justify-content-center gap-3 mb-4">
                <a href="/login" className="btn btn-primary px-4">
                    Login
                </a>

                <a href="/register" className="btn btn-outline-primary px-4">
                    Register
                </a>
            </div>

        </div>
    );
}

export default BeforeLogin;

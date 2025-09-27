function Protected({children}: {children: React.ReactNode}) {
    let token=localStorage.getItem("token")
    if(!token){
        window.location.href="/login"
        return null
    }
    return <>{children}</>
}
export default Protected;
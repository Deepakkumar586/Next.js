import Link from "next/link";

const Login = ()=>{
    return (
        <div>
        <h1> Hello Login</h1>
        <Link href="/">Go to Home Page</Link>
        <br></br>
        <Link href="/login/loginStudent">Go to Login Student Page</Link>
        <Link href="/login/loginTeacher">Go to Login teacher Page</Link>
        </div>
    )
}
export default Login;
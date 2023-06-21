import SignupPage from "@/redux/features/auth/components/SignupPage";
import NavBar from "@/redux/features/navbar/NavBar";


export default function page() {
  return (
    <>
    <NavBar>
      <SignupPage/>
    </NavBar>
    </>
  )
}

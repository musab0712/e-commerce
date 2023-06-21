import LoginPage from "@/redux/features/auth/components/LoginPage";
import NavBar from "@/redux/features/navbar/NavBar";

export default function page() {
  return (
    <>
      <NavBar>
        <LoginPage />
      </NavBar>
    </>
  );
}

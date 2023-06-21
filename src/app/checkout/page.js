import { CheckOutPage } from "@/redux/features/CheckOutPage";
import { Protected } from "@/redux/features/auth/components/Protected";
import NavBar from "@/redux/features/navbar/NavBar";

export default function page() {
  return (
    <>
      <NavBar>
        <CheckOutPage />
      </NavBar>
    </>
  );
}

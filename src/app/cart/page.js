import { Protected } from "@/redux/features/auth/components/Protected";
import Cart from "@/redux/features/cartList/Cart";
import NavBar from "@/redux/features/navbar/NavBar";

export default function page() {
  return (
    <>
      <NavBar>
        <Cart />
      </NavBar>
    </>
  );
}

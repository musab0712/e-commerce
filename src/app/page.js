import NavBar from "@/redux/features/navbar/NavBar";
import Product from "@/redux/features/product-list/ProductList";


export default function Home() {
  return (
    <div>
      <NavBar>
        <Product/>
      </NavBar>
    </div>
  );
}

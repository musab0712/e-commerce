import NavBar from "@/redux/features/navbar/NavBar";
import ProductDetail from "@/redux/features/product-list/components/ProductDetail";

export default function ProductDetailPage() {
  return (
    <>
      <NavBar>
        <ProductDetail />
      </NavBar>
    </>
  );
}

import { getProduct } from "@/actions/getProduct";
import { getProducts } from "@/actions/getProducts";
import Container from "@/components/Container";
import Info from "@/components/Info";
import ProductList from "@/components/ProductList";
import Gallery from "@/components/gallery";

interface ProductIdPageProps {
  params: {
    productId: string;
  };
}
const ProductIdPage = async ({ params }: ProductIdPageProps) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 smpx-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images}></Gallery>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info product={product} />
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <ProductList
          title="Related Items"
          products={suggestedProducts}
        ></ProductList>
      </Container>
    </div>
  );
};
export default ProductIdPage;

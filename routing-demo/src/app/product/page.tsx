import Link from "next/link";

export default function Products() {
  const productId = 100;
  return (
    <>
      <h1>Products list</h1>
      <h3>
        <Link href="/product/1">product 1</Link>
      </h3>
      <h3>
        <Link href="/product/2">product 2</Link>
      </h3>
      <h3>
        <Link href="/product/3" replace>
          product 3
        </Link>
      </h3>
      <h3>
        <Link href={`/product/${productId}`} replace>
          product {productId}
        </Link>
      </h3>
    </>
  );
}

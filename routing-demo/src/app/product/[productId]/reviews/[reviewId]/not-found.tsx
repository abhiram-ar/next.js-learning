"use client";

import { usePathname } from "next/navigation";
export default function NotFound() {
  const pathName = usePathname();
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
  return (
    <>
      <h1>404 error</h1>
      <p>
        {reviewId} review not found for product {productId}{" "}
      </p>
    </>
  );
}

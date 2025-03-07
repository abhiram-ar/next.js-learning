import { notFound } from "next/navigation";
export default async function productReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) notFound();
  return (
    <h1>
      review {reviewId} for product {productId}{" "}
    </h1>
  );
}

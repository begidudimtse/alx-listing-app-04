import type { NextApiRequest, NextApiResponse } from "next";

// Define the type for a review
interface Review {
  id: number;
  comment: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Review[] | { error: string }>
) {
  const { id } = req.query;

  // You can later fetch reviews from a database based on id
  const reviews: Review[] = [
    { id: 1, comment: "Amazing place!" },
    { id: 2, comment: "Super clean and cozy." },
  ];

  if (!id) {
    res.status(400).json({ error: "Property ID is required" });
    return;
  }

  res.status(200).json(reviews);
}

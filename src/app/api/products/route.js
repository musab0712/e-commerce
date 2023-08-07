import connect from "@/dbConfig/dbConfig";
import Product from "@/models/Product";

connect();

export async function GET(req, res) {
  
  let query = Product.find({});
  let totalProductsQuery = Product.find({});

//   console.log(req.query.category);

  if (req.query.category) {
    query = query.find({ category: res.query.category });
    totalProductsQuery = totalProductsQuery.find({ category: res.query.category });
    // totalProductsQuery = totalProductsQuery.find({
    //   category: { $in: req.query.category.split(",") },
    // });
  }
  if (req.query.brand) {
    query = query.find({ brand: req.query.brand });
    totalProductsQuery = totalProductsQuery.find({ brand: req.query.brand });
    // totalProductsQuery = totalProductsQuery.find({
    //   brand: { $in: req.query.brand.split(",") },
    // });
  }
  if (req.query._sort && req.query._order) {
    query = query.sort({ [req.query._sort]: req.query._order });
  }

  const totalDocs = await query.count().exec();
  console.log({ totalDocs });

  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }

  try {
    const docs = await query.exec();
    res.set("X-Total-Count", totalDocs);
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
}

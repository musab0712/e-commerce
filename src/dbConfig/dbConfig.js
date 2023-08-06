import mongoose from "mongoose";

export default async function connect() {
  // try {
  //   await mongoose.connect(process.env.MONGO);
  //   const connection = mongoose.Connection;
  //   connection.on("connected", () => {
  //     console.log("MongoDB connected Successfully");
  //   });
  //   connection.on("error", (err) => {
  //     console.log(
  //       "MongoDB connection error. Please make sure MongoDB is running. " + err
  //     );
  //     process.exit();
  //   });
  // } catch (error) {
  //   console.log("something goes wrong!");
  //   console.log(error);
  // }
  await mongoose
    .connect(process.env.MONGO)
    .then((db) => {
      console.log("DB Connected!");
    })
    .catch((err) => {
      console.log(err);
    });
}

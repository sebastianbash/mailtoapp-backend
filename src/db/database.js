import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/mpg-mailtoapp")
  .then((db) => console.log("DB is connected"))
  .catch((error) => console.log("DB error", error));

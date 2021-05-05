import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// app.use("/posts", postRoutes);

// const CONNECTION_URL =
//   "mongodb+srv://jrobi133:Hunter15@workoutdb.izarp.mongodb.net/WorkoutDB?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() =>
//     app.listen(PORT, () =>
//       console.log(`Server Running on Port: http://localhost:${PORT}`)
//     )
//   )
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set("useFindAndModify", false);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
  );
}

mongoose.set("useFindAndModify", false);

console.log(process.env.MONGODB_URI);
mongoose.connect(
  "mongodb+srv://jrobi133:Hunter15@workoutdb.izarp.mongodb.net/WorkoutDB?retryWrites=true&w=majority" ||
    "mongodb://localhost/budget",
  {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  }
);

app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));

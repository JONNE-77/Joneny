const express = require("express");
const apiCarRental = require("./routes/apiCarRental");
const apiCarRentalRouter = require("./routes/apiCarRental");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/", apiCarRentalRouter);

app.listen(port, () => {
  console.log(`Lao-Top API running at http://localhost:${port}`);
});
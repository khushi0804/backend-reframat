const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const partnerRoutes = require("./routes/partnerRoutes");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", productRoutes);
app.use("/api",partnerRoutes);
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

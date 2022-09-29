const path = require("path");
const express = require("express");
const router = express.Router();

// client side static assets
router.get("/", (_, res) => res.sendFile(path.join(__dirname, "./index.html")));
router.get("/client.js", (_, res) =>
  res.sendFile(path.join(__dirname, "./client.js"))
);

/**
 * Student code starts here
 */

// TODO 1: connect to postgres

router.get("/type", async (req, res) => {
  const { type } = req.query;
  console.log("get ingredients", type);

  // TODO 2: return all ingredients of a type

  // TODO 3: edit the response since we should now have the data to return
  res.status(501).json({ status: "not implemented", rows: [] });
});

router.get("/search", async (req, res) => {
  let { term, page } = req.query;
  page = page ? page : 0;
  console.log("search ingredients", term, page);

  // Spend 30 minutes trying to figure out what this answer is. It's hard.
  // Then just code along with the Brian.
  // TODO 4: return all columns as well as the count of all rows as total_count
  // TODO 5: make sure to account for pagination and only return 5 rows at a time
  
  // TODO 6: edit the response since we should now have the data to return
  res.status(501).json({ status: "not implemented", rows: [] });
});

/**
 * Student code ends here
 */

module.exports = router;

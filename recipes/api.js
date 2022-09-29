const path = require("path");
const express = require("express");
const router = express.Router();

// client side static assets
router.get("/", (_, res) => res.sendFile(path.join(__dirname, "./index.html")));
router.get("/client.js", (_, res) =>
  res.sendFile(path.join(__dirname, "./client.js"))
);
router.get("/detail-client.js", (_, res) =>
  res.sendFile(path.join(__dirname, "./detail-client.js"))
);
router.get("/style.css", (_, res) =>
  res.sendFile(path.join(__dirname, "../style.css"))
);
router.get("/detail", (_, res) =>
  res.sendFile(path.join(__dirname, "./detail.html"))
);

/**
 * Student code starts here
 */

// TODO 1: connect to postgres

router.get("/search", async function (req, res) {
  console.log("search recipes");

  // TODO 2: return recipe_id, title, and the first photo as url
  // for recipes without photos, return url as default.jpg

  // TODO 3: edit the response since we should now have the data to return
  res.status(501).json({ status: "not implemented", rows: [] });
});

router.get("/get", async (req, res) => {
  const recipeId = req.query.id ? +req.query.id : 1;
  console.log("recipe get", recipeId);

  // TODO 4: 
  // return all ingredient rows as ingredients
  //    name the ingredient image `ingredient_image`
  //    name the ingredient type `ingredient_type`
  //    name the ingredient title `ingredient_title`
  //
  //
  // TODO 5: 
  // return all photo rows as photos
  //    return the title, body, and url (named the same)
  //
  //
  // TODO 6:
  // return the title as title
  // return the body as body
  // if no row[0] has no photo, return it as default.jpg

  // TODO 7: edit the response since we should now have the data to return
  res.status(501).json({ status: "not implemented" });
});
/**
 * Student code ends here
 */

module.exports = router;

var express = require("express");
var cors = require("cors");
var mysql = require("mysql");

var app = express();

app.use(cors());

/* 

"SELECT routes.RouteID, routes.ZoneID, routes.DifficultyID ImgName, Likes, ZoneName, difficulty_translations.DifficultyName, DifficultyDescription, InitialDate, FinalDate 
FROM 
    (((routes INNER JOIN difficulties 
        ON routes.DifficultyID = difficulties.DifficultyID) 
    INNER JOIN zones 
        ON routes.ZoneID = zones.ZoneID) 
    INNER JOIN (zone_equipacions INNER JOIN zone_times 
            ON zone_equipacions.TimeID = zone_times.TimeID) 
        ON routes.ZoneID = zone_equipacions.ZoneID) 
    INNER JOIN difficulty_translations 
        ON routes.DifficultyID = difficulty_translations.DifficultyID) 
    WHERE TranslationID='"+req.query.TranslationID+"' 
        AND routes.RouteID='"+req.query.RouteID+"'"
*/

app.get("/", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_roc",
    password: "12345678",
    database: "admin_roc",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM routes", function (err, result, fields) {
      if (err) throw err;
      res.header("Content-Type", "application/json");
      res.json(result);
      con.end();
    });
  });
});

//sense comprobar he canviat zones.zoneID per routes.ZoneID / difficulties.difficultyID per routes.difficultyID - Si no funciona tornar-ho a posar com abans
app.get("/routes", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_roc",
    password: "12345678",
    database: "admin_roc",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query(
      "SELECT routes.RouteID, routes.ZoneID, routes.DifficultyID, ImgName, Likes, ZoneName, difficulty_translations.DifficultyName, DifficultyDescription, InitialDate, FinalDate FROM ((((routes INNER JOIN difficulties ON routes.DifficultyID = difficulties.DifficultyID) INNER JOIN zones ON routes.ZoneID = zones.ZoneID) INNER JOIN (zone_equipacions INNER JOIN zone_times ON zone_equipacions.TimeID = zone_times.TimeID) ON routes.ZoneID = zone_equipacions.ZoneID) INNER JOIN difficulty_translations ON routes.DifficultyID = difficulty_translations.DifficultyID) WHERE TranslationID='" +
        req.query.TranslationID +
        "' AND routes.RouteID='" +
        req.query.RouteID +
        "'",
      function (err, result, fields) {
        if (err) throw err;
        res.header("Content-Type", "application/json");
        res.json(result);
        con.end();
      }
    );
  });
});

app.get("/routesZones", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_roc",
    password: "12345678",
    database: "admin_roc",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query(
      "SELECT routes.RouteID, routes.ZoneID, routes.DifficultyID, ImgName, Likes, ZoneName, difficulty_translations.DifficultyName, DifficultyDescription, InitialDate, FinalDate FROM ((((routes INNER JOIN difficulties ON routes.DifficultyID = difficulties.DifficultyID) INNER JOIN zones ON routes.ZoneID = zones.ZoneID) INNER JOIN (zone_equipacions INNER JOIN zone_times ON zone_equipacions.TimeID = zone_times.TimeID) ON routes.ZoneID = zone_equipacions.ZoneID) INNER JOIN difficulty_translations ON routes.DifficultyID = difficulty_translations.DifficultyID) WHERE TranslationID='" +
        req.query.TranslationID +
        "' AND routes.ZoneID='" +
        req.query.ZoneID +
        "'",
      function (err, result, fields) {
        if (err) throw err;
        res.header("Content-Type", "application/json");
        res.json(result);
        con.end();
      }
    );
  });
});

app.get("/comments", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_roc",
    password: "12345678",
    database: "admin_roc",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query(
      "SELECT comments.CommentID, DatePublication, Likes, Reply FROM comments INNER JOIN comment_translations ON comments.CommentID = comment_translations.CommentID WHERE TranslationID='" +
        req.query.TranslationID +
        "'",
      function (err, result, fields) {
        if (err) throw err;
        res.header("Content-Type", "application/json");
        res.json(result);
        con.end();
      }
    );
  });
});

app.get("/zones", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_roc",
    password: "12345678",
    database: "admin_roc",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query(
      "SELECT zones.ZoneID, ZoneName, ZoneDescription FROM zones INNER JOIN zone_translations ON zones.ZoneID=zone_translations.ZoneID WHERE TranslationID='" +
        req.query.TranslationID +
        "'",
      function (err, result, fields) {
        if (err) throw err;
        res.header("Content-Type", "application/json");
        res.json(result);
        con.end();
      }
    );
  });
});

app.get("/activities", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_roc",
    password: "12345678",
    database: "admin_roc",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query(
      "SELECT activities.ActivityID, activity_translations.ActivityTime, ActivityDuration, ActivityPrice, ActivityDescription, CategoryName FROM ((activities INNER JOIN activity_categories ON activities.CategoryID = activity_categories.CategoryID) INNER JOIN activity_translations ON activities.ActivityID = activity_translations.ActivityID) WHERE TranslationID ='" +
        req.query.TranslationID +
        "'",
      function (err, result, fields) {
        if (err) throw err;
        res.header("Content-Type", "application/json");
        res.json(result);
        con.end();
      }
    );
  });
});

app.get("/prices", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_roc",
    password: "12345678",
    database: "admin_roc",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query(
      "SELECT entrance_prices.PriceID, entrance_price_translations.Price, entrance_price_translations.PriceName, PriceDescription FROM entrance_prices INNER JOIN entrance_price_translations ON entrance_prices.PriceID = entrance_price_translations.PriceID WHERE TranslationID='" +
        req.query.TranslationID +
        "'",
      function (err, result, fields) {
        if (err) throw err;
        res.header("Content-Type", "application/json");
        res.json(result);
        con.end();
      }
    );
  });
});

app.get("/data_forms", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_roc",
    password: "12345678",
    database: "admin_roc",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query(
      "SELECT DataID, DataName, Email, City, Phone, FormText FROM data_forms",
      function (err, result, fields) {
        if (err) throw err;
        res.header("Content-Type", "application/json");
        res.json(result);
        con.end();
      }
    );
  });
});

app.get("/images", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_roc",
    password: "12345678",
    database: "admin_roc",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query(
      "SELECT images.ImageID, ImageName, image_translations.ImageAlt FROM images INNER JOIN image_translations ON images.ImageID = image_translations.ImageID WHERE TranslationID='" +
        req.query.TranslationID +
        "'",
      function (err, result, fields) {
        if (err) throw err;
        res.header("Content-Type", "application/json");
        res.json(result);
        con.end();
      }
    );
  });
});

app.get("/merchs", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_roc",
    password: "12345678",
    database: "admin_roc",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query(
      "SELECT merchs.MerchID, MerchName, merch_translations.Price, ImageName, merch_category_translations.CategoryName, SizeName, UnitsInStock FROM (((((merchs INNER JOIN merch_images ON merchs.MerchID = merch_images.MerchID) INNER JOIN merch_categories ON merchs.CategoryID = merch_categories.CategoryID) INNER JOIN (merch_size_details INNER JOIN merch_sizes ON merch_size_details.SizeID = merch_sizes.SizeID) ON merchs.MerchID = merch_size_details.MerchID) INNER JOIN merch_translations ON merchs.MerchID = merch_translations.MerchID) INNER JOIN merch_category_translations ON merchs.CategoryID = merch_category_translations.CategoryID) WHERE merch_translations.TranslationID='" +
        req.query.TranslationID +
        "' AND merch_category_translations.TranslationID='" +
        req.query.TranslationID +
        "'",
      function (err, result, fields) {
        if (err) throw err;
        res.header("Content-Type", "application/json");
        res.json(result);
        con.end();
      }
    );
  });
});

app.listen(3000, () => {
  console.log("Servidor connectat correctament");
});

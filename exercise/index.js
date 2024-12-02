import express from "express";
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Route to render the EJS template
app.get("/", (req, res) => {
    const today = new Date("1 dec 2024");
    const day = today.getDay();
    // console.log(day);
    let type="weekday";
    let adv="its time to work hard";
    if(day==0 ||day==6){
        type="the weekend";
        adv="time to enjoy"}
    res.render("index", {
    daytype: type ,// Changed to `daytype`
    advice: adv,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

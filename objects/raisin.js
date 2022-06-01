const raisinAlarm = function(cookie) {
  for (let i of cookie) {
    if (i === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};
//tests
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));



const raisinAlarmArray = function(cookies) {
  let cookieArray = [];
  for (let i = 0; i < cookies.length; i++) {
    if (!(cookies[i].includes("🍇"))) {
      cookieArray.push("All good!");
      break;
    }
    cookieArray.push("Raisin alert!");
  }
  return cookieArray;
};

//tests
console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);

//expected output
//["Raisin alert!", "Raisin alert!", "All good!"];

// displays current date and time
const current = moment().format("YYYY MMMM DD, h:mm a");

let $navHeading = $('#navNow');
$navHeading.text(current);

// displays planner with hourly slots

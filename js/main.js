import Activities from "./activies.js";
import Dates from "./date.js";

const dates = Dates()
const activities = Activities(dates.formatter)

window.completeActivity = activities.completeActivity
window.updateActivityList = activities.updateActivityList
window.saveActivity = activities.saveActivity;

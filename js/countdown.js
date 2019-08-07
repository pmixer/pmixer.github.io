// DATABASE
var deadlines= new Array();

deadlines.push({
venue: "ICLR 2020",
area: "Machine Learning",
deadline: moment("2019-09-25 18:00:00 +0300", "YYYY-MM-DD HH:mm:ss Z"),
website: "https://iclr.cc/Conferences/2020/CallForPapers",
approx: 0,
});


deadlines.push({
venue: "AAAI 2020",
area: "Artifical Intelligence",
deadline: moment("2019-08-30 23:59:00 -1000", "YYYY-MM-DD HH:mm:ss Z"),
website: "https://aaai.org/Conferences/AAAI-20/aaai20call/",
approx: 0,
});

// HELPER FUNCTIONS
var timeDescription = function(x) {
return x.format("MM/DD/YYYY h:mm:ss A");
}
var timeLeftDescription = function(t) {
if(t<0) t=0;
var tseconds = t / 1000;
var seconds = Math.floor(tseconds) % 60;
var tminutes = tseconds / 60;
var minutes = Math.floor(tminutes) % 60;
var thours = tminutes / 60;
var hours = Math.floor(thours) % 24;
var tdays = thours / 24;
var days = Math.floor(tdays);
return days + " days, " + hours + "h " + minutes + "m " + seconds + "s";
}
// Display function, called every second or so
function refreshDisplay() {
var d = moment();
$("#currtime").text("Current time: " + timeDescription(d));

// calculate and display deadlines
for(var i=0;i<deadlines.length;i++) {
var dl= deadlines[i];
var timeLeft= dl.deadline - d;
if (timeLeft <= 0){
  continue;
}

warningString= "";
if(dl.approx == 1) { warningString= "based on previous year!"; }
prefix = "";
suffix = "";
if ("website" in dl) {
  prefix = "<a class=\"sd\" href=\"" + dl.website + "\">";
  suffix = "</a>";
}

$("#deadline" + i).html(
  prefix + "<div class=\"td\">" + timeLeftDescription(timeLeft) + "</div>"
         + "<div class=\"vd\">" + dl.venue + "</div>"
         + "<div class=\"ad\">" + dl.area + "</div>"
         + "<div class=\"td\">Deadline: " + timeDescription(dl.deadline) + "</div> <br/>"
         + "<div class=\"wd\">" + warningString + "</div>"
         + suffix
);
}
}
// int main(){}
$(document).ready(function() {
deadlines.sort(function(a, b) {
return a.deadline - b.deadline;
});
// create divs for all deadlines and insert into DOM
for(var i=0;i<deadlines.length;i++) {
var d = moment();
var dl= deadlines[i];
var timeLeft= dl.deadline - d;
if (timeLeft <= 0){
  continue;
}
$("<div class=dd id=deadline" + i + "></div>").appendTo("div#deadlinesdiv");
var divid= "#deadline" + i;

$(divid).hide();
$(divid).fadeIn(100*(i+1), function() { }); // create a nice fade in effect
}

// set up deadline timer to redraw
setInterval(
function(){ refreshDisplay(); },
1000
);

// draw!
refreshDisplay();
});

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
  venue: "ICME 2020",
  area: "Multi Media",
  deadline: moment("2019-11-29 18:00:00 +0300", "YYYY-MM-DD HH:mm:ss Z"),
  website: "http://www.2020.ieeeicme.org/index.php/important-dates/",
  approx: 0,
  });


deadlines.push({
venue: "AAAI 2020",
area: "Artifical Intelligence",
deadline: moment("2019-08-30 23:59:00 -1000", "YYYY-MM-DD HH:mm:ss Z"),
website: "https://aaai.org/Conferences/AAAI-20/aaai20call/",
approx: 0,
});

deadlines.push({
venue: "ICWSM-2020",
area: "Web and Social Media",
deadline: moment("2020-01-15 23:59:00 -1200", "YYYY-MM-DD HH:mm:ss Z"),
website: "https://www.icwsm.org/2020/index.html",
approx: 0,
});

deadlines.push({
venue: "ACL-2020",
area: "Computational Linguistics",
deadline: moment("2019-12-09 23:59:00 -1200", "YYYY-MM-DD HH:mm:ss Z"),
website: "https://acl2020.org/",
approx: 0,
});

deadlines.push({
venue: "IJCAI-2020",
area: "Artifical Intelligence",
deadline: moment("2020-01-01 23:59:00 -1200", "YYYY-MM-DD HH:mm:ss Z"),
website: "https://ijcai20.org/",
approx: 1,
});

deadlines.push({
venue: "WWW-2020",
area: "The Web Conference",
deadline: moment("2020-01-01 23:59:00 -1200", "YYYY-MM-DD HH:mm:ss Z"),
website: "https://www2020.thewebconf.org/",
approx: 1,
});

deadlines.push({
venue: "CVPR-2020",
area: "Computer Vision and Pattern Recognition",
deadline: moment("2019-11-15 23:59:00 -0800", "YYYY-MM-DD HH:mm:ss Z"),
website: "http://cvpr2020.thecvf.com/",
approx: 0,
});

deadlines.push({
venue: "WACV-2020",
area: "Computer Vision",
deadline: moment("2019-10-11 23:59:00 -0800", "YYYY-MM-DD HH:mm:ss Z"),
website: "https://wacv20.wacv.net/index.php/dates/",
approx: 0,
});

deadlines.push({
venue: "ICRA-2020",
area: "Robotics",
deadline: moment("2019-09-10 23:59:00 -0800", "YYYY-MM-DD HH:mm:ss Z"),
website: "http://www.icra2020.org/call-for-papers",
approx: 0,
});

deadlines.push({
venue: "MICCAI-2020",
area: "Medical Imaging",
deadline: moment("2020-04-01 23:59:00 -0800", "YYYY-MM-DD HH:mm:ss Z"),
website: "http://www.miccai.org/events/upcoming-conferences/",
approx: 1,
});

deadlines.push({
venue: "ACM MM-2020",
area: "Multimedia",
deadline: moment("2020-03-31 23:59:00 -0800", "YYYY-MM-DD HH:mm:ss Z"),
website: "https://acmmm.org/",
approx: 1,
});

deadlines.push({
venue: "ICASSP-2020",
area: "Signal Processing",
deadline: moment("2019-10-21 23:59:00 -0000", "YYYY-MM-DD HH:mm:ss Z"),
website: "https://2020.ieeeicassp.org/authors/call-for-papers/",
approx: 1,
});

deadlines.push({
venue: "ICML-2020",
area: "Machine Learning",
deadline: moment("2020-01-01 23:59:00 -0000", "YYYY-MM-DD HH:mm:ss Z"),
website: "https://icml.cc/Conferences/2020",
approx: 1,
});

deadlines.push({
venue: "KDD-2020",
area: "Knowledge Discovery and Data Mining",
deadline: moment("2020-02-01 23:59:00 -0000", "YYYY-MM-DD HH:mm:ss Z"),
website: "https://www.kdd.org/kdd2020/",
approx: 1,
});

deadlines.push({
venue: "More",
area: "By jackietseng",
deadline: moment("2020-12-31 23:59:00 -0000", "YYYY-MM-DD HH:mm:ss Z"),
website: "https://jackietseng.github.io/conference_call_for_paper/conferences.html",
approx: 1,
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

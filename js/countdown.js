// DATABASE
var courses = new Array();

courses.push({
  teacher: "Prof Junhui Deng",
  school: "Tsinghua@XuetangX",
  title: "Data Structure",
  link: "https://dsa.cs.tsinghua.edu.cn/~deng/ds/mooc/",
  in: moment("2014 September", "YYYY MMM")
});

courses.push({
  teacher: "Prof Junhui Deng",
  school: "Tsinghua@XuetangX",
  title: "Computational Geometry",
  link: "https://dsa.cs.tsinghua.edu.cn/~deng/cg/",
  in: moment("2015 September", "YYYY MMM")
});

// HELPER FUNCTIONS
// Display function, called every second or so
function refreshDisplay() {
  var d = moment();

  for(var i = 0; i < courses.length; i++) {
    var c = courses[i];
    prefix = "<a class=\"sd\" href=\"" + c.link + "\">";
    suffix = "</a>";

    $("#course" + i).html(
      prefix + "<div>" + c.school + "</div>"
            + "<div class=\"cname\">" + c.title + "</div>"
            + "<div class=\"tname\">" + c.teacher + "</div>"
            + "<div>Enrolled in: " + c.in.format("MMM, YYYY") + "</div>"
            + suffix
    );
  }
}

$(document).ready(function() {
  
  courses.sort(function(a, b) {
    return a.in - b.in;
  });

  // create divs for insert into DOM
  for(var i = 0; i < courses.length; i++) {
    var d = moment();
    var c = courses[i];

    $("<div class=course id=course" + i + "></div>").appendTo("div#courses");
    var divid= "#course" + i;

    $(divid).hide();
    $(divid).fadeIn(100*(i+1), function() { }); // create a nice fade in effect
  }

  // draw
  setInterval(
    function(){ refreshDisplay(); },
    1000
  );
  refreshDisplay();
});

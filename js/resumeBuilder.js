/*
Resume building
 */
// Initialize objects
var bio = {
  name: "Peter Huang",
  role: "Graduate Student",
  contacts: {
    Mobile: "+861861142****",
    Email: "dreaming_hz(at)hotmail(dot)com",
    Github: "PeterHuang2015", //"<a href=\"https://github.com/peterhuang2015/\">PeterHuang2015</a>",
    Location: "Beijing, China",
    Blog: "www.talkwithme.cn"
  },
  welcomeMessage: "The Education Hacker",
  skills: [
    "Promgramming Languages: C, C++, Java, Javascript",
    "Toolkits: CUDA, Caffe, Tensorflow, Chrome"
  ],
  biopic: "http://www.talkwithme.cn/assets/me.jpg",
};

var education = {
  schools: [{
    name: "Northwestern Polytechincal University",
    location: "Xi'an, China",
    degree: "Bachelor of Engineering",
    majors: [
      "Software Engineering"
    ],
    dates: "2011-2015",
    url: "http://www.nwpu.edu.cn"
  }, {
    name: "Beijing Institute of Technology",
    location: "Beijing, China",
    degree: "Master Degree of Engineering",
    majors: [
      "Computer Science and Technology"
    ],
    dates: "2015-2018",
    url: "http://www.bit.edu.cn"
  }],
  courses: [{
    title: "Computer Vision",
    school: "Georgia Institute of Technology",
    location: "Online",
    dates: "2015-2016",
    url: "http://www.udacity.com"
  }, {
    title: "Machine Learning",
    school: "Georgia Institute of Technology",
    location: "Online",
    dates: "2015-2016",
    url: "http://www.udacity.com"
  }, {
    title: "Machine Learning",
    school: "Coursera",
    location: "Online",
    dates: "September 2014-December 2014",
    url: "https://www.coursera.org/learn/machine-learning/"
  }, {
    title: "",
    school: "",
    location: "",
    dates: "",
    url: ""
  }]
};

var work = {
  jobs: [{
    employer: "Udacity",
    title: "Translator",
    location: "Remote",
    dates: "August 2016-January 2017",
    description: "Do subtitle translation for Front-end Developer Nanodegree course localization in China."
  },{
    employer: "Graduate Data Mining Course in BIT",
    title: "Teaching Assistant",
    location: "Beijing, China",
    dates: "March 2016-July 2016",
    description: "Helped with assignments and projects submission on github for nearly one hundred students."
  },{
    employer: "Advanced Leadership Training",
    title: "Trianee",
    location: "Xi’an, China",
    dates: "​ May 2014-August 2014",
    description: "Organized daily programs for nearly 400 people in Sunshine International Camp. Co-coached, guided and looked after middle school students in CJ Camp."
  },{
    employer: "Registrar's Office in NPU",
    title: "Casual Worker",
    location: "Xi’an, China",
    dates: "​ May 2014",
    description: "Customer requirements collection and analysis. Coded up all the HTML pages and hosted the website on platform of NPU."
  },{
    employer: "GrapeCity",
    title: "Translator",
    location: "Xi’an, China",
    dates: "​ March 2014",
    description: "Do technical blog translation for customer support localization in China."
  }]
};

var projects = {
  projects: [{
    title: "Navie Tracker",
    url: "https://github.com/PeterHuang2015/NaiveTracker",
    dates: "2015",
    description: "A simple visual tracker",
    images: [
      "http://cvlab.hanyang.ac.kr/tracker_benchmark/seq/Basketball.png"
    ]
  }],
};

// Contests and competitions
var miscellaneous = {

};

var data = "%data%";

// construction functions
bio.display = function() {
  HTMLheaderName = HTMLheaderName.replace(data, bio.name);
  HTMLheaderRole = HTMLheaderRole.replace(data, bio.role);

  HTMLmobile = HTMLmobile.replace(data, bio.contacts.Mobile);
  HTMLemail = HTMLemail.replace(data, bio.contacts.Email);
  HTMLgithub = HTMLgithub.replace(data, bio.contacts.Github);
  HTMLlocation = HTMLlocation.replace(data, bio.contacts.Location);
  HTMLblog = HTMLblog.replace(data, bio.contacts.Blog);

  HTMLbioPic = HTMLbioPic.replace(data, bio.biopic);

  HTMLwelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

  $('#header').prepend(HTMLheaderRole);
  $('#header').prepend(HTMLheaderName);

  $('#topContacts, #footerContacts').append(HTMLmobile);
  $('#topContacts, #footerContacts').append(HTMLemail);
  $('#topContacts, #footerContacts').append(HTMLgithub);
  $('#topContacts, #footerContacts').append(HTMLlocation);
  $('#topContacts, #footerContacts').append(HTMLblog);

  /*
  //D R Y
      $('#footerContacts').append(HTMLmobile);
      $('#footerContacts').append(HTMLemail);
      $('#footerContacts').append(HTMLgithub);
      $('#footerContacts').append(HTMLlocation);
      $('#footerContacts').append(HTMLblog);
  */

  $('#header').append(HTMLbioPic);
  $('#header').append(HTMLwelcomeMsg);

  $('#header').append(HTMLskillsStart);

  for (skillIndex in bio.skills) {
    $('#skills').append(HTMLskills.replace(data, bio.skills[skillIndex] + "<br />"));
  }
};

work.display = function() {
  $('#workExperience').append(HTMLworkStart);

  for (var jobIndex = 0; jobIndex < work.jobs.length; jobIndex++) {
    e = HTMLworkEmployer.replace(data, work.jobs[jobIndex].employer);
    t = HTMLworkTitle.replace(data, work.jobs[jobIndex].title);
    d = HTMLworkDates.replace(data, work.jobs[jobIndex].dates);
    l = HTMLworkLocation.replace(data, work.jobs[jobIndex].location);
    des = HTMLworkDescription.replace(data, work.jobs[jobIndex].description);

    var jobInfo = e + t + d + l + des;

    $(".work-entry").append(jobInfo);
  }
}

projects.display = function() {
  $('#projects').append(HTMLprojectStart);

  for (var pIndex = 0; pIndex < projects.projects.length; pIndex++) {
    pt = HTMLprojectTitle.replace(data, projects.projects[pIndex].title);
    pt = pt.replace("#", projects.projects[pIndex].url);
    pd = HTMLprojectDates.replace(data, projects.projects[pIndex].dates);
    pdes = HTMLprojectDescription.replace(data, projects.projects[pIndex].description);

    var imgArr = projects.projects[pIndex].images;
    var imgDiv = "";
    for (var iIndex = 0; iIndex < imgArr.length; iIndex++) {
      imgDiv += HTMLprojectImage.replace(data, imgArr[iIndex]);
    }
    var projectInfo = pt + pd + pdes + imgDiv;

    $('.project-entry').append(projectInfo);
  }
}

education.display = function() {
  $('#education').append(HTMLschoolStart);

  var eduSection = "";
  for (var sIndex = 0; sIndex < education.schools.length; sIndex++) {
    sn = HTMLschoolName.replace(data, education.schools[sIndex].name);
    sn = sn.replace("#", education.schools[sIndex].url);
    sde = HTMLschoolDegree.replace(data, education.schools[sIndex].degree);
    sd = HTMLschoolDates.replace(data, education.schools[sIndex].dates);
    sl = HTMLschoolLocation.replace(data, education.schools[sIndex].location);

    var majorDiv = "";
    var majors = education.schools[sIndex].majors;
    for (var mIndex = 0; mIndex < majors.length; mIndex++) {
      majorDiv += HTMLschoolMajor.replace(data, majors[mIndex]);
    }

    var schoolInfo = sn + sde + sd + sl + majorDiv;

    eduSection += schoolInfo;
  }
  $('.education-entry').append(eduSection);

  // Online courses
  $('#education').append(HTMLcourseStart);

  var courseList = education.courses;
  for (var cIndex = 0; cIndex < courseList.length; cIndex++) {
    ct = HTMLcourseTitle.replace(data, courseList[cIndex].title);
    cs = HTMLcourseSchool.replace(data, courseList[cIndex].school);
    cd = HTMLcourseDates.replace(data, courseList[cIndex].dates);

    ct = ct.replace("#", courseList[cIndex].url);

    cl = HTMLcourseLocation.replace(data, courseList[cIndex].location);

    $('.education-entry:last').append(ct + cs + cd + cl);
  }

}

function addGMap() {
  $("#mapDiv").append(googleMap);
  $("#mapDiv").append(map);
}

// constructing
function constructResume() {

  bio.display();
  work.display();
  projects.display();
  education.display();

  addGMap();
  initializeMap();
}

constructResume();

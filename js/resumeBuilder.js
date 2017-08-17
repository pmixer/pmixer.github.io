/*
Resume building
 */
// Initialize objects
var bio = {
  name: "Peter Huang",
  role: "Graduate Student",
  contacts: {
    mobile: "+861861142****",
    email: "dreaming_hz(at)hotmail(dot)com",
    github: "PeterHuang2015", //"<a href=\"https://github.com/peterhuang2015/\">PeterHuang2015</a>",
    location: "Beijing, China",
    blog: "www.talkwithme.cn"
  },
  welcomeMessage: "The Education Hacker",
  skills: [
    "Programming Languages: C, C++, Java, Javascript",
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
  }, {
    name: "Udacity.Inc",
    location: "Online",
    degree: "Front-end Developer Nanodegree",
    majors: [
      "Front-end Development"
    ],
    dates: "April 2016-Febuary 2017",
    url: "http://www.udacity.com"
  }, {
    name: "Udacity.Inc",
    location: "Online",
    degree: "Machine Learning Engineer Nanodegree",
    majors: [
      "Machine Learning"
    ],
    dates: "May 2017-now",
    url: "http://www.udacity.com"
  }],
  courses: [{
    title: "Computer Vision",
    school: "Georgia Institute of Technology",
    location: "Online",
    dates: "In Progress",
    url: "http://www.udacity.com"
  }, {
    title: "Machine Learning",
    school: "Georgia Institute of Technology",
    location: "Online",
    dates: "In Progress",
    url: "http://www.udacity.com"
  }, {
    title: "Data Structure",
    school: "Tsinghua University",
    location: "Online",
    dates: "2015.03.03 ～ 2015.07.10",
    url: ""
  }, {
    title: "Introduction to Programming with MATLAB",
    school: "Vanderbilt University",
    location: "Online",
    dates: "September 10, 2015",
    url: "https://www.coursera.org/learn/matlab"
  }, {
    title: "Java Programming",
    school: "Peking University",
    location: "Online",
    dates: "August 18, 2015",
    url: "https://www.coursera.org/learn/java-chengxu-sheji"
  }, {
    title: "Introduction to Mathematical Thinking",
    school: "Stanford University",
    location: "Online",
    dates: "April 30, 2015",
    url: "https://www.coursera.org/course/maththink"
  }, {
    title: "6.00.1x: Introduction to Computer Science and Programming Using Python",
    school: "Massachusetts Institute of Technology",
    location: "Online",
    dates: "2015.01.25 ～ 2015.04.22",
    url: "http://www.xuetangx.com/courses/MITx/6_00_1x/2014_T2/about"
  }, {
    title: "Learning How to Learn: Powerful mental tools to help you master tough subjects",
    school: "University of California, San Diego",
    location: "Online",
    dates: "March, 2015",
    url: "https://www.coursera.org/course/learning"
  }, {
    title: "Image and video processing: From Mars to Hollywood with a stop at the hospital",
    school: "Duke University",
    location: "Online",
    dates: "March 22, 2015",
    url: "https://www.coursera.org/learn/image-processing"
  }, {
    title: "Model Thinking",
    school: "University of Michigan",
    location: "Online",
    dates: "March 23, 2015",
    url: "https://www.coursera.org/"
  }, {
    title: "Machine Learning",
    school: "Stanford University",
    location: "Online",
    dates: "September 2014-December 2014",
    url: "https://www.coursera.org/learn/machine-learning/"
  }, {
    title: "Web Application Development: Basic Concepts",
    school: "The University of New Mexico",
    location: "Online",
    dates: "August 2014",
    url: "https://www.coursera.org/learn/web-app"
  }
  // , {
  //   title: "",
  //   school: "",
  //   location: "",
  //   dates: "",
  //   url: ""
  // }
]
};

var work = {
  jobs: [{
    employer: "Udacity",
    title: "Intern",
    location: "Remote",
    dates: "December 2016-In Progress",
    description: "Help managing Front-end Developer Nanodegree study groups."
  },{
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
    title: "Naive Tracker",
    url: "https://github.com/PeterHuang2015/NaiveTracker",
    dates: "2015",
    description: "Implement a simple visual tracker based on template matching technique by opencv to analysis the difficulty of visual tracking task. Updated the tracker to be compatible with vot challenge toolkit in 2017.",
    images: [
      "http://cvlab.hanyang.ac.kr/tracker_benchmark/seq/Basketball.png",
      "http://www.votchallenge.net/img/vot2017_logo_website_large.png"

    ]
  }, {
    title: "Image Forensic Detector",
    url: "",
    dates: "2016",
    description: "Reimplement the sift based copy-move forgery detection algorithm using C++ and built the graphical user interface using Qt. Reimplemented the hierarchical clustering built-in MATLAB with help of STL.",
    images: [
      "http://www.lambertoballan.net/wp-content/uploads/2013/03/copymove-300x207.png"
    ]
  }, {
      title: "Subtitle-Chopstick",
      url: "https://github.com/PeterHuang2015/subtitle-chopstick",
      dates: "2017",
      description: "Tiny Chrome extension to help downloading vtt files for translation team at Udacity.",
      images: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502809616649&di=75485a7df5828db7ace5bdf9d16ca31d&imgtype=0&src=http%3A%2F%2Fwww.bjsxt.cn%2Fueditor%2Fphp%2Fupload%2Fimage%2F20170718%2F1500362279637946.png"
      ]
    }, {
      title: "SimpleNet",
      url: "https://github.com/PeterHuang2015/SimpleNet",
      dates: "2017",
      description: "Used vanilla C programming language to code up the feed forward fully connected neural network model for mnist classification task with data obtained from Kaggle.",
      images: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502809760665&di=2e81f6305cbc0a4debd2a2e070189626&imgtype=0&src=http%3A%2F%2Fimages.cnitblog.com%2Fblog%2F320121%2F201505%2F131659018292396.png"
      ]
    }, {
      title: "VOT_BIB",
      url: "https://github.com/PeterHuang2015/VOT_BIB",
      dates: "2017",
      description: "Small tool to help organizing bibliography concerning visual object tracking algorithms.",
      images: [
        "https://tse4-mm.cn.bing.net/th?id=OIP.D94Vh_4PXfxcv5iOS6hgcgEsB5&p=0&pid=1.1"
      ]
    }]

  // , {
  //   title: "",
  //   url: "",
  //   dates: "201",
  //   description: ".",
  //   images: [
  //     "http://cvlab.hanyang.ac.kr/tracker_benchmark/seq/Basketball.png"
  //   ]
  // }
};

// Contests and competitions
var playgrounds = {
item:[
  {
    title: "CodeHunt",
    url: "https://www.codehunt.com/",
    description: "A fun place to practice programming by Code&Guess :)"
  }
]
};

var data = "%data%";

// construction functions
bio.display = function() {
  HTMLheaderName = HTMLheaderName.replace(data, bio.name);
  HTMLheaderRole = HTMLheaderRole.replace(data, bio.role);

  HTMLmobile = HTMLmobile.replace(data, bio.contacts.mobile);
  HTMLemail = HTMLemail.replace(data, bio.contacts.email);
  HTMLgithub = HTMLgithub.replace(data, bio.contacts.github);
  HTMLlocation = HTMLlocation.replace(data, bio.contacts.location);
  HTMLblog = HTMLblog.replace(data, bio.contacts.blog);

  HTMLbioPic = HTMLbioPic.replace(data, bio.biopic);

  HTMLwelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

  $('#header').prepend(HTMLheaderRole);
  $('#header').prepend(HTMLheaderName);

  $('#topContacts, #footerContacts').append(HTMLmobile);
  $('#topContacts, #footerContacts').append(HTMLemail);
  $('#topContacts, #footerContacts').append(HTMLgithub);
  $('#topContacts, #footerContacts').append(HTMLlocation);
  $('#topContacts, #footerContacts').append(HTMLblog);

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

playgrounds.display = function(){
  $('#playground').append(HTMLplayGroundStart);
  var pgs = playgrounds.item;
  for (var pIndex = 0; pIndex < pgs.length; pIndex++) {
    pt = HTMLplayGroundTitle.replace(data, pgs[pIndex].title);
    pt = pt.replace("#", pgs[pIndex].url);
    pd = HTMLplayGroundDescription.replace(data, pgs[pIndex].description);
    $('.playground-entry:last').append(pt+pd);
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
  playgrounds.display();
  addGMap();
  initializeMap();
}

constructResume();

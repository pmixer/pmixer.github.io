// DATABASE
var courses = new Array();

courses.push({
  teacher: "Prof Junhui Deng",
  school: "Tsinghua University",
  title: "Data Structure",
  link: "https://dsa.cs.tsinghua.edu.cn/~deng/ds/mooc/",
  in: moment("2014 September", "YYYY MMM")
});

courses.push({
  teacher: "Prof Junhui Deng",
  school: "Tsinghua University",
  title: "Computational Geometry",
  link: "https://dsa.cs.tsinghua.edu.cn/~deng/cg/",
  in: moment("2015 September", "YYYY MMM")
});

courses.push({
  teacher: "Prof Weng Kai",
  school: "Zhejiang University",
  title: "C Programming",
  link: "https://www.icourse163.org/learn/ZJU-9001",
  in: moment("2014 May", "YYYY MMM")
});

courses.push({
  teacher: "Prof Jianmin Zhu et al.",
  school: "National University of Defense Technology",
  title: "Calculus I~V",
  link: "https://www.icourse163.org/learn/NUDT-9004",
  in: moment("2014 May", "YYYY MMM")
});

courses.push({
  teacher: "Prof Tingzhu Huang et al.",
  school: "University of Electronic Science and Technology of China",
  title: "Linear Algebra I~II",
  link: "https://www.icourse163.org/course/UESTC-1001508001",
  in: moment("2016 April", "YYYY MMM")
});

courses.push({
  teacher: "Prof Haifang Zhou et al.",
  school: "National University of Defense Technology",
  title: "Intro to Computer Science",
  link: "https://www.icourse163.org/learn/NUDT-17003",
  in: moment("2014 April", "YYYY MMM")
});

courses.push({
  teacher: "Prof Guofeng Zhang et al.",
  school: "Zhejiang University",
  title: "Probability and Statistics",
  link: "https://www.icourse163.org/learn/ZJU-232005",
  in: moment("2016 April", "YYYY MMM")
});

courses.push({
  teacher: "Prof Shaofeng Luo",
  school: "University of Science and Technology of China",
  title: "Information Analysis",
  link: "https://www.icourse163.org/learn/USTC-9002",
  in: moment("2014 May", "YYYY MMM")
});

courses.push({
  teacher: "Dr Hsiao-Wuen Hon et al.",
  school: "Microsoft Research Aisa",
  title: "Big Data Lectures",
  link: "https://www.xuetangx.com/courses/course-v1:MicrosoftX+Microsoft101+_/about",
  in: moment("2015 October", "YYYY MMM")
});

courses.push({
  teacher: "Prof Xiu Li et al.",
  school: "Tsinghua University",
  title: "Computer Course for All",
  link: "https://www.xuetangx.com/courses/TsinghuaX/20740042X/2015_T2/about",
  in: moment("2015 September", "YYYY MMM")
});

courses.push({
  teacher: "Prof Qiang Liu et al.",
  school: "Tsinghua University",
  title: "Software Engineering",
  link: "https://www.xuetangx.com/courses/TsinghuaX/34100325X/2015_T1/about",
  in: moment("2015 September", "YYYY MMM")
});

courses.push({
  teacher: "Prof Eric Grimson et al.",
  school: "Massachusetts Institute of Technology",
  title: "Introduction to CS Programming",
  link: "https://www.xuetangx.com/courses/MITx/6_00_1x/2014_T2/about",
  in: moment("2015 January", "YYYY MMM")
});

courses.push({
  teacher: "Prof David Malan",
  school: "Harvard University",
  title: "Introduction to Computer Science",
  link: "https://courses.edx.org/courses/course-v1:HarvardX+CS50+X/course/",
  in: moment("2014 December", "YYYY MMM")
});

courses.push({
  teacher: "Prof Andrew Ng",
  school: "Stanford University",
  title: "Machine Learning",
  link: "https://www.coursera.org/learn/machine-learning",
  in: moment("2014 September", "YYYY MMM")
});

courses.push({
  teacher: "Prof Dashi Tang",
  school: "Peking University",
  title: "Java Programming",
  link: "https://www.edx.org/course/java-java-programming",
  in: moment("2015 March", "YYYY MMM")
});

courses.push({
  teacher: "Prof Barbara Oakley et al.",
  school: "UC San Deigo",
  title: "Learning How to Learn",
  link: "https://www.coursera.org/learn/learning-how-to-learn",
  in: moment("2015 March", "YYYY MMM")
});

courses.push({
  teacher: "Prof Guillermo Sapiro",
  school: "Duke University",
  title: "Image Processing",
  link: "https://www.coursera.org/learn/image-processing",
  in: moment("2015 January", "YYYY MMM")
});

courses.push({
  teacher: "Prof Scott Page",
  school: "University of Michigan",
  title: "Model Thinking",
  link: "https://www.coursera.org/learn/model-thinking",
  in: moment("2015 January", "YYYY MMM")
});

courses.push({
  teacher: "Prof Mitch Prinstein",
  school: "University of North Carolina at Chapel Hill",
  title: "Psychology of Popularity",
  link: "https://www.coursera.org/learn/popularity",
  in: moment("2015 September", "YYYY MMM")
});

courses.push({
  teacher: "Prof Greg Heileman",
  school: "University of New Mexico",
  title: "Web Application",
  link: "https://www.coursera.org/learn/web-app",
  in: moment("2014 August", "YYYY MMM")
});

courses.push({
  teacher: "Prof Keth Devlin",
  school: "Stanford University",
  title: "Mathematical Thinking",
  link: "https://www.coursera.org/learn/mathematical-thinking",
  in: moment("2015 March", "YYYY MMM")
});

courses.push({
  teacher: "Prof Mike Fitzpatrick",
  school: "Vanderbilt University",
  title: "Matlab Programming",
  link: "https://www.coursera.org/learn/matlab",
  in: moment("2015 July", "YYYY MMM")
});

courses.push({
  teacher: "Prof Daphne Koller",
  school: "Stanford University",
  title: "Probabilistic Graphical Models",
  link: "https://www.coursera.org/specializations/probabilistic-graphical-models",
  in: moment("2015 September", "YYYY MMM")
});

courses.push({
  teacher: "Prof Geoffrey Hinton",
  school: "University of Toronto",
  title: "Neural Networks for Machine Learning",
  link: "https://www.cs.toronto.edu/~hinton/coursera_lectures.html",
  in: moment("2015 January", "YYYY MMM")
});

courses.push({
  teacher: "Prof Hsuan-Tien Lin",
  school: "National Taiwan University",
  title: "Machine Learning",
  link: "https://www.csie.ntu.edu.tw/~htlin/mooc/",
  in: moment("2015 Febuary", "YYYY MMM")
});

courses.push({
  teacher: "Prof Hung-yi Lee",
  school: "National Taiwan University",
  title: "Deep Learning",
  link: "https://speech.ee.ntu.edu.tw/~tlkagk/courses.html",
  in: moment("2016 September", "YYYY MMM")
});

courses.push({
  teacher: "Dr Mu Li et al.",
  school: "Amazon",
  title: "Dive into Deep Learning",
  link: "https://d2l.ai/",
  in: moment("2017 Febuary", "YYYY MMM")
});

courses.push({
  teacher: "Prof Feifei Li et al.",
  school: "Stanford University",
  title: "Computer Vision",
  link: "http://cs231n.stanford.edu/",
  in: moment("2017 Febuary", "YYYY MMM")
});

courses.push({
  teacher: "Prof Eric Xing",
  school: "Carnegie Mellon University",
  title: "Probabilistic Graphical Models",
  link: "https://www.cs.cmu.edu/~epxing/Class/10708-20/",
  in: moment("2019 May", "YYYY MMM")
});

courses.push({
  teacher: "Prof Ge Li",
  school: "Peking University",
  title: "Intro to CS and C",
  link: "https://www.coursera.org/learn/jisuanji-biancheng",
  in: moment("2014 September", "YYYY MMM")
});

courses.push({
  teacher: "Prof Wei Guo et al.",
  school: "Peking University",
  title: "C++ Programming",
  link: "https://www.coursera.org/learn/cpp-chengxu-sheji",
  in: moment("2014 September", "YYYY MMM")
});

courses.push({
  teacher: "Prof Wei Guo et al.",
  school: "Peking University",
  title: "C++ Programming",
  link: "https://www.coursera.org/learn/cpp-chengxu-sheji",
  in: moment("2014 September", "YYYY MMM")
});

courses.push({
  teacher: "Prof Gautam Kaul",
  school: "University of Michigan",
  title: "Introduction to Finance",
  link: "https://www.coursera.org/instructor/gautam.kaul",
  in: moment("2014 May", "YYYY MMM")
});

courses.push({
  teacher: "Prof Jim Fowler",
  school: "Ohio State University",
  title: "Calculus",
  link: "https://kisonecat.com/",
  in: moment("2014 July", "YYYY MMM")
});

courses.push({
  teacher: "IPND team",
  school: "Udacity",
  title: "Introduction to Programming",
  link: "https://github.com/udacity/ipnd-starter-code",
  in: moment("2016 August", "YYYY MMM")
});

courses.push({
  teacher: "FEND team",
  school: "Udacity",
  title: "Frontend Development",
  link: "https://github.com/udacity?q=fend&type=&language=",
  in: moment("2016 October", "YYYY MMM")
});

courses.push({
  teacher: "MLND team",
  school: "Udacity",
  title: "Machine Learning",
  link: "https://github.com/udacity/machine-learning",
  in: moment("2017 May", "YYYY MMM")
});

courses.push({
  teacher: "Prof Thad Starner",
  school: "Georgia Institute of Technology",
  title: "Artificial Intelligence",
  link: "https://www.udacity.com/course/artificial-intelligence--ud954",
  in: moment("2017 August", "YYYY MMM")
});

courses.push({
  teacher: "Prof Aaron Bobick and Irfan Essa",
  school: "Georgia Institute of Technology",
  title: "Computer Vision",
  link: "https://www.udacity.com/course/introduction-to-computer-vision--ud810",
  in: moment("2017 August", "YYYY MMM")
});

courses.push({
  teacher: "Prof Ada Gavrilovska",
  school: "Georgia Institute of Technology",
  title: "Introduction to OS",
  link: "https://www.udacity.com/course/introduction-to-operating-systems--ud923",
  in: moment("2018 May", "YYYY MMM")
});

courses.push({
  teacher: "Prof Jimeng Sun",
  school: "Georgia Institute of Technology",
  title: "Big Data for Health",
  link: "https://www.udacity.com/course/big-data-analytics-in-healthcare--ud758",
  in: moment("2018 August", "YYYY MMM")
});
courses.push({
  teacher: "Prof Irfan Essa",
  school: "Georgia Institute of Technology",
  title: "Computational Photography",
  link: "https://www.udacity.com/course/computational-photography--ud955",
  in: moment("2018 August", "YYYY MMM")
});
courses.push({
  teacher: "Prof Jay Summet and Sebastian Thrun",
  school: "Georgia Institute of Technology",
  title: "Artificial Intelligence for Robotics",
  link: "https://www.udacity.com/course/artificial-intelligence-for-robotics--cs373",
  in: moment("2019 January", "YYYY MMM")
});
courses.push({
  teacher: "Prof Rich Vuduc",
  school: "Georgia Institute of Technology",
  title: "High Performance Computing",
  link: "https://www.udacity.com/course/high-performance-computing--ud281",
  in: moment("2019 January", "YYYY MMM")
});
courses.push({
  teacher: "Prof Santosh Pande",
  school: "Georgia Institute of Technology",
  title: "Compilers: Theory and Practice",
  link: "https://www.udacity.com/course/compilers-theory-and-practice--ud168",
  in: moment("2019 August", "YYYY MMM")
});

courses.push({
  teacher: "Prof Polo Chau",
  school: "Georgia Institute of Technology",
  title: "Data and Visual Analytics",
  link: "https://poloclub.github.io/#cse6242",
  in: moment("2020 January", "YYYY MMM")
});

courses.push({
  teacher: "Prof Srijan Kumar",
  school: "Georgia Institute of Technology",
  title: "Web Search and Text Mining",
  link: "https://cs.stanford.edu/~srijan/teaching/cse6240/spring2020/",
  in: moment("2020 January", "YYYY MMM")
});

courses.push({
  teacher: "Prof Umakishore Ramachandran",
  school: "Georgia Institute of Technology",
  title: "Advanced Operating System",
  link: "https://www.udacity.com/course/advanced-operating-systems--ud189",
  in: moment("2020 January", "YYYY MMM")
});

courses.push({
  teacher: "Santosh Vempala",
  school: "Georgia Institute of Technology",
  title: "Continuous Algorithms",
  link: "https://santoshv.github.io/2020CS6550/contalgos.html",
  in: moment("2020 January", "YYYY MMM")
});

courses.push({
  teacher: "Prof Noam Nisan and Shimon Schocken",
  school: "Harvard",
  title: "Nand2Tetris",
  link: "https://www.nand2tetris.org/",
  in: moment("2015 January", "YYYY MMM")
});

/*
Princeton algs4&books(more)
Stanford Algorithms
LeetCode
CodeForces
Timus
Programming Challenges(Skiena)
hihocoder
rqnoj
zengzonggen
poj
project euler
hackerrank
npu100
codejam
topcoder
art of programming contests
K&R C
programmr
yuanquan contest
codehunt
编程之美
codinggame
practice@APlusClick
UW programming language
UW HW SW interface
1Blue3Brown
Khan
18.06
AOPS
Lumosity
6515
6505
ITMOx
UCB 188 AI
Intro to Phiolophy
HTML5
Microsoft Edx courses
台大 工程制图
yebingcheng 机率
MIT prob
Edx 创业 101
MIT Java
陆 计算机组成
UIUC Android
Udacity CUDA
Stanford DB
Stanford Compiler
Stanford statistical learning
Stanford mmds
Stanford convex101
Tsinghua 线性代数
Tsinghua 组合数学
UCSD CG
Stanford CS101
Stanford 经济 101
学堂 前端
邓公 算法训练营
Tsinghua 操作系统
Tsinghua Linux 编程 for IOS
学堂在线 写好科研论文
Stanford sci writing
edx mongodb
Peter Robotics
昆士兰 think101
IELTS
TOEFL
fun with prime numbers
brownU matrix
BrownU 考古
*/

// HELPER FUNCTIONS
// Display function, called every second or so
function refreshDisplay() {
  var d = moment();

  for(var i = 0; i < courses.length; i++) {
    var c = courses[i];
    prefix = "<a class=\"sd\" target=\"_blank\" href=\"" + c.link + "\">";
    suffix = "</a>";

    $("#course" + i).html(
      prefix + "<div class=\"tname\">" + c.school + "</div>"
            + "<div class=\"cname\">" + c.title + "</div>"
            + "<div class=\"tname\">" + c.teacher + "</div>"
            + "<div class=\"cname\">Enrolled in: " + c.in.format("MMM, YYYY") + "</div>"
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
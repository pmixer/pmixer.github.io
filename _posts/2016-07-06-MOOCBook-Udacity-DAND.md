---
layout: post
comments: true
title:  "MOOCBook-Udacity-DAND"
excerpt: "爱贪小便宜的薅羊毛君毅然入坑Udacity的数据分析师纳米学位"
date:   2016-07-06 15:30:00
---

> git reset --hard origin/master

Udacity过五周年生日，七月十号之前凭官方微信公众号领取的优惠券充值享受555元优惠，业界良心，本来飞墙来到大陆从199刀变到980人民币每月就已经非常赞了，按照十二个月内完成返还一半学费算，这种干货满满的课程绝对超值。果断入坑从Data Analyst Nano Degree开始。

---

# 课程视频摘记

***

#### Intro to Descriptive Statistics

###### Lesson 1:Intro to Research Methods
+ Lauren's Intro Video-已辅助决策的目的对数据进行加工整理，通过徒手或是从Google spreadsheets里获取数据，学会Gather, Organize, Compute, Visulaize Data，以上大概是课程内容，另外，到底Katie的姓是Kormanik还是Cormanik字幕君？？
+ Intro-Katie will be the guide by drawing and writing a lot, 努力以自己的方式去理解一项内容在Udacity是很受鼓励的学习方式。
+ Quiz: Believe Results-一项调查可信与否与调查了多少人，调查了谁以及调查方式都息息相关。We need good sample size, representitive sample and a sound methodology.
+ Quiz: Measure Memory-How to measure memory.
+ Quiz: Define Constructs-街头访问人们怎么定义快乐、记忆、痒、压力。
+ BBC Memory Test-

---

#### Intro to Inferential Statistics

###### Introduction and Lesson 7 Review
+ Lauren's Intro Video-Descriptive Statistic的后继课程，教人从数据中获得对一个具体问题的近似解答。Katie Kormanik主讲。

---

#### Intro to Data Analysis

###### Data Analysis Process
+ Introduction-Caroline will be the instructor for the course, use pure python all the way to pandas, numpy and matplotpy.
+ Problems Solved by Data Analysts-Use Udacity data in this course, wide range of usage, awesome. Bill James?
+ Data Anaylysis Process-Question-Wrangling(Data acquisition and cleaning)-Exploration-Conclusions/Predictions-Communication, walk back and forth throught these steps.
+ Intro to CSVs-Comma Separated Values
+ Quiz: CSVs in Python-Two ways to store csv in python, array or dictionary. Use unicodecsv module and function DictReader(fileHandle), use with ... as f helps by auto-close, list(reader) saves my stroke on keyboard, 'rb' is required.
+ Fixing Data Types-from datetime import datetime as dt, return dt.strptime(dt, "%Y-%m-%d")什么鬼，还是要遍历列表进行类型转换
+ Quiz: Questions about Student Data-Brainstorming to raise questions on this dataset.
+ Quiz: Investigating the Data-Use set() for finding unique keys, code was provided and Caroline listed the numbers summerized from dataset
+ Quiz: Problems in the Data-Two questions, write code to solve the second one

---

#### Intro to Data Science

###### Lesson 1:Introduction
+ Introduction to Data Science-在TrialPay和Yub工作的Dave因为更喜欢实用技艺从物理转向数据科学，在这门偏理论课程里面，我们将了解DS干啥的，要成为DS要具备哪些能力，他们都在做什么Cool projects，最重要的，怎么解决问题！！！

---

#### Intro to Statistics

###### 1.Teaser
+ Welcome-Thrun和Adam Sherwin合讲的课程，额，漫画不错，Thrun好像在说统计有毒，骗人是分分钟的事情，比如通过统计我们知道你现在不受欢迎而且很不开心。(Brain Teaser)

---

#### Intro to Relational Databases

###### Data and Tables
+ Welcome to RDB-带我们学习后端工程师最重要的工具，课程五步走，概念上了解RDB里面数据的存储方式，基本SQL，Python接口进行操作，更多SQL，最终Project,ps，老师没说名字！！！

---

#### Data Wrangling with MongoDB

###### Data Extraction Fundamentals
+ Intro-Shanon Bradshow,大家平均花费70%的时间和DW这项工作打交道，如同数据科学的“食品安全问题”，课程教我们 gathering, extracting, cleaning, storing data，应对各种数据格式并使用mongoDB来完成工作。
+ ??

---

#### Data Analysis with R

###### What is EDA
+ Quiz: Data is Ubiquitious-Moira Burke, Chris Saden, Dean Eckles, Solomon Messing一起教大家Explortory Data Analysis，Chris前几个月刚刚从他Facebook的朋友那里学会R和EDA，Facebook处理的数据量很大，data.gov能够下载到很多有用数据，我们真正探索过的数据并不多，google trends是个不错的作搜索词分析的工具，FB有个叫prestodb的工具，每天处理peta级别的数据。

---

#### Introduction to Machine Learning

###### Welcome to Machine Learning
+ Introduction-Sebastian Thrun与Katie Malone的自我介绍，Sebastian表示自己的工作中的秘密武器就是ML，Katie则说明在物理(其实各类)研究中都需要ML方法，好的机器学习系统需要优质数据与高超技巧，如同酿酒要好的葡萄和精良技艺，ps，还需要耐心。总之，跟着崇尚learning by doing的两位一起进入机器学习的世界。
+ Introduction Part II-完美嵌入中介广告，在硅谷从网页搜索，语音识别到自动驾驶车辆，一直到Katie的着装推荐，都要用到机器学习，ML有毒。。。让Udacity送你去硅谷吸毒，号称起薪150K到200K刀之间。
+ Introduction Part III-课程结构是视频中带Quiz，课后有编程练习的那一种，而且据Katie的经验，学到最多东西的地方就是那些编程练习。课程最后会把所有串起来做一个大Project。
+ Prerequisites-需要一些编程经验（最好是Python）与统计知识(页面下方给出相关课程链接)，最重要的是有从数据当中发掘有意思的东西的那份好奇心

###### Naive Bayes
+ ML in The Google Self-Driving Car-Vivid explanition of supervised learning, drive in dessert for thousands of mile(poor graduate students....)
+ Quiz: Acerous Vs. Non-Acerous-acerous look for features, learn from examples
+ Quiz: Supervised Classification-classify problems(supervised leanring fit/not).
+ Features and Labels Musical Example-Katie's perference on song as the example.
+ Quiz: Features Visualization Quiz-light~intensity~soaring, relaxed~tempo~fast
+ Quiz: Classification By Eye-Thrun's taste is harder to guess on scatter plot.
+ Intro To Stanley Terrian Classification-Stanley is the car's name.
+ Quiz: Speed Scatterplot-Grade and Bumpiness-cute plotting.
+ Quiz: Speed Scatterplot 2-nothing special
+ Quiz: Speed Scatterplot 3-nothing special
+ Quiz: From Scatterplots to Predictions-test intuitions
+ Quiz: From Scatterplots to Predictions 2-nothing special
+ Quiz: From Scatterplots to Decision Surfaces-nothing special
+ Quiz: A Good Linear Decision Surface-Decide the best linear Decision Surface, tricky question?
+ Transition to Using Naive Bayes-Bayes was a religious man who tried to prove the existence of God....
+ NB Decision Boundary in Python-Why not let human plotting and fitting to that plot in Machine Learning instead of computational way
+ Getting Started With sklearn-Always start from google
+ Gaussian NB Example-sklearn.naive_bayes.GaussianNB in python, 

---

#### Data Visualization and D3.js

###### Visualization Foundamentals
+ What is Data Visualization?-Chris, Jonathan, Ryan一起探讨数据可视化，用图表精简到位地讲故事将重要信息分享给受众。
+ Defining Data Visualization-Interview with Scott Murray(Assistant Professor of Design, USF),he takes DV as a process of mapping values to visuals. Cole Nussbaumer(storytellingwithdata.com), good DV leads to Aha moment. For me, I love drawing, maybe this time drawing data.
+ Quiz: Good Data Visualization-Exploratory and explanatory DV, clutter.
+ Quiz: The Functional Art Obesity and Education-VizWiz quotes and a cool demo, view and give the answer questions.
+ Quiz: Slope Graphs-Cole's story.
+ Words of Wisdom from Zipfian Academy-Another interview, doing meaningful work needs communication.
+ Quiz: Design Code Tell-A survey
+ Data Visualization and You-Bring your own background to this field.
+ The Data Science Process-Nothing happens in a vacuum. Process: acquire~CS~parse->filter~Statistics and Data Mining~mine->represent~Graphic Design~refine->interact/(Infovis and HCI)
+ Details of the Data Science Process-Ben Fry's Phd thesis: Computational Information Design
+ Data Vis in Data Science-Mentioned this course's position in this nanodegree
+ Iterating on Visualizations-Take a process as a whole and walk back and forth in this process.
+ Explanatory vs Exploratory-Like note and lecture
+ Anscombe's Quartet-Always plot the data, it's very important
+ Why Even Create Graphics?-Awesome plots
+ Data Types-Han Rosling's demo of health data, Bin, Categorical Data-Quantitive Data
+ Quiz: Identifying Data Types-


#### A/B Testing

###### Overview of A/B Testing
+ Introduction to Course-Diane Tang Phd in CS, Carrie Grimes Bostock Phd in statistics, Caroline Buckey CMU GPA 4.0毕业，两位Google工作12年以上的资深雇员将和Udacity的课程负责人一起带领我们探索商业应用中如何通过数据对网站更新等事务作出决策。
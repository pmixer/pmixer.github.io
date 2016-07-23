---
layout: post
comments: true
title:  "MOOCBook-Coursera-Robotics-Aerial Robotics"
excerpt: "Do need to finish this course to concentrate on DAND"
date:   2016-07-23 05:30:00
---

# Why this course?
Last year, Peter Corke opened my eye to fascinating robotics world(by taking his course on [QUT MOOC](mooc.qut.edu.au)), but the course material no more availible after the course closed.
Robotics-Aerial Robotics is part of the series provided by Penn on Coursera and I paid for it. Have to finish the course anyway...

槽点颇多的新开课程。。。视频和作业不大能对上号什么的~~追赶时尚潮流总要付出点代价的，ps，这。。。不算是没有任何基础能应付自如的课

# Video Lecture Notes

###### Week 1
+ Introduction-Prof Kostas Daniilidis and Prof Jianbo Shi(zi mu you du, ming zi dou da cuo le) are going to teach us how to extract information through images and videos.
Information including position, trajectory, distance to the points in the scene of the camera. Syllabus: W1 Geometry of Projection, W2 Augmented Reality, W3 Visual Metrology, W3+4 Orient ourselves in 3D through 2D information.
Interesting, Prof Shi illustrated two ways to orient oneself in 3D space(by inferring what was know or point correspondance).
Boundle adjustment for 3D reconstruction with more images. The course is challenging while taking picture seems an easy job...

+ Camera modeling-What is a camera, an old question from high school physics class, gannets as example of distance measuring(paper about this animal by David N. Lee: Plummeting gannets: a paradigm of ecological optics).
Kostas showed his camera(image/CCD chip and lens) collection, he mentioned the property of the thin lens.

$$
\frac{1}{f} = \frac{1}{a} + \frac{1}{b}
$$

focal length, object distance, image plane distance. Size ratio: 

$$
\frac{Y}{a} = \frac{y}{b}
$$

Multiple points on a line projects to the same point on the image plane.

+ Single view geometry-I thought we are looking down at first Prof Shi...Try to infer the geometry of the scene as well as how the camera man is looking into the scene.

# Questions
+ Why most precise image got when requirement of 
$$
\frac{1}{f} = \frac{1}{a} + \frac{1}{b}
$$
met.

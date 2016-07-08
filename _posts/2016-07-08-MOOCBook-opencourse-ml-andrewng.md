---
layout: post
comments: true
title:  "MOOCBook-opencourse-ml-andrewng"
excerpt: "看过简化肢解之后的ML课之后，还是得来课程资料出处考古"
date:   2016-07-08 04:30:00
---

# Why this course?
来考古的，课程里面还在用Windows98。。。Andrew Ng提供的机器学习课程的原始出处，课程最大特点是平易近人。

# Video Lecture Notes

###### Alphabet
+ Regression

###### Lecture 1
+ 显然，机器学习作为一个研究领域部分目的在于扩展计算机的处理能力，这是一个前沿/交叉学科，或者换句话说，做的是杂活，Andrew鼓励将课程的Project定为在自己的当前研究方向上使用机器学习算法解决特定任务。
第一节课，为了显得cool一些，举了很多例子，用Dan收集的房价信息作Regression问题的示例，肿瘤细胞检测作classification问题的示例，预言ML在医疗领域大有用处，也让人想到Eric Xing和匹兹堡医院的合作。
行胜于言，Authur Samuel在1959年真切地拿出来一个通过训练获得的下跳棋的程序是在ML领域开荒的“壮举”，更formal的定义则是Tom Mitchell的E, P, T形式。
提到了高维度的问题(如果不止通过size和)，这也是很多实际应用中要解决的核心问题。
在非监督学习部分给出很吸引人的例子，通过图片重建世界支持3D Navigation，unsupervised learning在其中起到预处理作用。
鸡尾酒会的例子真是用烂了，里面的ICA算法用一行代码表示起来就是：
```Matlab
[W,s,v] = svd((repmat(sum(x.*x,1),size(x,1),1).*x)*x');
```
老实说，对于上面代码具体做了什么真的不太懂。
至于Reinforcement Learning，给大家看了小飞机和学生做的不同种类的机器人。课程暂不涉及RL。
课程数学基础要求有基本的统计知识，了解方差，期望这些概念，具备基本线性代数知识，最好知道特征向量。
本课中的消化大概就是Andrew在另一个学校工作的朋友从前学ML的学生回来show Matlab码来的BIG House照片和数数鸡尾酒会了。。。
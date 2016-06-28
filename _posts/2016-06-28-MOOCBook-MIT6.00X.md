---
layout: post
title: MOOCBook-MIT6.00X
---

{{ page.title }}
================

<p class="meta">28 Jun 2016 - Beijing</p>

# Abstract-大叔们的Python课
> 笔记整理自网络获取的Eric Grimson与John V.Guttag开设的*6.00	Introduction	to Computer Science	and Programming*课程资料

6.00x共由两部分组成，内容取自John编写的教材，基本都是Eric在讲课，具体内容按照章节列述内容如下：

## 6.00.1x
+ Week1-Introduction: 计算大法又快又好，我们关注于Imperative Knowledge试图用计算方法对各类问题加以解决；大叔没再像当年的公开课上那样讲隔壁大学的冷笑话。
+ Week1-Core Elements: 计算机做的事情其实就俩，计算和存储；在这个基础上“欲求不满”的工程师们能构建出非常复杂的程序。在这节中，从基本的运算讲起，做加减乘除操作
外加type()进行数据类型检测和int(),float()这些函数进行类型转换，用raw_input(prompt)获取输入；学过这节后，就算是围观过大叔写stright-line program和带简单分支的程序了，
这个阶段的程序还相对简单，每条语句最多才运行一次。

<br />

# Spotlight-重要的东西说三遍都不够，得写下来
> 晒课程中的干货

## 平方根求法(讲循环结构之前先来了一段循环)
在介绍Imperative Knowledge与Declarative Knowledge的区别时，Eric举了个计算平方根的栗子：给出已知数y,为求得y的算数算数平方根我们进行以下操作：
  
  1. 随机产生数g(shorthand for guess)
  2. 计算g*g
  3. 利用关于平方根的Declarative Knowledge进行验证(即比较g*g与y的大小)
  4. 当g*g与y差的绝对值小于一个限定范围时，运行结束，输出g作为答案(近似平方根)，否则进行步骤5
  5. 用式g = 1/2*(g+x/g)更新g值，即取相对于y平方根的过大值与过小值得平均进行逼近，进入步骤2

以上是算法的具体描述，这里留下两个作业给自己：
  + 对于确定的y和给出的|y-g*g|的上界e，计算以上迭代过程要运行多少次结束，推导算法复杂度表达式
  + 平方根是有了，立方根怎么算？更高次的呢？
  
## Turing Halting Problem
怎样判断一个程序是否会停止运行？听起来so easy，跑一遍就知道了？不不不，您误会了这个问题。图灵停机问题是要求使用程序判断另一个程序(比如一段源码)
是否能够停止运行。Well，据称这已经被证明是不可能的，从侧面印证了计算机并不能协助处理所有问题，computational magic power也是有限的。
  
  + 插一句话，大一的时候一个传闻中的问题是：如何写一个不带文件读写操作的程序将自己的源码打印出来，unsolved。
  + 咋证明的，人云亦云可不好？  


## Turing Complete
图灵完备性，水果机背后标识纪念着的这位先生将人类的解题过程完全抽象成一支笔在一条纸带上来来回回写写画画的过程，而经其证明，一台通用计算机只要六种基本操作就够了，理论上想干啥就能干啥了。
当问题看起来繁杂而难以解决的时候就将其分解开来，还复杂就再分解直到最终解决，想构建系统就通过层层抽象每一次在上一次的工作基础上机型构建，这种拆分方法和能够实现一种指数等级构建的框架是计算机编程人员的力量源泉，可惜不得其道常常落入重复工作的怪圈，没能驾驭机器的慢慢变得像极了机器。
  
  + 那啥，六个基本操作是哪六个？国防科大的计算机导论课上接触过图灵机模型但没好好记录下来。
  + 咋证明完备性
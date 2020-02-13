Video Notes

L01a: Principle of Abstraction

1.  Intro-OS help support different apps and developers on various devices, OS history+organization would be covered and abstraction is the key idea. OS provide functions to utilize HW by abstract it, its structured, more than simple program.
    
2.  Material-review@Charlie Brubaker? Need Computer Arch and network knowledge.
    

Collective memory? Quiz heavy video lectures, self-contained, no need of textbook.

3.  Quiz-Get sth primed? gagetory? Android as a stack sits on OS, Firefox as an app on OS, diff?
    
4.  Hierarchy-Abstraction is important as take sth(sys, knowledge, etc.) like a tree, built recursively, that’s why it’s powerful, not just for CSer. To hide details away.
    
5.  Quiz-hard time on the quiz, like English test. ISA. Abstraction=Blackbox?
    
6.  Google Earth APP-all problems are kind of abstraction, or saving all details inside?
    
7.  Quiz-google earth down to (electron2+holes)? -> transistors -(switching)>boolean logic gates->seq+comb logic elements->machine org(data path+control)->ISA->OS, compiler etc. as Sys->APP (就像林林叔以前问开机启动的整个过程如何一样, 越精通, 越具体). ISA is the middle point between HW and SW? 这门课只管OS, 其它其它课。
    
8.  GEarth, OS as the broker(经纪人?) between APP requests and HW resources.
    
9.  最后是劝退警告哈哈哈哈哈哈, 我罗嗦了这么多你觉得听不懂那就退课吧孩纸.
    

L01b: Hardware Resources

1.  Intro-starting from HW to OS
    
2.  Quiz-SW to get HW managed, Von Neumann Unified Curse LOL
    
3.  HW continumm, conduit/bus?various controller on BUS.
    
4.  BUS separated to system and I/O connected with bridge. fast vs slow, sync vs async. frame buffer on sys BUS?! HW and connectivity very similar on different devices.
    
5.  Specs of computers vary a lot but could be unified by same OS infrastructure
    
6.  current OS design highly related to Von Neumann and manage/benefits new HW
    

L01c: OS Functionality

1.  what is an operating system? defining it’s functionality
    
2.  OS as resource manager and unfied interface +cpu job scheduler
    
3.  OS protected access to HW and protect competing jobs and HW itself with APIs
    
4.  Example intro
    
5.  CPU interrupt (in SW level?) 外设响应极其依赖中断机制, wound’t it be slow?
    
6.  There are many lines on the BUS, like interrupt line? OS to make HW smart.
    

L01d: Managing the CPU and Memory

1.  To share HW, to protect from peer and itself, run efficiently and safely
    
2.  time slicing sharing of cpu to run multiple programs
    
3.  cpu, mem, peripheral dev, create mem footprint(stack, heap, global data?) os loader?
    
4.  OS will not take precious resources away from an APP? 阅读理解问题啊, charity OS
    
5.  管理所有的资源, 在用户不能感知的层面, 速度要快
    
6.  program=static image to memory, process is program in execution=program+state
    
7.  one line of control = thread, prof likes giving analogies. Now state=states for all threads.
    
8.  move into memory part, mentioned address space and memory related abstraction
    
9.  review ends, cpu scheduling, memory management and network protocal, find Charles
    

L02a: OS Structure Overview

1.  Get managed and provided, Pros and Cons for Perf and Safety. OS struct, SPIN, exokernel, L3 micro kernel based approach for OS extensibility, 权限. 开始听不懂了
    
2.  name system services from an OS, a continuous quiz.
    
3.  OS as humbergur’s meat, why its structure is important?
    
4.  protection, performance, flexibility, scalability, agility(?), responsiveness
    
5.  elaborated in details of formly listed OS feature requirements
    
6.  没有懂呀, 啥叫 research leading SOTA towards end of the module?
    
7.  monolithic structure, OS services and device drivers. requires big chunk OS.
    
8.  DOS
    
9.  pros and cons of DOS’s vague design. BLUE SCREEN~
    
10.  Easier to use, and pays the cost of lose of intergrity. OS call could be faster
    
11.  DOS no more acceptable, but monolithic too rigid. APPs are different. OS take all.
    
12.  page fault, OS find free page frame, update page table, resume process. overbook
    
13.  introduced m kernel approach, split services in outer layer and make it eaiser to extend. kernel take on address and IPC work
    
14.  trap instruction, OS always in priviledged mode. M Kernel approach, IPC costy, due to more adress space, more expensive on switch
    
15.  border cross, same as declared on class
    
16.  quiz, feature matching when they adequately met requirements. L3 mkernel trick?
    
17.  love the triangle diagram based comparing the last quiz items
    

L02b: The SPIN Approach

1.  SPIN and exokernel as two different ways for OS extesibility
    

L02c: The Exokernel Approach

1.  Quick intro, exokernel looks like a key keeper for using HW. BINGDINGS!
    
2.  TLB and packet example for exokernel usage, where’s the driver located for it?
    

L05a: Definitions

1.  老师的老本行, distributed systems, 会更多的与网络相关。
    
2.  connected, only comm by msg, t(a-c) >> t(a-b) which means comm cost high
    
3.  more detailed explaination of above quiz
    
4.  flight, get more than peanuts :), sequential and send-recv pair for dist sys
    
5.  introduced notion of “before” -> and its transitive feature
    
6.  -> quiz
    
7.  ‘happen before’ relation
    
8.  quiz on sequence and reordering, -> ||, didn’t see m. -> = in node and comm
    
9.  further explaination of above section
    

L05b:

1.  Lamport clocks
    
2.  Two clocks, one for local node, one for msg, and do max(self++, msg) in joints
    
3.  short quiz on clock
    
4.  no strict constraint for concurrent event(what did Prof mean for all the event?)
    
5.  beyond partial order, need total order to break the tie. saw Prof’s family
    
6.  for total order, a=>b if ci(a) < cj(b) or ci(a) == cj(b) && pi << pj, then no need of clock
    
7.  total order quiz
    
8.  TODO
    
9.  TODO
    
10.  3(N-1) comm for lock acquisition, just jumped here to try the quiz when know nothign

Classroom Notes
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyNTM0OTE4NDBdfQ==
-->
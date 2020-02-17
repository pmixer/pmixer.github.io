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
L05c:
1. Sequential consistency mem model, 
L06a:

 1. Distributed object for perf and function evoluation of OS production, Spring, Yousef
 2. Sun's UNIX inside as an example
 3. Strong interface + object to hold private state->OOP OS, good kernel required for perf
 4. 

Classroom Notes

In case no access to pen&paper

  

scribe duty and paper summary duty, two of each

  

TODAY 2020年1月8日:

SPIN&EXOKERNEL

  

OS get out of the way of applications

  

protect app from itself like invalid mem access

  

from others=isolation

  

applicaton os code interaction

  

Disk Operating System as trational example: Imaginary line, no protection

  

BUT UNIX has, PCB(process control block, volatile state) make OS know everything except program’s intention. MS DOS initially for single use, single program. So could be smaller?

  

pthread familiarity

  

threads share code and data memory space. but PC, stack etc. are different. TCB come in.

  

stack->heap->global->code for ST program, multi stack for MT program.

  

User level threads pros: runs on OS kernel level. mutex, cond_var. cheap switch & flexible.

  

User level threads cons: no good use of HW continuity. Has to be back to kernel4 resource.

  

BLOCKING like IO inside one thread cause the hreads in same thread group halt.

  

switching: yield voluntarily… preemptive() by timer interrupt.

  

no prefect non-blocking version of system calls from library. polling wrapper.

  

threads library register itself in OS and get notified by OS to let process to schedule on itself.

  

Kernel Level Threads(bit expensive)

  

Two level, thread level scheduler + process level scheduling.

  

OS not just bunch of kernel,

  

memory protection, sharing&demand paging?

  

OS Structure. (User Kernel) border crossing is expensive:

  

privilege level change->into kernel mode(changing volatile state, address space)->and back

  

locality, 100X times slow memory than CPU. Cache all on CPU?

  

Instruction&Data->virtual address use page table to trans to physical memory-> cache of page table if in TLB… cache use physical address (flush TLB) kernel portion same for all P?

  

network package comes into the kernel?

  

HW1

  

Q1. Consider a processor that supports virtual memory. It has a virtually indexed physically tagged cache, TLB, and page table in memory. Explain what happens in such a processor from the time the CPU generates a virtual address to the point where the referenced memory contents are available to the processor.

Based on partially given machine specs(VIPT etc.), when CPU needs access to data, address translation based on TLB and cache access with be performed at the same time, if TLB does not contain required info, it would seek page table's help for address translation, if cache miss, it would go to physical memory for grabbing the required data, paying the extra cost of overheads(as it could take more clocks to finish).

Q2. Distinguish between segmentation and paging.

Both are methods to split physical memory to support virtual memory for processes in OS. Segmentation is more intuitive, just give the process memory chunk according to the size it ask for, so generated variable length memory segments, OS need to keep track and manage them in hard way. In contrast, paging is dividing physical storage into equal size pages (4KB or other sizes), ceiling the memory required by the process to an integer number of pages and allocate to the process, managing physical memory in the coarser way and more flexible, cache-friendly way.

Q3. Explain all the actions from the time a process incurs a page fault to the time it resumes execution. Assume that this is the only runnable process in the entire system.

-   HW trap, into kernel mode, PC saved on stack
    
-   volatile states(on registers) saving
    
-   OS to figure out which virtual page in need and see if it's valid or not
    
-   allocate page frame( rob some if needed, and do necessary context switch and disk IO operation)
    
-   disk IO to load the page, then recover the original execution when get the needed page
    

Q4. Explain the following terms: the working set of a process, thrashing, paging daemon, swapper, loader, and linker.

-   the working set of a process is part of it's virtual memory space that got allocated physical memory.
    
-   thrashing, kind of abuse of physical memory by the process, as it has the intuition of having the ownership of all of the memory in virtual memory space and used too much of it which caused frequent paging/page-fault, slow down the system/other applications.
    
-   paging daemon, commonly appeared as background process in the OS to check page status(is it clean?) from time to time and ROB process A to PAY process B to due with memory pressure.
    
-   swapper, the old idea for switching processes under memory pressure etc. itself is a special process with functionality for swapping the process in/out of execution (into/from storage). Kind of like the tmp variable when switch the two variable values in programming 101 class.
    
-   loader, something inside the OS to load process for execution.
    
-   linker, linking modules to form the executable(for compiling and execution).
    

Q5. Explain page(cache) coloring and how it may be used in memory management by an operating system.

It's mainly about the details when translating virtual memory addresses to physical(RAM) address, in other words, allocating physical memory for mapping to the virtual memory address. Page coloring is a kind of cache-aware method to tag different cache lines, deliberately assign these spaces which could be mapped to different&continuous cache slots when the process is asking for the continuous(chunk of) virtual memory.

Q6. Clearly explain the costs associated with a process context switch.

There are explicit costs and inexplicit costs.

Explicit: volatile data inside registers would definitely be taken out and new data would be fed in, which introduces memory-related operation. Meanwhile, as address spaced changed, TLB might be flushed (it depends on the HW and design).

Inexplicit: caches are no longer hot, it takes time to warm up them again for faster execution.

Q7. Explain the functionality of the different layers found in the network protocol stack of an operating system such as Linux.

As ISO recommends seven-layer design, in operating systems like Linux, four-layer implementation got more widely adopted in practice, bottom-up:

-   Link Layer (network HW drivers in OS)-enable OS to use network hardware for connecting to other machines, direct linking between two machines achieved in this layer.
    
-   Network Layer(IP)-to tag entities in the network and enable data transfer between these entities under the protocol, network-wide data transfer achieved.
    
-   Transport Layer(TCP etc.)-communication enabled in this layer, mechanism serving communication has been implemented including congestion control, etc.
    
-   Application Layer(HTTP, SMTP etc.)-layer of application-facing network services implemented based on transport layer under unified design to support the application's use of network services by API.
    

  

02/05/2020

RPC

-   procedure call, args need to be on stack for callee by convention
    
-   for RPC, orchestrated via the kernel at runtime, client stub for RPC package
    
-   1st copy, client stack to rpc ms by client stub, 2nd rpc msg to kernel buffer by kernel
    
-   3rd copy, kernel buffer to server domain by kernel, 4th, server domain to server stack
    
-   by server stub, kernel only can understand continuous of bytes?
    
-   binding for remove partial overheads(like exokernel?) nameserver’s job
    
-   for procedure call(even fprintf), its not done in compiling time but when linking(trap)
    
-   a-stack? and e-stack BO(binding object as capibility), PD(procedure descriptor?)
    
-   call trap and return trap. two types of cost: change of protection domain&lose locality
    
-   marshaling and unmarshaling~eliminated kernel copy, moduler RPC paper 1 copy..?
    
-   pass by value or pass by reference for RPC, a lot of midterm hints. A-Stack.
    
-   further optimization: thread switching when RPC calls to hide explicit cost
    

Scheduling

-   two papers, and required to watch the videos. cache need careful care in reschedule
    
-   FCFS: 1st come 1st serve, ignores affinity for fairness. VS fixed or last processor
    
-   or minimum intervening(plus queue) strategy for scheduling(displine) rocket science?
    

02/07/2020

scheduling

-   thread scheduling, fairness vs thread certric vs processor centric
    
-   number of processor small->can use global queue
    
-   throughput is system centric and reponse time&variance is user centric
    
-   log for cache load time vs memory footprint. FP for fixed processor, MI variant for?
    
-   MI and variants good at light load. FP better for heavy workload
    
-   word: commensurate, procrastination for mutual exclusion lock alg-backoff alg
    
-   insert the idle loop in processor scheduling to preserve the cache, whento decide?
    
-   scheduler need to be lightweight
    

case studies

-   tornado: NUMA effects, deep mem hierarchy, false sharing as challenges
    
-   NUMA: Non-uniform memory access LLC: Last Level Cache
    
-   P.F. page fault at the same time by threads, exclusive VPN2PFN mapping
    
-   history SGI good at handling MP page faults but not MT P.F.
    
-   sharing sth kill parallelism
    
-   clustered objects for Tornado as the secret source, smart reference for Ps?
    
-   PCB(process objects), TLB, PT(Page Table). Address space into regionsFCM
    
-   COR? replicate, partitation, singleton?
    

02/10/2020

-   Diff Prof this time, starting from what is distributed system
    
-   google 2011 paper on sync clock, but for now, just simple counter now
    
-   just sth mono increasing, recommended another paper SPINE?
    
-   CP AND CQ? Q AND P ARE ABBREVAITION OF PROCESS ID
    
-   lamport clock require one to attach the counter for each of the msg
    
-   topo sorting for global ordering of the lamport clocks? but for a&e?
    
-   but its just conceptually sorting, no machine hold all counters.
    
-   or need to for global scheduling? distributed locks?
    

02/12/2020

-   more dist ordering locking&lamport physical clocks
    
-   partial ordering and physical ordering(listen to GTC training same time)
    
-   lamport applications: debugging etc. more important async lock mgmt by Q
    
-   sync of physical clock is hard, but lamport just be attached to work
    
-   all the Qs get the same ordering, but just partial of the total ordering?
    
-   combining ack and unlock reduce 3*(n-1) to 2*(n-1) for clock sync
    
-   need of global clock(wall-time clock), need clock diff less than comm time

1.  The main function contains calls to exit() (line 66) and pthread_exit() (line 80). How will the effect of these two calls differ when they are executed?
    

exit ends the process(release resources etc.), pthread_exit kills the thread directly, no cleaning

2.  The main function calls pthread_join() (line 77) with the parameter thread_return. Where does the value stored in thread_return come from when the consumer_thread is joined?
    

It got what the thread returns in form of pointer, like the consumer thread would return count

3.  Where does the value stored in thread_return come from if the joined thread terminated by calling pthread_exit() instead of finishing normally?
    

it’s retval comes from the value which got passed to pthread_exit

4.  On the same call to pthread_join() (line 77), what will happen if the thread being joined (consumer_thread, in this case) finishes before the main thread reaches the that line of code (line 77)?
    

pthread_join returns immediately(in other cases, ESRCH if the thread handle also deleted)

5.  In this program, the main thread calls pthread_join() on the threads it created. Could a different thread call pthread_join() on those threads instead? Could a thread call pthread_join() on the main thread (assuming it knew the main thread's thread ID - i.e. pthread_t)?
    

by POSIX design, they can join on other threads as long as having the thread ID. even for main

6.  The consumer_routine function calls sched_yield() (line 180) when there are no items in the queue. Why does it call sched_yield() instead of just continuing to check the queue for an item until one arrives?
    

to let other threads to run, keep checking without letting producer to add lead to dead loop


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTcxMjI2MTYyNCwyMDkxMDAzNjY0LDc5Mz
M4OTg5XX0=
-->
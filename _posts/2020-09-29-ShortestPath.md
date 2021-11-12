---
category: 'basics'
title: '最短路径'
note: '大厂回族自治县欢迎您:)'
---

# 题目

给定有向图 G，每条边记 E=(A->B, D)表示从 A 点到 B 点距离为 D(非负值), 求从指定起点到终点的最短路径，若无法到达则输出 -1。

# 思路

依然是动态规划(DP)+贪心策略(Greedy)：

+ 创建数组记录图中每个节点的状态 {未访问, 在队列中，已出队}，初始化时所有节点均置为“未访问”，创建另一个数组记录起点到各节点的最短距离，全初始化为 -1。
+ 创建以起点到该点的距离为排序关键码(Key)的优先级队列(Priority Queue)并将起点压入其中(起点到自身的距离为0)，变更起点状态为“在队列中”。
+ 每次弹出队列头部元素，即取当前除“已出队”节点外离起点最近的 {未访问/在队列中} 节点，将其状态设置为“已出队”并记录起点到其的距离 D_start2popped 为起点到该点的最短距离, 若该点即给定终点，则返回该距离并结束程序，否则遍历其邻居，若邻居状态为“未访问”，记刚弹出节点与该邻居距离为 D_popped2current，则目前起点到该节点最短距离为 D_start2popped+D_popped2current，变更其状态并入队。若邻居状态为“在队列中”，有两种处理方法：1) 遍历队列找到当前节点对应记录，对比D_start2popped+D_popped2current 和已有距离值，更新起点到该点的距离为两值中的较小者。2) 将该节点再次入队并记起点到其最短距离为 D_start2popped+D_popped2current，此时队列中可能含有同一节点的多份记录，但得益于优先级队列的优良特性，只有离起点最近的一个会被优先弹出，对应节点状态变更为“已出队”后其他记录值丢弃即可(通过出队时加入判定条件, 若新弹出节点是“已出队”状态，则直接忽略考察下一节点)。
+ 循环往复直至得到起点到终点的最短距离或队列变空。通过访问“记录起点到各节点的最短距离的数组”找到并返回起点到终点的最短距离。

关于对“在队列中”节点的两种处理方式，据个人经验，由于法 2) 避免了在队列中寻找特定元素的线性查找开销，总体速度更快（严格数学证明还没推导出来...）, 且对 BFS, A* Search 均有效，三年前通过该技巧跑出了 A* search 作业的最快搜索记录：


# 代码

附一道此类题目(引入了哆啦A梦“任意门”的版本)的解题代码，用以演示 C++ 中优先级队列(通过堆(heap) 实现)的使用方法和上面提到的技巧的具体实现，建议使用微信电脑客户端阅读:

```cpp
#include <iostream>
#include <cstring>
#include <queue>
#include <vector>
#include <algorithm>

enum status {untouched, in_pq, popped};

// use pq for bfs
int main() {
    // really hope they could just provide 0 indexed graph nodes next time
    int node_num, edge_num, gate_num;
    std::cin >> node_num >> edge_num >> gate_num;
    std::vector<std::vector<std::pair<int, int> > > neighbors(node_num);

    int n1, n2, dist;
    for (int i = 0; i < edge_num; i++) {
        std::cin >> n1 >> n2 >> dist;
        n1--;
        n2--;
        neighbors[n1].push_back(std::make_pair(n2, dist));
        neighbors[n2].push_back(std::make_pair(n1, dist));
    }

    for (int i = 0; i < gate_num; i++) {
        std::cin >> n1 >> n2;
        n1--;
        n2--;
        neighbors[n1].push_back(std::make_pair(n2, 0));
    }
    // std::cout << "Got all params" << std::endl;
    // std::priority_queue<std::pair<int, int> > pq;
    std::vector<std::pair<int, int> > pq;
    int target = node_num-1;

    status *nodes_status = new status[node_num];
    memset(nodes_status, 0, node_num * sizeof(status)); // untouched

    int *shortest_dists = new int[node_num];
    // memset(nodes_status, -1, node_num * sizeof(int));
    for (int i = 0; i < node_num; i++) {
        shortest_dists[i] = -1;
    }

    pq.push_back(std::make_pair(0, 0)); //  dist to 0-th & node id
    std::push_heap(pq.begin(), pq.end());
    nodes_status[0] = in_pq;
    while (!pq.empty()) {
        int dist2start = pq[0].first, node = pq[0].second;
        std::pop_heap(pq.begin(), pq.end());
        pq.pop_back();
        if (nodes_status[node] == popped) { // duplication
            continue;
        } else {
            shortest_dists[node] = dist2start;
            nodes_status[node] = popped;
/*
            std::cout << "shortest dist to 0th node:";
            for (int i = 0; i < node_num; i++) {
                std::cout << " " << shortest_dists[i];
            }
            std::cout << std::endl;

            std::cout << "pq after pop: ";
            for (auto it = pq.begin(); it != pq.end(); it++) {
                std::cout << " (" << it->second << "," << it->first << ")";
            }
            std::cout << std::endl;
*/        
            for (auto it = neighbors[node].begin(); it != neighbors[node].end(); it++) {
                int neighbor = it->first, dist2neighbor = it->second;
                if (nodes_status[neighbor] == untouched || nodes_status[neighbor] == in_pq) {
                    pq.push_back(std::make_pair(dist2start+dist2neighbor, neighbor));
                    std::push_heap(pq.begin(), pq.end());
                    nodes_status[neighbor] = in_pq;
                } // trace back to comp and update in queue entry vs just add duplicated one
            }
/*
            std::cout << "pq after push: ";
            for (auto it = pq.begin(); it != pq.end(); it++) {
                std::cout << " (" << it->second << "," << it->first << ")";
            }
            std::cout << std::endl;
*/
        }
    }

    std::cout << shortest_dists[target] << std::endl;

    delete [] nodes_status;
    delete [] shortest_dists;

    return 0;
}

```

# 秘籍

继续推荐邓公的数据结构与算法 MOOC 大讲堂👍 [数据结构(上)](https://next.xuetangx.com/course/THU08091000384), [数据结构(下)](https://next.xuetangx.com/course/THU08091002048), [THUOJ](https://dsa.cs.tsinghua.edu.cn/oj/), [DSA.WORKSPACE](https://github.com/pmixer/dsa.workspace)，十二道编程题做了不吃亏，做了不上当(不能用 STL， 各种结构全要手动实现 :)。

外加 [DPV算法书](http://algorithmics.lsi.upc.edu/docs/Dasgupta-Papadimitriou-Vazirani.pdf "Dasgupta S, Papadimitriou C H, Vazirani U V. Algorithms[M]. New York: McGraw-Hill Higher Education, 2008.") 及对应[教学视频](https://classroom.udacity.com/courses/ud401 "Gatech CS6515 Course")

---
category: 'work'
title: '如何把老旧游戏本改造成路由器+学习机'
note: '来跑CUDA程序:)'
---

租住的公寓出于安全原因在路由器上启动了 AP 隔离, 仅连接到同一 WI-FI 无法使各设备在局域网中互相访问，给设备间交互和数据传输带来了很多麻烦。笔者索性把老旧的游戏本变成了自己的专用路由器，同时发挥其显卡的余热，用于简单的深度学习实验和 CUDA 开发。具体方法在此分享给大家，以备取用（来省掉买路由器的钱哈哈哈哈）。

### 背景
个人手上有一台15年末入手，配有 Geforce 960M 显卡的游戏本，机器比较老，偶尔会有闪屏问题出现，同时 Ubuntu 的桌面系统和显卡驱动兼容不太好，受电源管理等模块的影响会有循环登陆以及无法退出的问题。平时工作多在另一台轻薄且屏幕更舒服的机器上进行，但该机器没有显卡，云上的 GPU 实例又比较贵(不，应该说是我比较穷:) 加上之前所说的公寓 WI-FI 问题，就萌生了把老游戏本变成路由器兼私人服务器的想法。

### 原材料
+ 优盘，用于给笔记本重装 Linux 桌面系统让它焕发新生。
+ 网线，用于给笔记本提供有线网络链接，无线网卡则用来开放 WI-FI 服务。

### 配置说明
+ 装系统，个人选择了 Ubuntu 18.04 的桌面系统，网上有很多教程一搜即得，在此不再赘述（选择呼叫 基友/学长/男友/老公 亦可快速完成该步骤:）
+ 获取 create\_ap（提供类似猎豹 WI-FI 功能的开源软件），在命令行下输入: `git clone https://github.com/oblique/create_ap.git`
+ 安装 create\_ap 依赖项，以 Ubuntu 系统为例，在命令行下输入 `sudo apt install util-linux procps hostapd iproute2 iw iwconfig haveged`
+ 安装 create\_ap, 命令行下切换到 create_ap 的下载目录运行 `cd create_ap&make install`，更详细的安装说明可参考项目文档：`https://github.com/oblique/create_ap`
+ 启动 create\_ap，确保有线网络已连接，然后在命令行下通过 `ifconfig` 查询到自己以太网卡和无线网卡的设备号并运行 create\_ap 命令指定 WIFI 名称和密码开启服务，以我的机器为例，运行命令: `sudo create_ap --no-virt wlp5s0 enp4s0 username password` 即可通过手机等设备搜索到名为 username 并可用 password 登陆的 WI-FI 热点。
+ (可选) 参照网络教程安装 miniconda 以及 jupyter notebook 即可用该机器运行计算任务，代码编辑等工作均可在连接到本机所开放 WI-FI 的其它机器上完成。
+ (可选) 如果该机器有 Nvidia 显卡，您可参照网络教程安装 CUDA 工具库，再安装 GPU 版本的 pytorch/tensorflow/mxnet 等工具包，其算力足以满足简单的深度学习实验需求。

### 测试及使用
+ 作为无线路由器-您可以使用手机等设备测试自己创建的热点的连接质量，作为独立线路，一般而言，其吞吐量和延迟较公用 WI-FI 更优（放在宿舍用还是很香的:）
+ 作为私人服务器-通过 ifconfig 查找该机器在局域网内的 ip 地址，在其它机器上连接到其提供的 WI-FI 热点后通过 ssh 等方式连接到此节点进行操作，以我的机器为例，是通过 `ssh username@192.168.12.1` 来远程登录到自己的游戏本执行具体任务的。(桌面版的 Ubuntu 系统需要安装额外软件以对外提供 ssh 连接服务，一般运行 `sudo apt install openssh-server&sudo service ssh start` 即可) 配合我们上次介绍的使用 Python 在局域网内共享文件的方法，各位也可以试试自己定制一些其它功能充分发挥老笔记本的价值。
+ 跑实验-如果您安装了 miniconda/anaconda 并希望通过 jupyter notebook 使用该机器跑实验，只需运行 `jupyter notebook --no-browser --ip=192.168.12.1` 然后在其它连接到该机器所提供 WI-FI 热点的设备浏览器上登陆 `192.168.12.1:8888` 即可编辑并运行代码(注: ip 地址需换成您机器的局域网 ip :)

如果在安装 CUDA 后机器也出现循环登陆等问题可通过 Ctrl+Alt+F1(或 F2 等) 直接进入命令行启动 create\_ap 和 jupyter notebook，本机的图形界面基本无需使用，代码编辑等工作均可在其它机器完成。
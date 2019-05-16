## 环境准备

### 1、安装 cordova

```
 npm install -g cordova
```

### 2、安装 ionic

```
npm install -g ionic@3.20.1 (注意：一定要安装这个版本的ionic)
```

### 3、查看版本

```
cordova  -v
Ionic  -v
```

### 4、下载 jdk 安装一直下一步 ps:记住安装的目录

https://pan.baidu.com/s/1HFFVgRm4AaEVcQM3juH5lA fmok

.exe 文件是 windows 的 jdk

.dmg 文件是 mac 的 jdk

双击安装下一步下一步安装 jdk

### 5、配置环境变量

配置 jdk 的环境变量

![](./1.png)
![](./2.png)

在系统变量中新建一个 JAVA_HOME 设置值为 Java 的 sdk 的安装根目录

![](./3.png)

在系统变量的 Path 中添加 ;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin

![](./4.png)

### 6、验证 jdk 是否安装成功

在控制台中输入 java 、javac 中输出对应的代码说明成功，如下：
![](./5.png)
![](./6.png)

### 7、下载 android Studio

https://developer.android.google.cn/

下载后双击下一步下一步安装如下图

注意：sdk 目录不能有中文，不能有空格。如果 C 盘足够用回头就放在 C 盘

打开的时候如果报错，点击取消。

完成之后 finish；

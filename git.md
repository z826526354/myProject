# 远程仓库 —— Github

## 版本控制系统(version control system简称VCS)

初始化本地仓库

```
$ git init
```

本地环境配置与密匙ssh配置

```
$ ssh-Keygen
```

本地环境配置

```
$ git config --global user.name '***'
```

```
$ git config --global user.email example@gmail.com
```

本地分支与远程分支建立关联

```
$ git remote add origin yourgithub
```

下载远程仓库文件到本地

```
$ git pull origin master
```

生成 ssh 密钥公钥

```
$ git ssh-keygen -t rsa
```

初始化并且生成一个文件

```
$ git commit -m 'init and make a file'
```

将文件添加到暂存区当中

```
$ git add git.md
```

查看文件当前状态

```
$ git status
```

作为新版本存储到本地使3区一致（工作目录， 暂存区， 本地仓库）

```
$ git commit -m 'add a P'
```

添加到远程仓库上的master分支

```
$ git push origin master
```

查看版本号

```
$ git reflog
```

查看日记

```
$ git log <fileName>
```

回退到上个版本(针对3区)

```
$ git reset --hard HEAD^
```

切换到某个版本, 回退次数

```
$ git reset --hard ID
$ git reset --hard HEAD~1
```

针对暂存区和本地仓库的回退

```
$ git reset --mixed HEAD~1
```

针对本地仓库的回退

```
$ git reset --soft HEAD~1
```

比较工作区与暂存区的区别

```
$ git diff
```

比较工作区与本地仓库中最近一次commit的内容

```
$ git diff HEAD
```

比较暂存区与本地版本库中最近一次commit的内容

```
$ git diff --cache
```

比较两个commit之间差异

```
$ git diff <commit-id> <commit-id>
```

切换分支到 dev (切换分支前一定要保存)

```
$ git checkout dev
```

查看分支

```
$ git branch
```

创建新分支—— dev

```
$ git branch dev
```

创建并切换分支到dev

```
$ git checkout -b dev
```

合并分支 dev

```
$ git merge dev
```

合并完成

```
$ git add .
$ git commit -m 'merge'
$ git push origin master
```

拉取master上的分支dev

```
$ git pull origin master:dev
```

删除本地分支/删除远程分支

```
$ git branch -d <name>
$ git push origin -d dev
```

克隆远程仓库到本地库。

例如使用ssh方法：

```
git clone git@github.com:xxx/xxx.git
```

对需要删除的文件、文件夹进行如下操作:

```
$ git rm test.txt
$ git rm -r test 
$ git commit -m "remove test.txt"
```

![git111](C:\Users\Administrator\Desktop\git111.PNG)
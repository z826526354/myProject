# 远程仓库 —— github

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
$ gitssh-keygen -t rsa
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


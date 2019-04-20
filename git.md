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

作为新版本存储到本地使3区一致

```
$ git commit -m 'add a P'
```


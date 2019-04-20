# version control system(VSC)
##### git

git初始化 —— 建立本地仓库

```
$ git init
```

##### 本地环境配置与密匙ssh配置

密匙ssh配置

```
$ ssh-Keygen
```

本地环境配置

```
$ git config --global user.name '***'
$ git config --global user.email example@gmail.com
```

本地分支与远程分支建立联系

```
$ git remote add origin yougithub
```

检查已有的配置信息

```
$ git config --list
```

将远程文件下载到本地库

```
$ git pull origin master
```

将代码成功提交到远程库

```
$ git push origin master
```


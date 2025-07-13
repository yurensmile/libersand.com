---
title: "n8n 初体验"
excerpt: "人生总是充满了未知，谁知道下一步会发生什么呢"
thumbnail: "/images/thumbnail/blog/向着新目标迈进.png"
author:
  name: 黄沙
  avatar: "https://github.com/yurensmile.png"
  url: "https://libersand.com"
publishedAt: "2025-07-09"
category: "AI"
tags:
  - AI
---
最近AI工作流挺火的，有n8n、coze、dify等，今天刚好看到一篇介绍n8n的文章，就顺手也自己安装体验了以下
## 安装
我本人电脑是windows，之前安装有wsl，所以就直接通过wsl 安装docker，然后docker安装 n8n
wsl 安装docker命令：
```bash
 snap install docker
 ```
Docker 安装n8n镜像，并启动：
```bash
docker volume create n8n_data
docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
```
安装完成后，访问localhost:5678 就可以了

## 体验
主要操作界面如下，可以添加触发源，以及执行的动作，惊讶的是，可以写一些条件语句，功能是挺丰富的，也支持自己开发的节点，后续深入学习，应用一个场景体验一下。
![操作界面](/images/thumbnail/blog/n8n初体验.png)

## 附录
- n8n github： https://github.com/n8n-io/n8n
- 官网地址：https://n8n.io/

## 感受
AI的浪潮下面，越来越多的提效东西出现，我最近的工作有一部分是做平台化的能力，把域内的能力进行抽象成节点，然后以画布的形式进行编排可视化，相当于把n8n的能力在某个细分的领域进行应用，整体来说，效果还用，不过应用的领域还是非常窄。
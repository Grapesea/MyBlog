---
title: Crypto笔记
date: 2025-07-01
layout: post
categories: [CTF]
mermaid: true 
mathjax: true
---

> ##### TIP
> Resource List:
>
> [CTF Wiki-Crypto](https://ctf-wiki.org/crypto/introduction/)
>
> [ZJU校巴](https://zjusec.com/)
>
> [CryptoHack](https://cryptohack.org/)
>
> [NSSCTF](https://www.nssctf.cn/index)
>
>
> {: .block-tip }

## RSA(复健)

### 校巴-84

> [校巴题源](https://zjusec.com/challenges/84)

第一关略，水

进入：

```
Here are partial source codes:
def sign(m, d, n):
    return pow(bytes_to_long(m), d, n)

def verify(c, e, n):
    return 'Plz give me the flag!'  == long_to_bytes(pow(bytes_to_long(c), e, n))
```







##  NSSCTF刷题

### 453-[鹤城杯2021]easy_crypto

```
公正公正公正诚信文明公正民主公正法治法治诚信民主自由敬业公正友善公正平等平等法治民主平等平等和谐敬业自由诚信平等和谐平等公正法治法治平等平等爱国和谐公正平等敬业公正敬业自由敬业平等自由法治和谐平等文明自由诚信自由平等富强公正敬业平等民主公正诚信和谐公正文明公正爱国自由诚信自由平等文明公正诚信富强自由法治法治平等平等自由平等富强法治诚信和谐
```

附件是这么个东西，很莫名其妙，检索一下发现是“核心价值观编码”.

于是下载Utools和核心价值观插件，解码得到结果是`flag{IlUqU9O5guX6YiITsRNPiQmbhNRjGuTP}`



### 454-[鹤城杯2021]流量取证




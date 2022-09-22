## swagger 如何描述数据?

```code
{
    "200":{
        "description": "OK",
        // 如果响应数据符合definitions中定义的数据结构
        // 找到definitions定义的数据结构，如果包含泛型,生成泛型

        "schema": {
            "originalRef": "ResultVO«boolean»",
            "$ref": "#/definitions/ResultVO«boolean»"
        }
    }
}
{
    parameters:[

    ]
}
```

## swagger 中的 schema 标识什么？

schema 表示数据的数据结构，数据结构为对象

## 待完成的功能？
1、搭建一个网页通过输入.json 文件和路径，生成 ts 代码； 
2、支持中翻英，生成 TS 名称；参考：https://www.jianshu.com/p/4d5086f0dc52
3、支持根据模板的请求方法，适用ts更改请求方法
4、搭建模拟的后台，支持数据mock，支持根据具体的数据结构生成对应的mock数据


## 如何加载一个网页icon


## 问题记录
1、 JSON格式转化的循环引用 参考文章： https://blog.csdn.net/qq_34917408/article/details/107406493
2、 
    api：http://wenwo-cloud-adaptor-biz-domain-community-dev.wenwo.cn/v2/api-docs   
    path:  /bizc/index/getNewAssetsOverviewData
    问题一、返回的interface ResultVO<T = string> data中为啥没有应用泛型？？
    问题二、可以简化一下返回的类型码？只是用到了IndexMenuDataRequest ，IndexMenuDataResponse ，ResultVO。。其他的为啥也返回了？？
    

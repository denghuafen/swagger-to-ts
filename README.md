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
2、支持中翻英，生成 TS 名称
3、支持根据模板的请求方法，适用ts更改请求方法
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

## swagger中的schema标识什么？
schema 表示数据的数据结构，数据结构为对象

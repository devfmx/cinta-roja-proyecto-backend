# Proyecto wall backend #

***Modelos***

**User**

```json
    {
        "full_name":"Maria candelaria de la asunsion",
	    "nickname":"Macaas",
        "image_profile":"https://i.ytimg.com/vi/TciuUxf_MK0/hqdefault.jpg"
    }
```

**Post**

```json
    {
        "post": "Que onda chavos",
        "comments": [],
    }
```

**Comment**

```json
    {
	    "comment":"Que buena publicacion",
	    "user":"5c351ec6cd09c7cb24333da6"
    }
```

***Resultado final de la petición***
```json
[
    {
        "_id": "5c351f1dfe5423cbe7e99743",
        "post": "Que onda chavos",
        "comments": [
            {
                "_id": "5c3523a34f3f77d044704546",
                "comment": "Que chido post",
                "user": {
                    "_id": "5c351ec6cd09c7cb24333da6",
                    "full_name": "Maria candelaria de la asunsion",
                    "nickname": "Macaas",
                    "image_profile": "https://i.ytimg.com/vi/TciuUxf_MK0/hqdefault.jpg",
                    "createdAt": "2019-01-08T22:05:58.015Z",
                    "updatedAt": "2019-01-08T22:05:58.015Z",
                    "__v": 0
                },
                "updatedAt": "2019-01-08T22:26:43.735Z",
                "createdAt": "2019-01-08T22:26:43.735Z"
            },
            {
                "_id": "5c3523ad4f3f77d044704547",
                "comment": "Jeje saludos",
                "user": {
                    "_id": "5c351ec6cd09c7cb24333da6",
                    "full_name": "Maria candelaria de la asunsion",
                    "nickname": "Macaas",
                    "image_profile": "https://i.ytimg.com/vi/TciuUxf_MK0/hqdefault.jpg",
                    "createdAt": "2019-01-08T22:05:58.015Z",
                    "updatedAt": "2019-01-08T22:05:58.015Z",
                    "__v": 0
                },
                "updatedAt": "2019-01-08T22:26:53.615Z",
                "createdAt": "2019-01-08T22:26:53.615Z"
            }
        ],
        "createdAt": "2019-01-08T22:07:25.855Z",
        "updatedAt": "2019-01-08T22:26:53.615Z",
        "__v": 0
    }
]

```
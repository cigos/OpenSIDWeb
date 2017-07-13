define({ "api": [
  {
    "type": "get",
    "url": "/artikel/headline",
    "title": "Mengambil artikel yang dijadikan sebagai headline",
    "name": "GetHeadline",
    "group": "Artikel",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\": 1,\n \"content\": [\n     {\n       \"id\": \"99\",\n     \"gambar\": \"1472228892Raja Lombok 1902.jpg\",\n     \"isi\": \"<p style=\\\"text-align: justify;\\\" align=\\\"center\\\">Sejarah telah mencatat bahwa Pulau Lombok pernah menjadi wilayah kekuasaan Kerajaan Karang Asem Bali yang berkedudukan di Cakranegara dengan seorang raja bernama Anak Agung Gde Jelantik. Berakhirnya <strong>kekuasaan</strong>\n     \"enabled\": \"1\",\n     \"tgl_upload\": \"2016-08-26 15:38:09\",\n     \"id_kategori\": \"999\",\n     \"id_user\": \"1\",\n     \"judul\": \"Sejarah Desa\",\n     \"headline\": \"1\",\n     \"gambar1\": \"1472229325490125_20121123041539.jpg\",\n     \"gambar2\": \"1472197089\",\n     \"gambar3\": \"1472197089\",\n     \"dokumen\": \"\",\n     \"link_dokumen\": \"\",\n     \"urut\": \"0\",\n     \"user\": {\n       \"id\": \"1\",\n       \"id_grup\": \"1\",\n       \"email\": \"admin@combine.or.id\",\n       \"last_login\": \"2017-05-01 13:04:01\",\n       \"active\": \"1\",\n       \"nama\": \"Administrator\",\n       \"company\": \"ADMIN\",\n       \"phone\": \"321\",\n       \"foto\": \"favicon.png\"\n     }\n   }\n ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "application/controllers/api/Artikel.php",
    "groupTitle": "Artikel"
  }
] });

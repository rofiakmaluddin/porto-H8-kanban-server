# Kanban App

List of available endpoints:
​
- `POST /register`
- `POST /login`
- `POST /googleLogin`
- `GET /tasks`
- `POST /tasks`
- `GET /tasks/userData`
- `GET /tasks/:id`
- `PUT /tasks/:id`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`

### POST /register

Request:

- data:

```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:

```json
{
  "id": "integer",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
}
```

### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
    "access_token": "jwt string",
}
```

### GET /tasks

description: 
  show all tasks

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
[
  {
      "id": 24,
      "title": "qwerty",
      "description": "asdfg",
      "category": "Backlog",
      "UserId": 7,
      "createdAt": "2021-02-13T14:43:24.512Z",
      "updatedAt": "2021-02-13T14:44:52.058Z",
      "User": {
          "id": 7,
          "firstName": "User",
          "lastName": "1",
          "email": "user1@mail.com",
          "password": "$2a$10$cRfdUv4uv9Ax/h.tm8.EYO/xKwMO4CyJSB5A4Y5laEStyELXm75Nq",
          "createdAt": "2021-02-10T13:23:46.741Z",
          "updatedAt": "2021-02-10T13:23:46.741Z"
      }
  },
  {
      "id": 16,
      "title": "Makan",
      "description": "Sarapan",
      "category": "Todo",
      "UserId": 13,
      "createdAt": "2021-02-13T02:20:09.637Z",
      "updatedAt": "2021-02-13T02:20:09.637Z",
      "User": {
          "id": 13,
          "firstName": "User",
          "lastName": "2",
          "email": "user2@mail.com",
          "password": "$2a$10$0N2P3U8K.qHbPU3j6Vcnfu8sLoyvJPcReg2uhpx5qeUBtk5SJShJK",
          "createdAt": "2021-02-12T06:06:25.055Z",
          "updatedAt": "2021-02-12T06:06:25.055Z"
      }
  }
]
```

### GET /tasks

description: 
  show user's tasks

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
[
  {
      "id": 24,
      "title": "qwerty",
      "description": "asdfg",
      "category": "Backlog",
      "UserId": 7,
      "createdAt": "2021-02-13T14:43:24.512Z",
      "updatedAt": "2021-02-13T14:44:52.058Z",
      "User": {
          "id": 7,
          "firstName": "User",
          "lastName": "1",
          "email": "user1@mail.com",
          "password": "$2a$10$cRfdUv4uv9Ax/h.tm8.EYO/xKwMO4CyJSB5A4Y5laEStyELXm75Nq",
          "createdAt": "2021-02-10T13:23:46.741Z",
          "updatedAt": "2021-02-10T13:23:46.741Z"
      }
  },
  {
      "id": 16,
      "title": "Makan",
      "description": "Sarapan",
      "category": "Todo",
      "UserId": 13,
      "createdAt": "2021-02-13T02:20:09.637Z",
      "updatedAt": "2021-02-13T02:20:09.637Z",
      "User": {
          "id": 13,
          "firstName": "User",
          "lastName": "2",
          "email": "user2@mail.com",
          "password": "$2a$10$0N2P3U8K.qHbPU3j6Vcnfu8sLoyvJPcReg2uhpx5qeUBtk5SJShJK",
          "createdAt": "2021-02-12T06:06:25.055Z",
          "updatedAt": "2021-02-12T06:06:25.055Z"
      }
  }
]
```

### POST /tasks

description: 
  add user's task

Request:

- headers: access_token (string)
- body: 
```json
{
    "title": "makan",
    "description": "makan nasi",
    "category": "Done",
    "UserId": 7
}
```

Response:

- status: 201
- body:

```json
{
    "id": 25,
    "title": "makan",
    "description": "makan nasi",
    "category": "Done",
    "UserId": 7,
    "updatedAt": "2021-02-13T15:03:01.876Z",
    "createdAt": "2021-02-13T15:03:01.876Z"
}
```

### PUT /tasks

description: 
  edit user's task

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required
- body: 
```json
{
    "title": "makan",
    "description": "makan nasi"
}
```

Response:

- status: 201
- body:

```json
{
    "id": 24,
    "title": "makan",
    "description": "makan nasi",
    "category": "Backlog",
    "UserId": 7,
    "createdAt": "2021-02-13T14:43:24.512Z",
    "updatedAt": "2021-02-13T15:07:13.498Z"
}
```

### PATCH /tasks

description: 
  change user's task category

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required
- body: 
```json
{
    "category": "Todo"
}
```

Response:

- status: 201
- body:

```json
{
    "id": 24,
    "title": "makan",
    "description": "makan nasi",
    "category": "Todo",
    "UserId": 7,
    "createdAt": "2021-02-13T14:43:24.512Z",
    "updatedAt": "2021-02-13T15:07:53.856Z"
}
```

### DELETE /tasks/:id

description: 
  delete task by taskId

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required

Response:

- status: 200
- body:

```json
{
    "message": "task has been deleted",
}
```


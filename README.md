
# Tạo các Database, Redis, Kafka cần thiết

## Chuẩn bị các File cho mongo chạy replica

- Tạo file mongo-keyfile và cập quyền

```bash
openssl rand -base64 756 > mongo-keyfile
chmod 600 mongo-keyfile                                                 
```

- Nếu chạy mongo thất bại vì không có quyền đọc file thì chạy lệnh này

```bash
chown 999:999 mongo-keyfile

```

## Vào container để khởi tạo replica

- Lệnh vào docker container

```bash
docker exec -it mongo_db mongosh -u root -p root123
```

- Lệnh tạo replica

```bash
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "localhost:27017" }
  ]
})
```

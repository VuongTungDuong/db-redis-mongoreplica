// Script khởi tạo MongoDB Replica Set với single node
rs.initiate({
  _id: 'rs0',
  members: [
    {
      _id: 0,
      host: 'localhost:27017'
    }
  ]
});

// Đợi replica set hoạt động
sleep(1000);

// Kiểm tra trạng thái
rs.status();
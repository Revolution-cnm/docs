# 使用MySQL

```mysql
USE myblog;

 show tables; 查看所有数据表


 insert into blogs (title,content,author,createdAt) values ('标题2','内容2','zhangsan',1234567890666); 插入数据

 select * from blogs;  查看blogs所有数据

 select id,author from blogs; 查询指定字段

 select * from blogs where author like '%zhang%' order by id desc; 查询指定指端并按id降序排序

 update blogs set title='标题3' where content='内容1'; 更新数据，设置 内容1 title为标题3

 delete from blogs where title='标题2'; 删除数据

 select * from blogs where state='1'; 查询状态值为1的数据

 update blogs set state='0' where author='zhangsan'; 改变state状态,实现软删除
```


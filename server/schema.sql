-- to store db tables:

-- commands for sql

--ddl
--first command : how to delete table
drop table users;

--next command : creation

create table users(
userid serial primary key,
created_at timestamp default current_timestamp,
name varchar(100) not null,
email varchar(100) unique not null,
password varchar (50) not null
);



---dml
-- get all data
select name, email from users
select * from users

-- create/ add
insert into users (name ,email, password) values ('razan' ,'razan@gmail.com','123123' )
insert into users (name ,email, password) values ('noor' ,'noor@gmail.com','123123' )
insert into users (name ,email, password) values ('zozo' ,'zozo@gmail.com','123123' )

 
--update
update users 
set name='mariam' , email='mariam@gmail.com'
where id=3

--delete
delete from users  where id=3
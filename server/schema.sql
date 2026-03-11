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




alter table users add column role text[]default array['user']

select * from users

alter table users add constraint check_role check(role<@ array['user','manager','emplyee'])



-----



create table categories (
catId serial primary key ,
name varchar (50) not null,
description text
)
select * from categories

alter table categories add column created_at timestamp default current_timestamp

create table menu(
menuId serial primary key,
name varchar (100) not null,
description text , 
price money,
quantity int,
image text,
cat_id int,
foreign key(cat_id) references categories(catId)
)

select * from menu
alter table menu add column created_at timestamp default current_timestamp


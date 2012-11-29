# 1.sql
# case class Tutor(id: String, email: String, name: String, location: String)

# --- !Ups

CREATE TABLE Tutor (
	id		varchar(10)  not null primary key,
	email	varchar(255) not null,
	name	varchar(255) not null				
);

# --- !Downs

DROP TABLE Tutor;

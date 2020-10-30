CREATE DATABASE synclink;

CREATE TABLE account (
    account_id serial primary key, 
    username varchar(30), 
    password varchar(200),
    email varchar(50),
    account_validation boolean,
    UNIQUE(email)
    );

CREATE TABLE users (
    user_id serial primary key, 
    user_firstname varchar(20), 
    user_lastname varchar(20), 
    user_phone varchar(11),
    user_location varchar(200),
    pref_start_work_hour TIME,
    pref_end_work_hour TIME,
    account_id integer references account(account_id));

CREATE TABLE user_schedule (
    user_schedule_id serial primary key, 
    event_title varchar(50), 
    start_date_time TIMESTAMP with time zone, 
    end_date_time TIMESTAMP with time zone, 
    r_rule varchar(120), 
    ex_dates varchar(120),
    user_id integer references users(user_id));

CREATE TABLE team_leader (
    team_leader_id serial primary key, 
    user_id integer references users(user_id));

CREATE TABLE team_members (
    team_member_id serial primary key, 
    user_id integer references users(user_id));

CREATE TABLE team (
    team_id serial primary key, 
    team_name varchar(25),
    date_created date,
    team_leader_id integer references team_leader(team_leader_id));

CREATE TABLE team_membership (
    team_member_id integer references users(user_id), 
    team_id integer references team(team_id), 
    primary key (team_member_id, team_id));

CREATE TABLE team_schedule (
    team_schedule_id serial primary key, 
    event_title varchar(50), 
    start_date_time TIMESTAMP with time zone, 
    end_date_time TIMESTAMP with time zone, 
    r_rule varchar(120), 
    ex_dates varchar(120),
    team_id integer references team(team_id));

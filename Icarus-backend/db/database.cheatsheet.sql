CREATE DATABASE IF NOT EXISTS icaro;

USE icaro;

DROP TABLE IF EXISTS wagon;
DROP TABLE IF EXISTS ticket;
DROP TABLE IF EXISTS userAccount;
DROP TABLE IF EXISTS megaUser;
DROP TABLE IF EXISTS superAdmin;

CREATE TABLE superAdmin (
	id INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(12) NOT NULL,
    pass VARCHAR(12) NOT NULL,
    fName VARCHAR(50) NOT NULL,
    lName VARCHAR(50) NOT NULL,
    accountType VARCHAR(3) NOT NULL DEFAULT "SAD",
    createdDate timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

CREATE TABLE megaUser (
	id INT NOT NULL AUTO_INCREMENT,
    serialKey VARCHAR(80) NOT NULL UNIQUE,
    userName VARCHAR(12) NOT NULL UNIQUE,
    pass VARCHAR(12) NOT NULL,
    fName VARCHAR(50) NOT NULL,
    lName VARCHAR(50) NOT NULL,
    accountType VARCHAR(3) NOT NULL DEFAULT "MUS",
    controlAccess BOOLEAN DEFAULT TRUE,
    createdDate VARCHAR(10),
    deletedDate VARCHAR(10),
    isDeleted BOOLEAN DEFAULT FALSE,
    isActive BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (id)
);

CREATE TABLE userAccount (
	id INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(12) NOT NULL UNIQUE,
    pass VARCHAR(12) NOT NULL,
    fName VARCHAR(50) NOT NULL,
    lName VARCHAR(50) NOT NULL,
    accountType VARCHAR(3) NOT NULL,
    controlAccess BOOLEAN DEFAULT FALSE,
    createdDate VARCHAR(10),
    deletedDate VARCHAR(10),
    isDeleted BOOLEAN DEFAULT FALSE,
    isActive BOOLEAN DEFAULT TRUE,
    megaUser_id INT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_megaUser FOREIGN KEY (megaUser_id) REFERENCES megaUser(id)
);

CREATE TABLE ticket (
	id INT NOT NULL AUTO_INCREMENT,
	createdDate VARCHAR(10),
	megaUser_id INT NOT NULL,
    user_id INT,
	PRIMARY KEY (id),
    CONSTRAINT fk_tkt_megaUser FOREIGN KEY (megaUser_id) REFERENCES megaUser(id),
    CONSTRAINT fk_tkt_user FOREIGN KEY (user_id) REFERENCES userAccount(id)
);

CREATE TABLE wagon (
	id INT NOT NULL AUTO_INCREMENT,
	wagonNumValue VARCHAR(80) UNIQUE,
    tareValue DOUBLE,
    rawValue DOUBLE,
    netValue DOUBLE,
    seal1 VARCHAR(80),
    seal2 VARCHAR(80),
    seal3 VARCHAR(80),
    seal4 VARCHAR(80),
    seal5 VARCHAR(80),
    seal6 VARCHAR(80),
    seal7 VARCHAR(80),
    seal8 VARCHAR(80),
    seal9 VARCHAR(80),
    seal10 VARCHAR(80),
    seal11 VARCHAR(80),
    seal12 VARCHAR(80),
    ticket_id INT NOT NULL,
	PRIMARY KEY (id),
    CONSTRAINT fk_ticket FOREIGN KEY (ticket_id) REFERENCES ticket(id)
);

INSERT INTO megaUser(serialKey, userName, pass, fName, lName, accountType, controlAccess, createdDate, deletedDate, isDeleted, isActive)
VALUES ("1234-5678-9012", "testmega", "testing", "megauser", "testing", "MUS", true, "2023-11-14", "", false, true);

-- Creating Schema for mini-instagram
-- User, Photos, Likes, Comments, Followers, Tags

-- ---------------------------------------------------------------------
-- USER
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users
(
    id         INT AUTO_INCREMENT NOT NULL,
    username   VARCHAR(70)        NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT NOW(),

    -- Important attributes *** *** ***
    PRIMARY KEY (id)
);

-- Insert a little data for future :)
INSERT INTO users(username)
VALUES ('Tahazzot'),
       ('Stephanie'),
       ('Jara'),
       ('Alex'),
       ('Zyan');


-- ---------------------------------------------------------------------
-- PHOTOS
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS photos
(
    id         INT AUTO_INCREMENT,
    user_id    INT          NOT NULL,
    image_url  VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),

    -- IMPORTANT ATTR:
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

INSERT INTO photos(user_id, image_url)
VALUES (1, 'tahazzot-profile.jpg'),
       (2, 'stephanie-nice-photo.png');

SELECT users.username, p.image_url
FROM users
         LEFT JOIN photos p on users.id = p.user_id
WHERE p.image_url IS NULL
ORDER BY users.id;

-- ---------------------------------------------------------------------
-- COMMENTS
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS comments
(
    id           INT AUTO_INCREMENT PRIMARY KEY NOT NULL UNIQUE,
    comment_body VARCHAR(255)                   NOT NULL,
    user_id      INT                            NOT NULL REFERENCES users (id),
    photo_id     INT                            NOT NULL REFERENCES photos (id),
    created_at   TIMESTAMP DEFAULT now()
);

-- ---------------------------------------------------------------------
-- LIKES
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS likes
(
    user_id    INT NOT NULL,
    photo_id   INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),

    -- IMPORTANT ATTR:
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (photo_id) REFERENCES photos (id),
    PRIMARY KEY (user_id, photo_id)
);


-- ---------------------------------------------------------------------
-- Follow
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS follow
(
    follower_id INT NOT NULL,
    following_id INT NOT NULL,
    FOREIGN KEY (follower_id) REFERENCES users(id),
    FOREIGN KEY (following_id) REFERENCES users(id),
    PRIMARY KEY (follower_id, following_id)
);


-- ---------------------------------------------------------------------
-- Tags
-- ---------------------------------------------------------------------



show tables;
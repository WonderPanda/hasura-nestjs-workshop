CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;

CREATE OR REPLACE FUNCTION set_current_timestamp_updated_at()
    RETURNS TRIGGER AS
$$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE users
(
    id            SERIAL      NOT NULL,
    email         citext      NOT NULL UNIQUE,
    display_name  TEXT,
    password_hash TEXT        NOT NULL,
    coins         INT         NOT NULL DEFAULT 50
        CONSTRAINT non_negative_balance CHECK (coins >= 0),
    created_at    timestamptz NOT NULL DEFAULT NOW(),
    updated_at    timestamptz NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id)
);

CREATE VIEW public_users AS
SELECT id, display_name
FROM users;

CREATE TRIGGER set_users_updated_at
    BEFORE UPDATE
    ON users
    FOR EACH ROW
EXECUTE PROCEDURE set_current_timestamp_updated_at();


CREATE TABLE items
(
    id          SERIAL      NOT NULL,
    user_id     INT         NOT NULL REFERENCES users (id),
    name        TEXT        NOT NULL,
    description TEXT,
    secret      TEXT        NOT NULL,
    cost        INT         NOT NULL DEFAULT 0,
    created_at  timestamptz NOT NULL DEFAULT NOW(),
    updated_at  timestamptz NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id)
);

CREATE VIEW public_items AS
SELECT id, user_id, name, description, cost, created_at, updated_at
FROM items;

CREATE TRIGGER set_items_updated_at
    BEFORE UPDATE
    ON items
    FOR EACH ROW
EXECUTE PROCEDURE set_current_timestamp_updated_at();

CREATE TABLE purchases
(
    user_id       INT         NOT NULL REFERENCES users (id),
    item_id       INT         NOT NULL REFERENCES items (id),
    purchase_cost INT         NOT NULL,
    purchased_at  timestamptz NOT NULL DEFAULT NOW(),
    PRIMARY KEY (user_id, item_id)
);
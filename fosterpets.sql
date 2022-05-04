CREATE TABLE pets (
    pet_id INT AUTO_INCREMENT,
    pet_name TEXT,
    age INT,
    breed TEXT,
    species TEXT,
    gender TEXT,
    is_hypoallergenic BOOLEAN,
    is_kid_friendly BOOLEAN,
    created_at DATETIME,
    updated_at DATETIME,
    PRIMARY KEY (pet_id)
)

SELECT * FROM pets


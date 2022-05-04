import connection from "./db.js";

//All of the below code has been refactored into the method below {createPet}
// const insertQuery = `INSERT INTO Pets (pet_name, age, breed, species, gender, is_hypoallergenic, is_kid_friendly)
// VALUES (?,?,?,?,?,?,?)`

// const input = ["Xave", 8, "Yorkie", "Dog", "male", true, true ]

// const [rows, fields] = await connection.promise().query(insertQuery, input)

// console.log("This is all my rows", rows)

//refactoring into an object method
//create a method so that we can insert any pet w/o replicating code

export const createPet = async (pet) => {
  const name = pet.name,
    age = pet.age,
    breed = pet.breed,
    species = pet.species,
    gender = pet.gender,
    is_kid_friendly = pet.is_kid_friendly,
    is_hypoallergenic = pet.is_hypoallergenic;

  const insertQuery = `INSERT INTO Pets (pet_name, age, breed, species, gender, is_hypoallergenic, is_kid_friendly)
    VALUES (?,?,?,?,?,?,?)`;

  const input = [
    name,
    age,
    breed,
    species,
    gender,
    is_hypoallergenic,
    is_kid_friendly,
  ];

  try {
    const [results] = await connection.promise().query(insertQuery, input);
    return results;
  } catch (error) {
    console.error(error);
  }
};

//connection.end()

//get all pets
export const getPets = async () => {
  const selectQuery = "SELECT * FROM pets";
  // this is the async await
  try {
    const [results] = await connection.promise().query(selectQuery);
    return results;
  } catch (error) {
    console.log(error);
  }

  return connection
    // .promise()
    .query(selectQuery)
    .then((results) => {
      return results[0];
    })
    .catch((err) => console.error(err));
};

// const newPet = {
//     name : "Poppy",
//     age : 1,
//     breed : "Domestic medium hair",
//     species : "Feline",
//     gender : "Female",
//     is_kid_friendly : true,
//     is_hypoallergenic : false
// }
//getting a list of all pets
//console.log("all the pets", await getPets())
//adding a new pet
//console.log("This is the new pet", await createPet(newPet))

//connection.end()

const db = require('../../models');

const createUserInDb = async ({user_name,password,phone}) => {
    try{
      const user = await db.User.create({ user_name,password,phone });
      console.log(`user is added to the table : ${user}`);
      return user
    }
    catch (err) {
      throw new Error(err)
    }
  }

  const findByPropertys = async (attr) => {
    try {
      const rows = await db.User.findAll({
        attributes: [...attr]
      })
      return rows
    } 
    catch (err) {
      throw new Error(err)
    }
  }

  const findByKeyValue = async(atrr,val)=> {
    try {
      const row = await db.User.findAll({
        where: {
          [atrr]: val
        }
      });
      return row
    } 
    catch (err) {
      throw new Error(err)
    }
  }
module.exports = {
  createUserInDb,
  findByPropertys,
  findByKeyValue
}


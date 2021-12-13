const {
  createDocuments,
  getAll: getAllTodos,
  deleteDocument,
  updateDocuments,
} = require("../db/managerData");

/**
 *
 * @returns {[{text: string,  id: number},{text: string,  id: number},{text: string,  id: number} ]}
 */
async function getAll() {
  try {
    const data = await getAllTodos({ collectionName: "todos" });
    return data;
  } catch (error) {
    console.log(error);
  }
}

/**
 *
 * @returns {[{text: string,  id: number},{text: string,  id: number},{text: string,  id: number} ]}
 */

async function add(data) {
  let mergeData;
  try {
    const newData = await createDocuments({
      data: {
        ...data,
        isCompleted: false,
      },
      collectionName: "todos",
    });
    mergeData = {
      id: newData,
      ...{
        ...data,
        isCompleted: false,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return mergeData;
}

/**
 *
 * @returns {[{text: string,  id: number},{text: string,  id: number},{text: string,  id: number} ]}
 */
async function del({ ids }) {
  ids.map(async (id) => {
    try {
      const delData = await deleteDocument({ collectionName: "todos", id: id });
    } catch (error) {
      console.log(error);
    }
  });
}
/**
 *
 * @returns {[{text: string,  id: number},{text: string,  id: number},{text: string,  id: number} ]}
 */

async function update({ data, ids }) {
  var returnData = [];
  ids.map(async (id) => {
    const updateData = updateDocuments({
      collectionName: "todos",
      id: id,
      data: data,
    });
    const mergeData = { ...data, id: id };
    returnData.push(mergeData);
  });
  console.log(returnData);
  return returnData;
}

module.exports = {
  getAll,
  add,
  del,
  update,
};

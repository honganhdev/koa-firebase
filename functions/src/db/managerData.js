const admin = require("firebase-admin");
const serviceAccount = require("../config/serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

async function createDocuments({ data, collectionName }) {
  const res = await db.collection(`${collectionName}`).add(data);
  return res.id;
}

async function updateDocuments({ collectionName, id, data }) {
  const ref = await db.collection(collectionName).doc(id);
  let dataUpdate;
  try {
    await ref.update(data);
  } catch (error) {
    console.log(error);
  }
}

async function deleteDocument({ collectionName, id }) {
  // [START firestore_data_delete_doc]
  const res = await db.collection(collectionName).doc(id).delete();
}

async function getAll({ collectionName }) {
  const dataRef = db.collection(collectionName);
  const snapshot = await dataRef.get();
  let data = [];
  snapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
}

module.exports = {
  createDocuments,
  deleteDocument,
  getAll,
  updateDocuments,
};

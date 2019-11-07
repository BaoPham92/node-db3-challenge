const db = require('../data/dbConfig');

// * ADD A STEP
const add = (table, scheme) => db(table).insert(scheme);

// * ADD STEP
const addStep = (data, id) => db('steps').insert(data);

// * FIND BY TABLE INPUT
const find = table => db(table);

// * FIND BY TABLE && ID
const findById = (table, id) => db(table).where({ id }).first();

// * FIND BY TABLE BY ID ASCENDING
const findSteps = (table, id) => db(table).where({ id }).orderBy('step_number', 'ASC');

// * DELETE / REMOVE TABLE
const remove = (table, id) => db(table).where({ id }).delete()

// * UPDATE GIVEN TABLE NAME BY ID, AND UPDATES.
const update = (table, id, udpates) => db(table).where({ id }).update(udpates);

module.exports = {
    add,
    addStep,
    find,
    findById,
    findSteps,
    remove,
    update
}
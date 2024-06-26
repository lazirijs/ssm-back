const db = require("../database/payments");

exports.create = async (req) => {
    try {
        return await db.create(req.body, req.user);
    } catch (error) {
        return error;
    }
};

exports.search = async (req) => {
    try {
        return await db.search(req.body, req.query);
    } catch (error) {
        return error;
    }
};

exports.get = {
    // all: async (column, value) => {
    //     try {
    //         return await db.get.all(column, value);
    //     } catch (error) {
    //         return error;
    //     }
    // },
    one: async (payment) => {
        try {
            return await db.get.one(payment);
        } catch (error) {
            return error;
        }
    },
    school: async (data) => {
        try {
            return await db.get.school(data);
        } catch (error) {
            return error;
        }
    },
};
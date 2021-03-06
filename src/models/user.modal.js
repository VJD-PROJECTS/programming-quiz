const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const User = new Schema({
    Name: {
        type: String
    },
    Role: {
        type: Number
    },
    Email: {
        type: String
    },
    PasswordHash: {
        type: String
    },
    CreatedDate: {
        type: Date
    },
    SaltRound: {
        type: String
    }
});

module.exports = mongoose.model("User", User);

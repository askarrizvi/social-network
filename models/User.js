const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//Main schema for the User model
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

//Virtual to track how many ufriends a user has
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });
  

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;
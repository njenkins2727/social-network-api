const { Schema, model, now } = require('mongoose');

//reaction schema 
const reactionSchema = new Schema ({
    body: { 
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    username: {  
        type: String,
        required: true,
       },
},
{
    timestamps: true,
})

// Schema to create a thoughts model
const thoughtsSchema = new Schema(
  {
    text: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    username: { 
        type: String,
        required: true,
    },
    reaction: [ reactionSchema ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true, // created at 
    id: false,
  }
);


//schema setting 
thoughtsSchema.virtual('reactionCount').get(function(){
    return this.reaction.length;
})

const Thought = model('Thought', thoughtsSchema);

module.exports = Thought;

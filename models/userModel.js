import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gmail: {
    type: String,
    unique: true, 
    sparse: true, 
  },
  password: { 
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model("User2", userSchema);

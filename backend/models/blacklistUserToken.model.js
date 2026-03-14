import mongoose from "mongoose"
const blacklistUserTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    expires: 86400
    }
})
const BlacklistUserTokenModel = mongoose.model("BlacklistUserToken", blacklistUserTokenSchema);
export default BlacklistUserTokenModel;
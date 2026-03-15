import mongoose from "mongoose"
const blacklistCaptainTokenSchema = new mongoose.Schema({
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
const BlacklistCaptainTokenModel = mongoose.model("BlacklistCaptainToken", blacklistCaptainTokenSchema);
export default BlacklistCaptainTokenModel;
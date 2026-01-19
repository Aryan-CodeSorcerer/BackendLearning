import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=new Schema(
    {
        videoFile:{
            type:String ,//c url
            required:true
        },
        thumbnail:{
             type:String ,//c url
            required:true
        },
        title:{
             type:String ,
            required:true
        },
        description:{
             type:String ,
            required:true
        },
        duration:{
             type:Number ,//c url
            required:true
        },
        views:{
             type:Number ,//c url
            default:0
        },
        isPublished:{
             type:Boolean ,//c url
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }

}
,{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate )
export const Video=mongoose.model("Video",videoSchema)
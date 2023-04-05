const Content = require("../models/content-model");
const User = require("../models/user-model");
const mongoose = require("mongoose");



/* Start Guest Controllers */
    const allContents = async (req, res) => {
        try {
            const contents = await Content.find({}).sort('-createdAt');
            res.status(200).json({
                "contents": contents
            });
        } catch (error) {
            res.json({
                "error": error
            });
        }
    }
/* End Guest Controllers */

/* Start Authenticated Controllers */
    const getContent = async (req, res) => {
        const { id } = req.params;
        
        try {
            const content = await Content.findById(id);
            const countResult = await content.count({});
            res.status(200).json({
                "content":content,
                "submittions_count": countResult
            })
        } catch (error) {
            res.json({
                "error": error
            });
        }
    }

    const getUserContents = async (req, res) => {
        const { userId } = req.params;
        
        try {
            const contents = await Content.find({ createdBy: userId }).sort('-createdAt');
            res.status(200).json({
                "contents": contents
            })
        } catch (error) {
            res.json({
                "error": error
            });
        }
    }

    const submitToContent = async (req, res) => {
        const { id } = req.params;
        const { reference } = req.body;

        try {
            const user = await User.findById(req.user.id);

            const content = await Content.findOneAndUpdate(
                {
                    _id: id
                }, 
                { 
                    $push: { 
                        submit: {
                            reference,
                            user: user
                        }
                    }
                }
            )
            
            user.submittions.push(content);
            user.score += content.points;

            user.save();

            res.status(200).json({
                "updated_content": content,
                "submitted_by": {
                    "personal_information": user.personalInformation,
                    "email": user.email,
                    "score": user.score,
                    "submittions": user.submittions
                }
            })
        } catch (error) {
            res.json({
                "error": error
            });
        }
    }

    const submittionsCount = async (req, res) => {
        const { id } = req.params;
        
        try {
            const content = await Content.findById(id);
            const countResult = await content.count({});
            
            res.status(200).json({
                "submittions_count": countResult
            })
        } catch (error) {
            res.json({
                "error": error
            });
        }
    }
/* End Authenticated Controllers */

/* Start Admin Controllers */
    const createContent = async (req, res) => {
        // const {
        //     title,
        //     points,
        //     tags,
        //  } = req.body;

        // const {
        //     text,
        //     media,
        //     links
        // } = req.body.body;
        let data = req.body

        try {
            const user = await User.findById(req.user.id);
            data.createdBy = user
            
            const content = await Content.create(data);
            user.contents.push(content)
            user.save()
            
            res.status(200).json({
                "created_content": content
            })
        } catch (error) {
            res.json({
                "error": error
            });
        }
    }

    const updateContent = async (req, res) => {
        const { id } = req.params;
        
        try {
            const content = await Content.findByIdAndUpdate(id, req.body);

            res.status(200).json({
                "updated_content": content
            })
        } catch (error) {
            res.json({
                "error": error
            });
        }
    }

    const deleteContent = async (req, res) => {
        const { id } = req.params;
        
        try {
            const content = await Content.findById(id);
            
            if(content && content.createdBy.toString() === req.user.id){
                const user = await User.findById(req.user.id);
                user.contents = user.contents.filter((contentId)=>{
                    return contentId.toString() !== content._id.toString()
                })
                user.save()
                await Content.deleteOne(content);
                res.status(200).json({
                    "deleted_content": true
                })
            }
            res.status(200).json({
                "error": "smth went wrong"
            })

        } catch (error) {
            res.json({
                "error": error
            });
        }
    }
/* End Admin Controllers */

module.exports = {
    // GET
    allContents,
    getContent,
    getUserContents,
    submittionsCount,

    // POST
    createContent,
    
    // PUT
    updateContent,
    submitToContent,
    
    // DELETE
    deleteContent,
}
import News from "../models/news.model.js";
import User from "../models/user.model.js";

export const getAllNews = async (req, res) => {
     try {
          const news = await News.find().populate('author', 'name avatar').sort({ createdAt: -1 });
          res.status(200).json(news);
     } catch (error) {
          res.status(500).json({ message: 'Failed to fetch news', error: error.message });
     }
}

export const postNews = async (req, res) => {
     try {
       const { title, description, thumbnail, author } = req.body;
   
       // Validate that the required fields are present
       if (!title || !description || !thumbnail || !author) {
         return res.status(400).json({ message: 'All fields are required.' });
       }
   
       // Check if the author ID exists in the User collection
       const validAuthor = await User.findById(author);
       if (!validAuthor) {
         return res.status(400).json({ message: 'Invalid author ID.' });
       }
   
       // Create a new news document
       const news = new News({
         title,
         description,
         thumbnail,
         author: validAuthor._id, // Use the valid author's ID
       });
   
       // Save the news document to the database
       await news.save();
   
       // Respond with the created news article
       res.status(201).json({ message: 'News posted successfully!', news });
     } catch (error) {
       // Handle any errors that occur during the process
       res.status(500).json({ message: 'Failed to post news', error: error.message });
     }
   };
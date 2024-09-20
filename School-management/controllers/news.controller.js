const News = require('../models/News.model');
const cloudinary = require('../cloudinary');

// Helper function to upload image to Cloudinary using a buffer
const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'news' },
      (error, result) => {
        if (error) {
          reject(new Error('Cloudinary upload failed'));
        } else {
          resolve(result);
        }
      }
    );
    stream.end(fileBuffer);
  });
};

// Create News
exports.createNews = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required' });
    }

    // Upload image to Cloudinary directly from memory
    const result = await uploadToCloudinary(req.file.buffer);

    const news = new News({
      title,
      description,
      image: result.secure_url,
      datetime: new Date(),
    });

    await news.save();
    res.status(201).json({ message: 'News created successfully', news });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get All News
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ datetime: -1 });
    res.status(200).json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Single News
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.status(200).json(news);
  } catch (error) {
    console.error(error);
    res.status500().json({ message: 'Server error' });
  }
};

// Update News
exports.updateNews = async (req, res) => {
  try {
    const { title, description } = req.body;
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }

    if (req.file) {
      // If a new image is uploaded, update the image on Cloudinary directly from memory
      await cloudinary.uploader.destroy(news.image);
      const result = await uploadToCloudinary(req.file.buffer);
      news.image = result.secure_url;
    }

    news.title = title || news.title;
    news.description = description || news.description;
    news.datetime = new Date();

    await news.save();
    res.status(200).json({ message: 'News updated successfully', news });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete News
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }

    // Destroy the image on Cloudinary
    await cloudinary.uploader.destroy(news.image);

    // Delete the news item from the database
    await News.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: 'News deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

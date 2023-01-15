const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
    try {
      const users = await BookService.getAll();
      return res.status(200).json(users);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Ocorreu um erro' });
    }
  };

const getBookById = async (req, res) => {
    const { id } = req.params;
    const book = await BookService.getById(Number(id))
    if (!book) {
        return res.status(404).json({message: 'not found'})
    }
    return res.status(200).json(book)
}

const addBookDb = async (req, res) => {
    const { title, author, pageQuantity } = req.body
    const newBook = await BookService.insertBook(title,author,pageQuantity);
    if(!newBook){
        return res.status(400).json({message: 'errorrorororo'})
    }
    return res.status(201).json(newBook);
}

module.exports = {
    getAll,
    getBookById,
    addBookDb,
}
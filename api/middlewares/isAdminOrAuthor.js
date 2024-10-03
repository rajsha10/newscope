// Middleware to check if the user is an admin/author
const isAdminOrAuthor = (req, res, next) => {
     const { role } = req.body; // Mocked role from request body
     if (role !== 'admin' && role !== 'author') {
       return res.status(403).json({ message: 'Access Denied: Only admins and authors can post news.' });
     }
     next();
   };
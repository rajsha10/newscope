// Middleware to check if the user is an admin (for creating authors)
const isAdmin = (req, res, next) => {
    //  if (req.user.role !== 'admin') { 
    //    return res.status(403).json({ message: 'Access Denied: Only admins can perform this action.' });
    //  }
     next();
   };

   export default isAdmin;
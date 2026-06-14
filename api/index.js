const app = require('../server.js');
const { connectDB, initializeDatabase } = require('../database.js');

module.exports = async (req, res) => {
    try {
        // Ensure the database connection is resolved before handing off to Express
        await connectDB();
        await initializeDatabase();
    } catch (err) {
        res.status(500).json({ error: `Database Connection Error: ${err.message}` });
        return;
    }
    
    // Hand the request to Express
    return app(req, res);
};

const db = require('../models/db');

exports.addSchool = async (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    // Basic validation
    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const [result] = await db.execute(
            'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
            [name, address, latitude, longitude]
        );
        res.status(201).json({ message: "School added successfully", schoolId: result.insertId });
    } catch (error) {
        console.error('Database Error: ', error);  // Log the error to the console
        res.status(500).json({ error: "Database error" });
    }
};


exports.listSchools = async (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: "Latitude and longitude are required" });
    }

    try {
        const [schools] = await db.execute('SELECT * FROM schools');
        const userLat = parseFloat(latitude);
        const userLong = parseFloat(longitude);

        // Calculate distance using the Haversine formula
        const haversineDistance = (lat1, lon1, lat2, lon2) => {
            const toRad = x => (x * Math.PI) / 180;
            const R = 6371; // Radius of Earth in kilometers
            const dLat = toRad(lat2 - lat1);
            const dLon = toRad(lon2 - lon1);
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        };

        schools.sort((a, b) => {
            const distanceA = haversineDistance(userLat, userLong, a.latitude, a.longitude);
            const distanceB = haversineDistance(userLat, userLong, b.latitude, b.longitude);
            return distanceA - distanceB;
        });

        res.status(200).json(schools);
    } catch (error) {
        res.status(500).json({ error: "Database error" });
    }
};

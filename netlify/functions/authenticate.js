const { Client } = require('pg');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method not allowed' };
    }

    const { username, password } = JSON.parse(event.body);

    const client = new Client({
        connectionString: process.env.DATABASE_URL
    });

    try {
        await client.connect();

        // Chercher l'utilisateur dans la BD
        const result = await client.query(
            'SELECT * FROM users WHERE username = $1 AND password = $2',
            [username, password]
        );

        await client.end();

        if (result.rows.length > 0) {
            // Succès
            return {
                statusCode: 200,
                body: JSON.stringify({ 
                    success: true, 
                    token: "token_" + username + "_" + Date.now() 
                })
            };
        } else {
            // Mauvais identifiant
            return {
                statusCode: 401,
                body: JSON.stringify({ success: false, message: "Login incorrect" })
            };
        }
    } catch (error) {
        console.error('Erreur BD:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: "Erreur serveur" })
        };
    }
};
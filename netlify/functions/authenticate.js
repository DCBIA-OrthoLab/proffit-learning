const { Client } = require('pg');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method not allowed' };
    }

    const { username, password } = JSON.parse(event.body);

    console.log('=== DEBUG ===');
    console.log('DATABASE_URL exists:', !!process.env.NETLIFY_DATABASE_URL);
    console.log('DATABASE_URL length:', process.env.NETLIFY_DATABASE_URL?.length);
    console.log('Username:', username);

    const client = new Client({
        connectionString: process.env.NETLIFY_DATABASE_URL
    });

    try {
        console.log('Connecting to database...');
        await client.connect();
        console.log('✅ Connected to database!');

        // Chercher l'utilisateur dans la BD
        console.log('Searching for user:', username);
        const result = await client.query(
            'SELECT * FROM users WHERE username = $1 AND password = $2',
            [username, password]
        );

        console.log('Query result rows:', result.rows.length);

        await client.end();

        if (result.rows.length > 0) {
            // Succès
            console.log('✅ Login successful for user:', username);
            return {
                statusCode: 200,
                body: JSON.stringify({ 
                    success: true, 
                    token: "token_" + username + "_" + Date.now() 
                })
            };
        } else {
            // Mauvais identifiant
            console.log('❌ Wrong credentials for user:', username);
            return {
                statusCode: 401,
                body: JSON.stringify({ success: false, message: "Login incorrect" })
            };
        }
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.error('Full error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: "Erreur serveur: " + error.message })
        };
    }
};
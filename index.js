// Bring in the http module
import http from 'http';
// Import CRUD operations
import {
    createPost,
    deletePost,
    getPosts,
    getPostById,
    updatePost,
} from './crudOperations.js';
// Import utility functions
import {regex, returnErrorWithMessage} from './utils.js';

// Base resource
const resource = '/posts';

// Request handler to handle all requests
const requestHandler = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'POST',
        'OPTIONS',
        'GET',
        'PUT',
        'DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    const {method, url} = req;
    if (url === resource) {
        if (method === 'GET') return await getPosts(req, res);
        if (method === 'POST') return await createPost(req, res);
        else return returnErrorWithMessage(res, 405, 'Method Not Allowed');
    } else if (regex(resource).test(url)) {
        if (method === 'GET') return await getPostById(req, res);
        if (method === 'PUT') return await updatePost(req, res);
        if (method === 'DELETE') return await deletePost(req, res);
        else return returnErrorWithMessage(res, 405, 'Method Not Allowed');
    } else {
        return returnErrorWithMessage(res, 404, 'Resource Not Found');
    }
};
// Ce a server
const server = http.createServer(requestHandler);
// Set the port
const port = 3000;
// Start the server
server.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
);

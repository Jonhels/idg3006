const { Server } = require("socket.io");

let io; // Variable to hold the Socket.IO instance

// Function to set up WebSocket
const setupWebSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: [
                "http://localhost:3000",
                "http://localhost:4000",
                process.env.FRONTEND_URL,
                process.env.FRONTEND_URL_PROD,
            ],
            credentials: true,
        },
    });

    // Handle WebSocket connections
    io.on("connection", (socket) => {
        console.log("New WebSocket client connected:", socket.id);

        // Handle disconnection
        socket.on("disconnect", () => {
            console.log("Client disconnected:", socket.id);
        });
    });

    return io; // Return the io instance, this is used in the server.js file
};

// Export the setup function and the io instance for use in controller 
module.exports = { setupWebSocket, io };
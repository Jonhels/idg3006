dotenv = require("dotenv");

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Successfully connected to database: ${connection.connection.host}`,
    );
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};

module.exports = dbConnect;

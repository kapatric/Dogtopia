import mongoose from "mongoose";
import chalk from "chalk";

mongoose.set("returnOriginal", false);

mongoose
  .connect("mongodb://127.0.0.1:27017/Dogtopia")
  .catch((error) => {
    console.log(`Error connection go MongoDB: ${error.message}`);
  });

mongoose.connection.on('disconnected', () => {
  console.log(chalk.bold('Disconnected from MongoDB!'));
});
mongoose.connection.on('error', error => {
  console.log(chalk.red(`MongoDB connection error: ${error}`));
});

  export default mongoose.connection;
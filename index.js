const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
//this is how we can access the image-bucket
//but we need a real account to git hte access.

// const filename = "lab17-17";
// const fileContent = fs.readFileSync(filename);
// const params = {
//   Bucket: process.env.AWS_BUCKET_NAME,
//   Key: `${filename}.jpg`,
//   Body: fileContent,
// };

export const handler = async (event) => {
  const MyResponse = JSON.stringify(event);
  console.log("every thing is good ", MyResponse);
  return {
    statusCode: 200,
    body: `All is working \n ${MyResponse}`,
  };
};

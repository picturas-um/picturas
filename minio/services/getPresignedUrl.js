const s3_docker = require("./s3ClientDocker");
const s3_host = require("./s3ClientHost");

async function getPresignedUrlDocker(userId, projectId, stage, imageName) {
  const params = {
    Bucket: `user-${userId}`,
    Key: `${projectId}/${stage}/${imageName}`,
    Expires: 60 * 60,
  };

  try {
    return await s3_docker.getSignedUrlPromise("getObject", params);
  } catch (error) {
    console.error("Erro ao gerar URL presignada:", error.message);
    throw error;
  }
}

async function getPresignedUrlHost(userId, projectId, stage, imageName) {
  const params = {
    Bucket: `user-${userId}`,
    Key: `${projectId}/${stage}/${imageName}`,
    Expires: 60 * 60,
  };

  try {
    const url = await s3_host.getSignedUrlPromise("getObject", params);
    return url.replace("http://minio:9000", process.env.FRONTEND_URL + '/minio');
  } catch (error) {
    console.error("Erro ao gerar URL presignada:", error.message);
    throw error;
  }
}

module.exports = { getPresignedUrlDocker, getPresignedUrlHost };

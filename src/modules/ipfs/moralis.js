// npm install moralis

const Moralis = require("moralis").default;
const fs  = require("fs");

/**
 * Uploads a file through moralis api
 * @param {String} file Local path to file to upload
 * @returns Link to file
 */
const ipfs_moralis = async (file) => {
    await Moralis.start({
        apiKey: "7XRDioXwk4U8n5KCyWIIckzYSycgLfMXh4NKbgpNqwEhjAHcH9xXqgNcJpl1sqz2"
    })
    
    const abi = [{
        path: file,
        content: fs.readFileSync(file, { encoding: "base64" })
    }]
    
    const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });
    
    return response?.result[0].path;
}

module.exports = { ipfs_moralis };
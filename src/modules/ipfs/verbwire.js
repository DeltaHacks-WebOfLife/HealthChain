// npm install verbwire
// npm install api --save

/**
 * Uploads file to IPFS using verbwire API
 * @param {String} file Local path to file to upload
 * @returns Link of file uploaded to IPFS
 */
const ipfs_verbwire = async (file) => {
    const sdk = require('api')('@verbwire/v1.0#1cmb42lcujqu5q');
    sdk.auth('sk_live_e11bb28a-bae6-457e-a074-ec5fadf2e9ad');

    sdk.postNftStoreFile({filePath: 'screenshot.png'}, {accept: 'application/json'})
        .then(({ data }) => {
            console.log(data.ipfs_storage.ipfs_url)
            ipfs_link = data.ipfs_storage.ipfs_url;
        })
        .catch(err => console.error(err));

    return ipfs_url;
}

module.exports = { ipfs_verbwire };
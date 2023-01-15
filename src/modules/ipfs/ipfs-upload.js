const { ipfs_moralis } = require("./moralis");
const { ipfs_verbwire } = require("./verbwire");

/**
 * Checks if the client is connected to the internet or not
 * 
 * @param {String} url Test webpage
 * @returns Boolean - True if connected to the internet
 */
const isOnline = async (url) => {
    try {
        const online = await fetch(url);
        return (online.status >= 200 && online.status < 300);
    } catch (err) {
        return false;
    }
};

/**
 * 
 * @param {String} file Path to the file to upload
 * @param {String} mode Can only be "verbwire", or "moralis" to specify the API to use
 * @returns 
*/
const ipfs_upload = async (file, mode) => {
    // Return
    var ipfs_link = null;
    
    // Generate link
    if (mode === "verbwire") {
       ipfs_link = ipfs_verbwire(file);
    }
    else if (mode === "moralis") {
        ipfs_link = ipfs_moralis(file);
    }
    
    // A mode has not been specified - throw
    else {
        throw Error("Error: An API mode has not been specified");
    }

    // Test the link
    var accept = await isOnline(ipfs_link);
    
    // Link cannot be viewed; regenerate link with other API
    if (!accept) {
        if (mode === "moralis") ipfs_link = ipfs_verbwire(file);
        else ipfs_link = ipfs_moralis(file);
        
        // Run a second test - If also offline, throw error indicating that APIs are not working
        var accept = await isOnline(ipfs_link);
        if (!accept) throw Error("Error: APIs are both down. Try again later.");
    }

    return ipfs_link;
}

module.exports = { ipfs_upload };
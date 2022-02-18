module.exports = {
    validString: (str) => {
        return str != null && typeof str === "string" && str.length > 0;
    }
};
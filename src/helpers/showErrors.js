const funcs = {
    showError : (errors, field) => {
        if (errors) {
            let error = errors.find((ele, index) => { return typeof ele[field] != 'undefined' });
            if (error) { return error[field]; }
        }
        return null;
    },
    showValue : (dataPost, field, def = null) => {
        if (def != null) { return def; }
        if (dataPost && dataPost.hasOwnProperty(field)) {
            return dataPost[field];
        }
        return null;
    }
}

module.exports = funcs;
module.exports = () => {
    // Instead of printing value, it returns it
    Object.keys(global.console).forEach(mem => global.console[mem] = _ => _);
};

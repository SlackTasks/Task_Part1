function sortDesc(arg) {
    if (Array.isArray(arg)) {
        return arg.sort((a, b) => b-a);
    }
}
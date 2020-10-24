export function calculateFileName(files, name) {
    let [fileName, fileExt] = name.split(".", 2);
    let fileNameRegex = new RegExp(`${fileName}(\\([0-9]+\\))?\\.${fileExt}`);
    console.log(fileNameRegex);
    let sameNameFiles = files.filter((file) => fileNameRegex.test(file.fileName));

    return `${fileName}(${sameNameFiles.length}).${fileExt}`;
}

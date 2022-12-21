export const stripPathPrefixes = (fileName) => {
  const startIndex = fileName.lastIndexOf("/") + 1;
  const strippedFileName =
    startIndex > -1 ? fileName.substring(startIndex) : fileName;
  return strippedFileName;
};

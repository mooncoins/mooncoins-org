export const stripPathPrefixes = (fileName) => {
  if (!fileName) {
    return "";
  }

  const startIndex = fileName.lastIndexOf("/") + 1;
  const strippedFileName =
    startIndex > -1 ? fileName.substring(startIndex) : fileName;
  return strippedFileName;
};

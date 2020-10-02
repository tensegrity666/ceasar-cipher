const isCapitalized = (letter: string) => {
  if (letter.toLowerCase() === letter) {
    return false;
  }
  return true;
};

export { isCapitalized };
export const removeBearerPrefixInToken = (token) => {
    const bearerPrefix = "Bearer ";

    // Check if the token starts with the Bearer prefix
    if (token.startsWith(bearerPrefix)) {
      // Remove the Bearer prefix
      return token.substring(bearerPrefix.length);
    } else {
      // If the token does not start with the Bearer prefix, return it as is
      return token;
    }
}
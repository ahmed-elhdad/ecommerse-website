import jwt from "jsonwebtoken";
export const refreshToken = (data) => {
  const { name, email } = data;
  try {
    const token = jwt.sign(
      { name: name, email: email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return token;
  } catch (err) {
    return "feild to refresh token ";
  }
};

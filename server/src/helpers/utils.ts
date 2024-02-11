import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

// Secret key for signing the JWT
const secretKey = process.env.SECRET_KEY;
const expiresIn = '1h';

export const generateAccessToken = (user) => {
  const payload = {
    userId: user._id,
    email: user.email
  };

  return jwt.sign(payload, secretKey, { expiresIn });
};

export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Unauthorized - Access token missing' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, secretKey);

    // Attach the decoded payload to the request object
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

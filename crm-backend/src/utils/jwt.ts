import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'your_jwt_secret';

export const generateToken = (user: any) => {
    return jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, secret);
};

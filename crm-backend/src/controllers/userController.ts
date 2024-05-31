import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User as UserType } from '../types/User';
import { generateToken } from '../utils/jwt';


// Setting up the Sequelize connection
const sequelize = new Sequelize(
    process.env.DB_NAME || 'crm',
    process.env.DB_USER || 'user',
    process.env.DB_PASSWORD || 'password',
    {
        host: process.env.DB_HOST || 'db',
        port: Number(process.env.DB_PORT) || 5432,
        dialect: 'postgres',
    }
);

// Define the User model attributes
interface UserCreationAttributes extends Optional<UserType, 'id'> {}

// Extend the Sequelize Model class
class User extends Model<UserType, UserCreationAttributes> implements UserType {
    public id!: number;
    public email!: string;
    public password!: string;
    public fullName!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initialize the User model
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'User',
    }
);
export const registerUser = async (req: Request, res: Response) => {
    const { email, password, fullName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.create({ email, password: hashedPassword, fullName });
        res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({ error: 'Email already in use' });
    }
};
export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user);

    res.json({ token });
};

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.findAll({ attributes: { exclude: ['password'] } });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch users' });
    }
};
export const getProfile = async (req: Request, res: Response) => {
    const userId = (req as any).user.id;
    const user = await User.findByPk(userId);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
};

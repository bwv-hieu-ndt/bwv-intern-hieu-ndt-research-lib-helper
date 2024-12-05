import UserService from '@/service/user.service';
import { Request, Response } from 'express';

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();

    // Explicitly bind methods to ensure 'this' context
    this.createUser = this.createUser.bind(this);
    this.getAllUser = this.getAllUser.bind(this);
    this.getUserById = this.getUserById.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    const user = req.body;
    try {
      const newUser = await this.userService.createUser(user);
      res.status(201).json(newUser);
    } catch (error: any) {
      res.status(500).json({ error: `Error: ${error.message}` });
    }
  }

  public async getAllUser(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUser();
      res.status(201).json(users);
    } catch (error: any) {
      res.status(500).json({ error: `Error: ${error.message}` });
    }
  }

  public async getUserById(id: number) {
    try {
      const user = await this.userService.getUserById(id);
      return user;
    } catch (error: any) {
      throw new Error(`Error: ${error.message}`);
    }
  }

  public async deleteUser(id: number) {
    try {
      const result = await this.userService.deleteUser(id);
      return result;
    } catch (error: any) {
      throw new Error(`Error: ${error.message}`);
    }
  }
}

export default UserController;

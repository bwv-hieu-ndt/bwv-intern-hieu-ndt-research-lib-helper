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

    // Research
    this.getUserSort = this.getUserSort.bind(this);
    this.isValidUser = this.isValidUser.bind(this);
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
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);

    try {
      const users = await this.userService.getAllUser(page, pageSize);
      res.status(201).json(users);
    } catch (error: any) {
      res.status(500).json({ error: `Error: ${error.message}` });
    }
  }

  public async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await this.userService.getUserById(id);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(500).json({ error: `Error: ${error.message}` });
    }
  }

  public async deleteUser(id: number) {}

  // Lodash
  public async getUserSort(req: Request, res: Response) {
    try {
      const data = await this.userService.getUserSortByBirthDay();
      res.status(201).json(data);
    } catch (error: any) {
      res.status(500).json({ error: `Error: ${error.message}` });
    }
  }

  // Day js
  public isValidUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const valid = await this.userService.isValidUser(id);
      res.status(201).json(valid);
    } catch (error) {
      res.status(500).json({ error: `Error: ${error.message}` });
    }
  };

  //Big js
}

export default UserController;

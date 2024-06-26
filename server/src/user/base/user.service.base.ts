/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  User as PrismaUser,
  Organization as PrismaOrganization,
  Profile as PrismaProfile,
} from "@prisma/client";

import { PromoteUserArgs } from "../PromoteUserArgs";
import { PromoteUserInput } from "../PromoteUserInput";

export class UserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.UserCountArgs, "select">): Promise<number> {
    return this.prisma.user.count(args);
  }

  async users<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<PrismaUser[]> {
    return this.prisma.user.findMany<Prisma.UserFindManyArgs>(args);
  }
  async user<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
  ): Promise<PrismaUser | null> {
    return this.prisma.user.findUnique(args);
  }
  async createUser<T extends Prisma.UserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
  ): Promise<PrismaUser> {
    return this.prisma.user.create<T>(args);
  }
  async updateUser<T extends Prisma.UserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>
  ): Promise<PrismaUser> {
    return this.prisma.user.update<T>(args);
  }
  async deleteUser<T extends Prisma.UserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
  ): Promise<PrismaUser> {
    return this.prisma.user.delete(args);
  }

  async findEmployees(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<PrismaUser[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .employees(args);
  }

  async findOrganizations(
    parentId: string,
    args: Prisma.OrganizationFindManyArgs
  ): Promise<PrismaOrganization[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .organizations(args);
  }

  async getManager(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .manager();
  }

  async getProfile(parentId: string): Promise<PrismaProfile | null> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .profile();
  }
  async promoteUser(args: PromoteUserArgs): Promise<PromoteUserInput[]> {
    throw new Error("Not implemented");
  }
  async sendPasswordResetEmail(args: PromoteUserInput): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async resendInviteEmail(args: PromoteUserInput): Promise<PromoteUserInput> {
    throw new Error("Not implemented");
  }
  async softDeleteUser(args: PromoteUserInput): Promise<PromoteUserInput> {
    throw new Error("Not implemented");
  }
}

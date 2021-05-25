/*
  Warnings:

  - You are about to drop the column `emailId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `Email` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_emailId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "emailId",
ADD COLUMN     "email" TEXT NOT NULL;

-- DropTable
DROP TABLE "Email";

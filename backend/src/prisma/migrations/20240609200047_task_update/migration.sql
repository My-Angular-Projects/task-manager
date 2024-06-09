/*
  Warnings:

  - You are about to drop the column `comlete` on the `Task` table. All the data in the column will be lost.
  - Added the required column `complete` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "comlete",
ADD COLUMN     "complete" BOOLEAN NOT NULL;

/*
  Warnings:

  - You are about to drop the column `complete` on the `Task` table. All the data in the column will be lost.
  - Added the required column `completed` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "complete",
ADD COLUMN     "completed" BOOLEAN NOT NULL;

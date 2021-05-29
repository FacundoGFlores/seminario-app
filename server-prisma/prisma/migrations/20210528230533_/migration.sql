/*
  Warnings:

  - A unique constraint covering the columns `[team_id]` on the table `positions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "positions.team_id_unique" ON "positions"("team_id");

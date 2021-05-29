-- CreateTable
CREATE TABLE "positions" (
    "id" TEXT NOT NULL,
    "tournament_id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "pg" INTEGER NOT NULL,
    "pe" INTEGER NOT NULL,
    "pp" INTEGER NOT NULL,
    "gf" INTEGER NOT NULL,
    "gc" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "positions" ADD FOREIGN KEY ("tournament_id") REFERENCES "tournaments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "positions" ADD FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

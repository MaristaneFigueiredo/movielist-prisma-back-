-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-04-04 08:53:41.850676'::timestamp without time zone,
    "updateAt" TIMESTAMP(6),

    CONSTRAINT "genres_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-04-04 08:53:41.850676'::timestamp without time zone,
    "updateAt" TIMESTAMP(6),
    "plataformId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,
    "whatched" BOOLEAN DEFAULT false,

    CONSTRAINT "movies_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plataforms" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-04-04 08:53:41.850676'::timestamp without time zone,
    "updateAt" TIMESTAMP(6),

    CONSTRAINT "plataforms_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_fk0" FOREIGN KEY ("plataformId") REFERENCES "plataforms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_fk1" FOREIGN KEY ("genreId") REFERENCES "genres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

CREATE TABLE "movies" (
	"id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"watched" boolean NOT NULL DEFAULT false,
	"createdAt" TIMESTAMP NOT NULL DEFAULT 'now()',
	"updateAt" TIMESTAMP,
	"plataformId" integer NOT NULL,
	"genreId" integer NOT NULL,
	CONSTRAINT "movies_pk" PRIMARY KEY ("id")
) ;



CREATE TABLE "plataforms" (
	"id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT 'now()',
	"updateAt" TIMESTAMP,
	CONSTRAINT "plataforms_pk" PRIMARY KEY ("id")
) ;



CREATE TABLE "genres" (
	"id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT 'now()',
	"updateAt" TIMESTAMP,
	CONSTRAINT "genres_pk" PRIMARY KEY ("id")
) ;



ALTER TABLE "movies" ADD CONSTRAINT "movies_fk0" FOREIGN KEY ("plataformId") REFERENCES "plataforms"("id");
ALTER TABLE "movies" ADD CONSTRAINT "movies_fk1" FOREIGN KEY ("genreId") REFERENCES "genres"("id");







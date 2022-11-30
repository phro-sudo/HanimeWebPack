-- Adminer 4.8.1 PostgreSQL 15.1 (Debian 15.1-1.pgdg110+1) dump

DROP TABLE IF EXISTS "People";
CREATE TABLE "public"."People" (
    "ID" integer DEFAULT GENERATED ALWAYS AS IDENTITY NOT NULL,
    "Name" text NOT NULL,
    "B" integer NOT NULL,
    "W" integer NOT NULL,
    "H" integer NOT NULL,
    "Age" integer NOT NULL,
    "Birthdate" date NOT NULL,
    "image_url" text NOT NULL,
    "height" integer NOT NULL,
    "weight" integer NOT NULL,
    CONSTRAINT "People_pkey" PRIMARY KEY ("ID")
) WITH (oids = false);

INSERT INTO "People" ("ID", "Name", "B", "W", "H", "Age", "Birthdate", "image_url", "height", "weight") VALUES
(1,	'Name 1',	75,	50,	75,	15,	'2007-11-25',	'https://covers.openlibrary.org/b/id/240727-S.jpg',	168,	55),
(2,	'Name 2',	75,	50,	75,	15,	'2007-11-25',	'https://covers.openlibrary.org/b/id/240727-S.jpg',	168,	55),
(3,	'Name 3',	75,	50,	75,	15,	'2007-11-25',	'https://covers.openlibrary.org/b/id/240727-S.jpg',	168,	55);

-- 2022-11-30 20:45:53.768275+00
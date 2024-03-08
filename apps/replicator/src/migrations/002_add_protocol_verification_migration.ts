import { Kysely, sql } from "kysely";

// biome-ignore lint/suspicious/noExplicitAny: legacy code, avoid using ignore for new code
export const up = async (db: Kysely<any>) => {
  db.schema
    .alterTable("verifications")
    .addColumn("protocol", "integer", (col) => col.notNull())
    .execute();
};

// biome-ignore lint/suspicious/noExplicitAny: legacy code, avoid using ignore for new code
export const down = async (db: Kysely<any>) => {
  db.schema.alterTable("verifications").dropColumn("protocol").execute();
};

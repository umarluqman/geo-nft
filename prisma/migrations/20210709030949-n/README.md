# Migration `20210709030949-n`

This migration has been generated by Umar Luqman at 7/9/2021, 11:09:49 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP TYPE "TokenType"

DROP TABLE "Session"

DROP TABLE "Token"

DROP TABLE "User"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20210709030949-n
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,26 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model House { 
+  id Int @id @default(autoincrement())
+  userId String @map(name: "user_id")
+  image String
+  latitude Float
+  longitude Float
+  address String
+  price Int
+  createdAt DateTime @default(now()) @map(name: "created_at")
+  updatedAt DateTime @default(now()) @map(name: "updated_at")
+
+  @@index([userId], name: "houses.userId")
+  @@map(name: "houses")
+}
```


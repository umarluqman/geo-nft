import * as admin from "firebase-admin";
import { NextApiRequest } from "next";

const verifyIdToken = (token: string) => {
  const firebasePrivateKey: string = process.env.FIREBASE_PRIVATE_KEY ?? "";

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // privateKey: firebasePrivateKey,
        privateKey: firebasePrivateKey.replace(/\\n/g, "\n"),
      }),
    });
  }

  try {
    return admin.auth().verifyIdToken(token);
  } catch (e) {
    console.log("er", e);
    return null;
  }
};

export const loadIdToken = async (
  req: NextApiRequest
): Promise<string | null> => {
  if (!req.cookies.token) return null;

  const decoded = await verifyIdToken(req.cookies.token);

  if (!decoded) {
    return null;
  }

  return decoded.uid;
};

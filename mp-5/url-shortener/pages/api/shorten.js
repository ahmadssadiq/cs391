import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const { alias, url } = req.body;

    if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST requests allowed" });
    }

    if (!url || !alias) {
        return res.status(400).json({ error: "Alias and URL are required" });
    }

    try {
        const client = await clientPromise;
        const db = client.db("urlshortener");

        // Check if alias already exists
        const existing = await db.collection("urls").findOne({ alias });
        if (existing) {
            return res.status(409).json({ error: "Alias already in use" });
        }

        // Insert the new alias and URL
        await db.collection("urls").insertOne({ alias, url });

        // Generate the shortened URL dynamically
        const shortenedUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL || req.headers.host}/${alias}`;

        res.status(201).json({ message: "URL shortened successfully", alias, url, shortenedUrl });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}
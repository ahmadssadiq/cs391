import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const { alias } = req.query;

    try {
        const client = await clientPromise;
        const db = client.db("urlshortener");

        const link = await db.collection("urls").findOne({ alias });
        if (link) {
            res.redirect(link.url);
        } else {
            res.status(404).json({ error: "Alias not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
}
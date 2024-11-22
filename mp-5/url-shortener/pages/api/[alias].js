import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const { alias } = req.query;

    try {
        const client = await clientPromise;
        const db = client.db("urlshortener");

        const link = await db.collection("urls").findOne({ alias });
        if (link) {
            res.redirect(link.url); // Redirect to the stored URL
        } else {
            res.status(404).send("Alias not found"); // Handle alias not found
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
}
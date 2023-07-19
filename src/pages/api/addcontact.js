
export default function addContact(req, res) {
    if(req.method === 'POST') {
    const contactInfo = req?.body;

    return res.json(contactInfo);
    
    }
    return res.status(500).json({
        msg: "No content"
    })
}
import fs from "fs"
import path from "path"

function buildPath() {
  return path.join(process.cwd(), "data", "data.json")
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath)
  return JSON.parse(jsonData)
}

export default function handler(req, res) {
  const { method } = req
  const filePath = buildPath()
  const { events_categories, allEvents } = extractData(filePath)

  if(!allEvents) return res.status(404).json({
    message: "Events data not found"
  })

  if (method === "POST") {
    const { email, eventId } = req.body

    if(!email | !email.includes("@")) return res.status(422).json({message: "invalid email address"})

    const newAllEvents = allEvents.map(event => {
      if(event.id === eventId) {
        if(event.emails_registered.includes(email)) {
          res.status(409).json({message: "this email has already been registered"})
          return event
        }
        return {...event, emails_registered: [...event.emails_registered, email]
        }
      }
      return event
    })

    fs.writeFileSync(filePath, JSON.stringify({events_categories, allEvents: newAllEvents}))

    res
      .status(200)
      .json({
        message: `you has been registered successfully to ${eventId} with the email ${email}`
      })
  }
}
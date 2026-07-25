import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '50mb' }));

// Debug all API requests
app.use("/api", (req, res, next) => {
  console.log(`Debug: API request received: ${req.method} ${req.originalUrl}`);
  next();
});

async function startServer() {
  app.post("/api/send-results", async (req, res) => {
    console.log("Debug: API hit /api/send-results POST");
    console.log("Debug: Body received:", req.body);
    
    const formspreeFormId = process.env.FORMSPREE_FORM_ID;
    console.log("Debug: Formspree Form ID present:", !!formspreeFormId);
    if (!formspreeFormId) {
      return res.status(500).json({ error: "FORMSPREE_FORM_ID no está configurada." });
    }

    try {
      const { name, lastName, subject, score, totalPoints, percentage, answersSummary } = req.body;
      
      console.log("Debug: Attempting to send to Formspree...");
      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
           name,
           lastName,
           subject,
           score,
           totalPoints,
           percentage,
           answersSummary
        }),
      });

      if (!response.ok) {
         throw new Error(`Formspree error: ${response.statusText}`);
      }

      console.log("Debug: Formspree success");

      res.status(200).json({ status: "success" });
    } catch (error: any) {
      console.error("Server Error details:", error);
      res.status(500).json({ error: error.message || "Error al enviar el correo." });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

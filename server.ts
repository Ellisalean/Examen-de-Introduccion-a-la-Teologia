import express from "express";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
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

// API routes
app.post("/api/send-results", async (req, res) => {
  console.log("Debug: API hit /api/send-results POST");
  console.log("Debug: Body received:", req.body);
  
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return res.status(500).json({ error: "RESEND_API_KEY no está configurada." });
  }

  const resend = new Resend(resendApiKey);

  try {
    const { name, lastName, subject, score, totalPoints, percentage, answersSummary } = req.body;
    
    await resend.emails.send({
      from: "Examen <onboarding@resend.dev>",
      to: process.env.TEACHER_EMAIL || "tu-correo@ejemplo.com", 
      subject: `Resultados: ${subject} - ${name} ${lastName}`,
      html: `
        <h2>Resultados de Evaluación</h2>
        <p><strong>Estudiante:</strong> ${name} ${lastName}</p>
        <p><strong>Materia:</strong> ${subject}</p>
        <p><strong>Puntuación:</strong> ${score} / ${totalPoints} (${percentage}%)</p>
        <br/>
        <h3>Resumen de Respuestas:</h3>
        <pre style="white-space: pre-wrap; font-family: sans-serif;">${answersSummary}</pre>
      `,
    });

    res.status(200).json({ status: "success" });
  } catch (error: any) {
    console.error("Server Error:", error);
    res.status(500).json({ error: error.message || "Error al enviar el correo." });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

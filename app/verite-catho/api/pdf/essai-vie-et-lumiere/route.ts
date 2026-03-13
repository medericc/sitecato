import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

const isProd = process.env.VERCEL === "1";

export async function GET() {
  try {
    const browser = await puppeteer.launch(
      isProd
        ? {
            // ✅ VERCEL
            args: chromium.args,
            executablePath: await chromium.executablePath(),
            headless: true,
          }
        : {
            // ✅ LOCAL (Windows / Mac / Linux)
            headless: true,
            executablePath:
              process.platform === "win32"
                ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
                : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
          }
    );

    const page = await browser.newPage();

    await page.goto(
      isProd
        ? "https://cato-heresie.vercel.app/essai"
        : "http://localhost:3000/essai",
      {
        waitUntil: "networkidle0",
        timeout: 60_000,
      }
    );

    const pdf = await page.pdf({
      format: "A4",
      margin: {
        top: "30mm",
        bottom: "30mm",
        left: "25mm",
        right: "25mm",
      },
    });

    await browser.close();

    return new NextResponse(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=essai.pdf",
      },
    });
  } catch (err) {
    return NextResponse.json(
      {
        error: "PDF generation failed",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}

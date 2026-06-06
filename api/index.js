



// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import nodemailer from "nodemailer";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Backend server is running");
// });














// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, phone, postcode, service, message } = req.body;

//     if (!name || !phone || !postcode || !message || !email) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, email, phone number, postcode and message are required",
//       });
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.RECEIVER_EMAIL,
//       replyTo: email,
//       subject: `🚨 New Lead: ${service || "Contact Form Submission"}`,
//       html: `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>New Job Submission</title>
//           <style>
//             body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
//             table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
//             @media screen and (max-width: 600px) {
//               .email-container { width: 100% !important; max-width: 100% !important; padding: 10px !important; }
//               .content-wrapper { padding: 25px 15px !important; }
//             }
//           </style>
//         </head>
//         <body style="margin: 0; padding: 40px 10px; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
//           <div class="email-container" style="max-width: 500px; margin: 0 auto; background-color: #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4); border: 1px solid #334155;">
            
//             <div style="background: linear-gradient(135deg, #801E59 0%, #5c123f 100%); padding: 35px 20px; text-align: center;">
//               <div style="font-size: 36px; margin-bottom: 10px; color: #ffffff;">📩</div>
//               <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: -0.025em;">New Enquiry<br>Received</h1>
//             </div>

//             <div class="content-wrapper" style="padding: 30px 25px; color: #cbd5e1;">
//               <p style="margin: 0 0 10px 0; font-size: 16px; font-weight: 600; color: #ffffff;">Hello Paramit Services Team,</p>
//               <p style="margin: 0 0 25px 0; font-size: 14px; color: #94a3b8;">A new enquiry has been submitted through your website. Here are the details:</p>
              
//               <div style="background-color: #0f172a; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid #334155;">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 14px; font-weight: 500; width: 35%;">Name</td>
//                     <td style="color: #ffffff; font-size: 14px; font-weight: 600; text-align: right;">${name}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #0f172a; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid #334155;">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 14px; font-weight: 500; width: 35%;">Email</td>
//                     <td style="color: #38bdf8; font-size: 14px; font-weight: 600; text-align: right; word-break: break-all;">
//                       <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a>
//                     </td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #0f172a; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid #334155;">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 14px; font-weight: 500; width: 35%;">Postcode</td>
//                     <td style="color: #ffffff; font-size: 14px; font-weight: 600; text-align: right; text-transform: uppercase;">${postcode}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #0f172a; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid #334155;">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 14px; font-weight: 500; width: 35%;">Phone Number</td>
//                     <td style="color: #ffffff; font-size: 14px; font-weight: 600; text-align: right;">
//                       <a href="tel:${phone}" style="color: #ffffff; text-decoration: none;">${phone}</a>
//                     </td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #0f172a; padding: 14px 18px; margin-bottom: 24px; border-radius: 6px; border: 1px solid #334155;">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 14px; font-weight: 500; width: 35%;">Service</td>
//                     <td style="color: #34d399; font-size: 14px; font-weight: 700; text-align: right;">${service || "Not selected"}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="margin-top: 20px;">
//                 <h4 style="margin: 0 0 10px 0; font-size: 12px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">Message Details</h4>
//                 <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #cbd5e1; font-style: italic;">
//                   "${message}"
//                 </div>
//               </div>

//               <p style="margin: 30px 0 0 0; font-size: 13px; color: #64748b; font-style: italic; text-align: center;">Please review and respond to this lead as soon as possible.</p>
//             </div>

//             <div style="padding: 20px; background-color: #0f172a; text-align: center; border-top: 1px solid #334155;">
//               <p style="margin: 0; font-size: 11px; color: #475569;">Automated notification system for Paramit Services.</p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Message sent successfully",
//     });
//   } catch (error) {
//     console.error("Email Error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Email sending failed",
//     });
//   }
// });

// app.post("/api/callback", async (req, res) => {
//   try {
//     const { name, postcode, phone } = req.body;

//     if (!name || !postcode || !phone) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, postcode, and phone number are required for call back",
//       });
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.RECEIVER_EMAIL,
//       subject: `📞 Quick Call Back Request from ${name}`,
//       html: `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Call Back Requested</title>
//           <style>
//             body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
//             table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
//             @media screen and (max-width: 600px) {
//               .email-container { width: 100% !important; max-width: 100% !important; padding: 10px !important; }
//               .content-wrapper { padding: 25px 15px !important; }
//             }
//           </style>
//         </head>
//         <body style="margin: 0; padding: 40px 10px; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
//           <div class="email-container" style="max-width: 500px; margin: 0 auto; background-color: #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4); border: 1px solid #334155;">
            
//             <div style="background: linear-gradient(135deg, #801E59 0%, #5c123f 100%); padding: 35px 20px; text-align: center;">
//               <div style="font-size: 36px; margin-bottom: 10px; color: #ffffff;">📞</div>
//               <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: -0.025em;">Call Back<br>Requested</h1>
//             </div>

//             <div class="content-wrapper" style="padding: 30px 25px; color: #cbd5e1;">
//               <p style="margin: 0 0 10px 0; font-size: 16px; font-weight: 600; color: #ffffff;">Hello Paramit Services Team,</p>
//               <p style="margin: 0 0 25px 0; font-size: 14px; color: #94a3b8;">A user requested an immediate call back through the Home Page. Here are the details:</p>
              
//               <div style="background-color: #0f172a; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid #334155;">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 14px; font-weight: 500; width: 35%;">Name</td>
//                     <td style="color: #ffffff; font-size: 14px; font-weight: 600; text-align: right;">${name}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #0f172a; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid #334155;">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 14px; font-weight: 500; width: 35%;">Postcode</td>
//                     <td style="color: #ffffff; font-size: 14px; font-weight: 600; text-align: right; text-transform: uppercase;">${postcode}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #0f172a; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid #334155;">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 14px; font-weight: 500; width: 35%;">Phone Number</td>
//                     <td style="color: #38bdf8; font-size: 14px; font-weight: 600; text-align: right;">
//                       <a href="tel:${phone}" style="color: #38bdf8; text-decoration: none;">${phone}</a>
//                     </td>
//                   </tr>
//                 </table>
//               </div>
              
//               <p style="margin: 30px 0 0 0; font-size: 13px; color: #64748b; font-style: italic; text-align: center;">Please respond to this call back request within 1 hour.</p>
//             </div>

//             <div style="padding: 15px; background-color: #0f172a; text-align: center; border-top: 1px solid #334155;">
//               <p style="margin: 0; font-size: 11px; color: #475569;">Automated call-back system for Paramit Services.</p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     });

//     res.status(200).json({ success: true, message: "Call back request sent successfully!" });
//   } catch (error) {
//     console.error("Callback Email Error:", error);
//     res.status(500).json({ success: false, message: "Email sending failed" });
//   }
// });









// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



// export default app;


















// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import nodemailer from "nodemailer";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("SafeSphere Backend Server is running");
// });

// // 🚨 1. MAIN CONTACT & JOB SUBMISSION ENQUIRY ENDPOINT
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, phone, postcode, service, message } = req.body;

//     if (!name || !phone || !postcode || !message || !email) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, email, phone number, postcode and message are required",
//       });
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.RECEIVER_EMAIL,
//       replyTo: email,
//       subject: `🚨 New Lead: ${service || "Contact Form Submission"}`,
//       html: `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>New Job Submission</title>
//           <style>
//             body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
//             table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
//             @media screen and (max-width: 600px) {
//               .email-container { width: 100% !important; max-width: 100% !important; padding: 10px !important; }
//               .content-wrapper { padding: 25px 15px !important; }
//             }
//           </style>
//         </head>
//         <body style="margin: 0; padding: 40px 10px; background-color: #071827; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
//           <div class="email-container" style="max-width: 500px; margin: 0 auto; background-color: #0f2133; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5); border: 1px solid rgba(0, 148, 148, 0.2);">
            
//             {/* Header with Brand Brand Accent Teal */}
//             <div style="background: linear-gradient(135deg, #009494 0%, #005c5c 100%); padding: 35px 20px; text-align: center; border-b: 2px solid #DFA119;">
//               <div style="font-size: 36px; margin-bottom: 10px; color: #ffffff;">📩</div>
//               <h1 style="margin: 0; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: -0.025em; text-transform: uppercase;">New Enquiry<br>Received</h1>
//             </div>

//             <div class="content-wrapper" style="padding: 30px 25px; color: #cbd5e1;">
//               <p style="margin: 0 0 10px 0; font-size: 15px; font-weight: 700; color: #ffffff;">Hello SafeSphere Services Team,</p>
//               <p style="margin: 0 0 25px 0; font-size: 13px; color: #94a3b8;">A new layout enquiry has been submitted through your website. Here are the details:</p>
              
//               <div style="background-color: #071827; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(0, 148, 148, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Name</td>
//                     <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right;">${name}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #071827; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(0, 148, 148, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Email</td>
//                     <td style="color: #009494; font-size: 13px; font-weight: 700; text-align: right; word-break: break-all;">
//                       <a href="mailto:${email}" style="color: #009494; text-decoration: none;">${email}</a>
//                     </td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #071827; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(0, 148, 148, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Postcode</td>
//                     <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right; text-transform: uppercase;">${postcode}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #071827; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(0, 148, 148, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Phone Number</td>
//                     <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right;">
//                       <a href="tel:${phone}" style="color: #ffffff; text-decoration: none;">${phone}</a>
//                     </td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #071827; padding: 14px 18px; margin-bottom: 24px; border-radius: 6px; border: 1px solid rgba(0, 148, 148, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Service</td>
//                     <td style="color: #DFA119; font-size: 13px; font-weight: 900; text-align: right; text-transform: uppercase;">${service || "Not selected"}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="margin-top: 20px;">
//                 <h4 style="margin: 0 0 10px 0; font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">Message Details</h4>
//                 <div style="background-color: #071827; border: 1px solid rgba(0, 148, 148, 0.15); border-radius: 8px; padding: 16px; font-size: 13px; line-height: 1.6; color: #cbd5e1; font-style: italic;">
//                   "${message}"
//                 </div>
//               </div>

//               <p style="margin: 30px 0 0 0; font-size: 12px; color: #64748b; font-style: italic; text-align: center;">Please review and respond to this active lead sequence as soon as possible.</p>
//             </div>

//             <div style="padding: 20px; background-color: #071827; text-align: center; border-top: 1px solid rgba(0, 148, 148, 0.15);">
//               <p style="margin: 0; font-size: 10px; color: #475569;">Automated secure notification system for SafeSphere Services.</p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Message sent successfully",
//     });
//   } catch (error) {
//     console.error("Email Error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Email sending failed",
//     });
//   }
// });

// // 📞 2. QUICK CALLBACK ENDPOINT (HOME PAGE SHORT FORM)
// app.post("/api/callback", async (req, res) => {
//   try {
//     const { name, postcode, phone } = req.body;

//     if (!name || !postcode || !phone) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, postcode, and phone number are required for call back",
//       });
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.RECEIVER_EMAIL,
//       subject: `📞 Quick Call Back Request from ${name}`,
//       html: `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Call Back Requested</title>
//           <style>
//             body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
//             table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
//             @media screen and (max-width: 600px) {
//               .email-container { width: 100% !important; max-width: 100% !important; padding: 10px !important; }
//               .content-wrapper { padding: 25px 15px !important; }
//             }
//           </style>
//         </head>
//         <body style="margin: 0; padding: 40px 10px; background-color: #071827; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
//           <div class="email-container" style="max-width: 500px; margin: 0 auto; background-color: #0f2133; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5); border: 1px solid rgba(0, 148, 148, 0.2);">
            
//             {/* Header with Accent Gold */}
//             <div style="background: linear-gradient(135deg, #DFA119 0%, #a6740b 100%); padding: 35px 20px; text-align: center; border-b: 2px solid #009494;">
//               <div style="font-size: 36px; margin-bottom: 10px; color: #ffffff;">📞</div>
//               <h1 style="margin: 0; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: -0.025em; text-transform: uppercase;">Call Back<br>Requested</h1>
//             </div>

//             <div class="content-wrapper" style="padding: 30px 25px; color: #cbd5e1;">
//               <p style="margin: 0 0 10px 0; font-size: 15px; font-weight: 700; color: #ffffff;">Hello SafeSphere Services Team,</p>
//               <p style="margin: 0 0 25px 0; font-size: 13px; color: #94a3b8;">A user requested an immediate callback target through the Home Page layout. Here are the details:</p>
              
//               <div style="background-color: #071827; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(0, 148, 148, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Name</td>
//                     <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right;">${name}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #071827; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(0, 148, 148, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Postcode</td>
//                     <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right; text-transform: uppercase;">${postcode}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #071827; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(0, 148, 148, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Phone Number</td>
//                     <td style="color: #009494; font-size: 13px; font-weight: 700; text-align: right;">
//                       <a href="tel:${phone}" style="color: #009494; text-decoration: none;">${phone}</a>
//                     </td>
//                   </tr>
//                 </table>
//               </div>
              
//               <p style="margin: 30px 0 0 0; font-size: 12px; color: #64748b; font-style: italic; text-align: center;">Please respond to this call back verification layout request within 1 hour.</p>
//             </div>

//             <div style="padding: 15px; background-color: #071827; text-align: center; border-top: 1px solid rgba(0, 148, 148, 0.15);">
//               <p style="margin: 0; font-size: 10px; color: #475569;">Automated call-back allocation framework for SafeSphere Services.</p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     });

//     res.status(200).json({ success: true, message: "Call back request sent successfully!" });
//   } catch (error) {
//     console.error("Callback Email Error:", error);
//     res.status(500).json({ success: false, message: "Email sending failed" });
//   }
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// export default app;














// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import nodemailer from "nodemailer";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("SafeSphere Backend Server is running");
// });

// // 🚨 1. MAIN CONTACT & JOB SUBMISSION ENQUIRY ENDPOINT
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, phone, postcode, service, message } = req.body;

//     if (!name || !phone || !postcode || !message || !email) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, email, phone number, postcode and message are required",
//       });
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       // 1. Sender name set kiya takay popup notification mein company ka naam show ho 👇
//       from: `"SafeSphere Services" <${process.env.EMAIL_USER}>`,
//       to: process.env.RECEIVER_EMAIL,
//       replyTo: email,
//       // 2. Subject line ke start mein [SafeSphere] prefix laga diya takay inbox mein bina kholi pta lag jaye 👇
//       subject: `[SafeSphere] 🚨 New Lead: ${service || "Contact Form Submission"}`,
//       html: `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>New Job Submission</title>
//           <style>
//             body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
//             table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
//             @media screen and (max-width: 600px) {
//               .email-container { width: 100% !important; max-width: 100% !important; padding: 10px !important; }
//               .content-wrapper { padding: 25px 15px !important; }
//             }
//           </style>
//         </head>
//         <body style="margin: 0; padding: 40px 10px; background-color: #071827; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
//           <div class="email-container" style="max-width: 500px; margin: 0 auto; background-color: #0f2133; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5); border: 1px solid rgba(0, 148, 148, 0.2);">
            
//             <div style="background: linear-gradient(135deg, #009494 0%, #005c5c 100%); padding: 35px 20px; text-align: center; border-b: 2px solid #DFA119;">
//               <div style="font-size: 36px; margin-bottom: 10px; color: #ffffff;">📩</div>
//               <h1 style="margin: 0; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: -0.025em; text-transform: uppercase;">New Enquiry<br>Received</h1>
//             </div>

//             <div class="content-wrapper" style="padding: 30px 25px; color: #cbd5e1;">
//               <p style="margin: 0 0 10px 0; font-size: 15px; font-weight: 700; color: #ffffff;">Hello SafeSphere Services Team,</p>
//               <p style="margin: 0 0 25px 0; font-size: 13px; color: #94a3b8;">A new layout enquiry has been submitted through your website. Here are the details:</p>
              
//               <div style="background-color: #071827; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(0, 148, 148, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Name</td>
//                     <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right;">${name}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #071827; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(0, 148, 148, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Email</td>
//                     <td style="color: #009494; font-size: 13px; font-weight: 700; text-align: right; word-break: break-all;">
//                       <a href="mailto:${email}" style="color: #009494; text-decoration: none;">${email}</a>
//                     </td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #071827; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(0, 148, 148, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Postcode</td>
//                     <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right; text-transform: uppercase;">${postcode}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #071827; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(0, 148, 148, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Phone Number</td>
//                     <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right;">
//                       <a href="tel:${phone}" style="color: #ffffff; text-decoration: none;">${phone}</a>
//                     </td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #071827; padding: 14px 18px; margin-bottom: 24px; border-radius: 6px; border: 1px solid rgba(0, 148, 148, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Service</td>
//                     <td style="color: #DFA119; font-size: 13px; font-weight: 900; text-align: right; text-transform: uppercase;">${service || "Not selected"}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="margin-top: 20px;">
//                 <h4 style="margin: 0 0 10px 0; font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">Message Details</h4>
//                 <div style="background-color: #071827; border: 1px solid rgba(0, 148, 148, 0.15); border-radius: 8px; padding: 16px; font-size: 13px; line-height: 1.6; color: #cbd5e1; font-style: italic;">
//                   "${message}"
//                 </div>
//               </div>

//               <p style="margin: 30px 0 0 0; font-size: 12px; color: #64748b; font-style: italic; text-align: center;">Please review and respond to this active lead sequence as soon as possible.</p>
//             </div>

//             <div style="padding: 20px; background-color: #071827; text-align: center; border-top: 1px solid rgba(0, 148, 148, 0.15);">
//               <p style="margin: 0; font-size: 10px; color: #475569;">Automated secure notification system for SafeSphere Services.</p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Message sent successfully",
//     });
//   } catch (error) {
//     console.error("Email Error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Email sending failed",
//     });
//   }
// });

// // 📞 2. QUICK CALLBACK ENDPOINT (HOME PAGE SHORT FORM)
// app.post("/api/callback", async (req, res) => {
//   try {
//     const { name, postcode, phone } = req.body;

//     if (!name || !postcode || !phone) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, postcode, and phone number are required for call back",
//       });
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       // 1. Yahan bhi Sender name fix kar diya SafeSphere ke liye 👇
//       from: `"SafeSphere Services" <${process.env.EMAIL_USER}>`,
//       to: process.env.RECEIVER_EMAIL,
//       // 2. Subject ke start mein [SafeSphere Callback] clear likh diya 👇
//       subject: `[SafeSphere Callback] 📞 Quick Request from ${name}`,
//       html: `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Call Back Requested</title>
//           <style>
//             body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
//             table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
//             @media screen and (max-width: 600px) {
//               .email-container { width: 100% !important; max-width: 100% !important; padding: 10px !important; }
//               .content-wrapper { padding: 25px 15px !important; }
//             }
//           </style>
//         </head>
//         <body style="margin: 0; padding: 40px 10px; background-color: #071827; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
//           <div class="email-container" style="max-width: 500px; margin: 0 auto; background-color: #0f2133; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5); border: 1px solid rgba(0, 148, 148, 0.2);">
            
//             <div style="background: linear-gradient(135deg, #DFA119 0%, #a6740b 100%); padding: 35px 20px; text-align: center; border-b: 2px solid #009494;">
//               <div style="font-size: 36px; margin-bottom: 10px; color: #ffffff;">📞</div>
//               <h1 style="margin: 0; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: -0.025em; text-transform: uppercase;">Call Back<br>Requested</h1>
//             </div>

//             <div class="content-wrapper" style="padding: 30px 25px; color: #cbd5e1;">
//               <p style="margin: 0 0 10px 0; font-size: 15px; font-weight: 700; color: #ffffff;">Hello SafeSphere Services Team,</p>
//               <p style="margin: 0 0 25px 0; font-size: 13px; color: #94a3b8;">A user requested an immediate callback target through the Home Page layout. Here are the details:</p>
              
//               <div style="background-color: #071827; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(0, 148, 148, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Name</td>
//                     <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right;">${name}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #071827; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(0, 148, 148, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Postcode</td>
//                     <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right; text-transform: uppercase;">${postcode}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #071827; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(0, 148, 148, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Phone Number</td>
//                     <td style="color: #009494; font-size: 13px; font-weight: 700; text-align: right;">
//                       <a href="tel:${phone}" style="color: #009494; text-decoration: none;">${phone}</a>
//                     </td>
//                   </tr>
//                 </table>
//               </div>
              
//               <p style="margin: 30px 0 0 0; font-size: 12px; color: #64748b; font-style: italic; text-align: center;">Please respond to this call back verification layout request within 1 hour.</p>
//             </div>

//             <div style="padding: 15px; background-color: #071827; text-align: center; border-top: 1px solid rgba(0, 148, 148, 0.15);">
//               <p style="margin: 0; font-size: 10px; color: #475569;">Automated call-back allocation framework for SafeSphere Services.</p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     });

//     res.status(200).json({ success: true, message: "Call back request sent successfully!" });
//   } catch (error) {
//     console.error("Callback Email Error:", error);
//     res.status(500).json({ success: false, message: "Email sending failed" });
//   }
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// export default app;
















import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ironforce Pest Control Backend Server is running");
});

// 🚨 1. MAIN CONTACT & JOB SUBMISSION ENQUIRY ENDPOINT
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, postcode, service, message } = req.body;

    if (!name || !phone || !postcode || !message || !email) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone number, postcode and message are required",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      // Brand Name changed to Ironforce Pest Control 👇
      from: `"Ironforce Pest Control" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      // Subject Prefix updated for clear filter management 👇
      subject: `[Ironforce Lead] 🚨 New Job: ${service || "Contact Form Submission"}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Job Submission</title>
          <style>
            body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
            table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
            @media screen and (max-width: 600px) {
              .email-container { width: 100% !important; max-width: 100% !important; padding: 10px !important; }
              .content-wrapper { padding: 25px 15px !important; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 40px 10px; background-color: #131E29; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <div class="email-container" style="max-width: 500px; margin: 0 auto; background-color: #1c2a38; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5); border: 1px solid rgba(238, 96, 2, 0.2);">
            
            <div style="background: linear-gradient(135deg, #EE6002 0%, #b84a02 100%); padding: 35px 20px; text-align: center; border-b: 2px solid #ffffff;">
              <div style="font-size: 36px; margin-bottom: 10px; color: #ffffff;">📩</div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: -0.025em; text-transform: uppercase;">New Enquiry<br>Received</h1>
            </div>

            <div class="content-wrapper" style="padding: 30px 25px; color: #cbd5e1;">
              <p style="margin: 0 0 10px 0; font-size: 15px; font-weight: 700; color: #ffffff;">Hello Ironforce Team,</p>
              <p style="margin: 0 0 25px 0; font-size: 13px; color: #94a3b8;">A new inbound lead has been submitted through the website. Here are the customer details:</p>
              
              <div style="background-color: #131E29; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(238, 96, 2, 0.15);">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Name</td>
                    <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right;">${name}</td>
                  </tr>
                </table>
              </div>

              <div style="background-color: #131E29; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(238, 96, 2, 0.15);">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Email</td>
                    <td style="color: #EE6002; font-size: 13px; font-weight: 700; text-align: right; word-break: break-all;">
                      <a href="mailto:${email}" style="color: #EE6002; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                </table>
              </div>

              <div style="background-color: #131E29; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(238, 96, 2, 0.15);">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Postcode</td>
                    <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right; text-transform: uppercase;">${postcode}</td>
                  </tr>
                </table>
              </div>

              <div style="background-color: #131E29; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(238, 96, 2, 0.15);">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Phone Number</td>
                    <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right;">
                      <a href="tel:${phone}" style="color: #ffffff; text-decoration: none;">${phone}</a>
                    </td>
                  </tr>
                </table>
              </div>

              <div style="background-color: #131E29; padding: 14px 18px; margin-bottom: 24px; border-radius: 6px; border: 1px solid rgba(238, 96, 2, 0.15);">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Requested Service</td>
                    <td style="color: #EE6002; font-size: 13px; font-weight: 900; text-align: right; text-transform: uppercase;">${service || "Not selected"}</td>
                  </tr>
                </table>
              </div>

              <div style="margin-top: 20px;">
                <h4 style="margin: 0 0 10px 0; font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">Message Details</h4>
                <div style="background-color: #131E29; border: 1px solid rgba(238, 96, 2, 0.15); border-radius: 8px; padding: 16px; font-size: 13px; line-height: 1.6; color: #cbd5e1; font-style: italic;">
                  "${message}"
                </div>
              </div>

              <p style="margin: 30px 0 0 0; font-size: 12px; color: #64748b; font-style: italic; text-align: center;">Please review and follow up with this active lead sequence as soon as possible.</p>
            </div>

            <div style="padding: 20px; background-color: #131E29; text-align: center; border-top: 1px solid rgba(238, 96, 2, 0.15);">
              <p style="margin: 0; font-size: 10px; color: #475569;">Automated secure notification system for Ironforce Pest Control.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});

// 📞 2. QUICK CALLBACK ENDPOINT (HOME PAGE SHORT FORM)
app.post("/api/callback", async (req, res) => {
  try {
    const { name, postcode, phone } = req.body;

    if (!name || !postcode || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, postcode, and phone number are required for call back",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Ironforce Pest Control" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `[Ironforce Callback] 📞 Quick Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Call Back Requested</title>
          <style>
            body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
            table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
            @media screen and (max-width: 600px) {
              .email-container { width: 100% !important; max-width: 100% !important; padding: 10px !important; }
              .content-wrapper { padding: 25px 15px !important; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 40px 10px; background-color: #131E29; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <div class="email-container" style="max-width: 500px; margin: 0 auto; background-color: #1c2a38; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5); border: 1px solid rgba(238, 96, 2, 0.2);">
            
            <div style="background: #1c2a38; padding: 35px 20px; text-align: center; border-b: 2px solid #EE6002;">
              <div style="font-size: 36px; margin-bottom: 10px; color: #ffffff;">📞</div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: -0.025em; text-transform: uppercase;">Call Back<br>Requested</h1>
            </div>

            <div class="content-wrapper" style="padding: 30px 25px; color: #cbd5e1;">
              <p style="margin: 0 0 10px 0; font-size: 15px; font-weight: 700; color: #ffffff;">Hello Ironforce Team,</p>
              <p style="margin: 0 0 25px 0; font-size: 13px; color: #94a3b8;">A user requested an immediate callback response via the Home Page layout form. Details below:</p>
              
              <div style="background-color: #131E29; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(238, 96, 2, 0.15);">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Name</td>
                    <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right;">${name}</td>
                  </tr>
                </table>
              </div>

              <div style="background-color: #131E29; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(238, 96, 2, 0.15);">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Postcode</td>
                    <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right; text-transform: uppercase;">${postcode}</td>
                  </tr>
                </table>
              </div>

              <div style="background-color: #131E29; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(238, 96, 2, 0.15);">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Phone Number</td>
                    <td style="color: #EE6002; font-size: 13px; font-weight: 700; text-align: right;">
                      <a href="tel:${phone}" style="color: #EE6002; text-decoration: none;">${phone}</a>
                    </td>
                  </tr>
                </table>
              </div>
              
              <p style="margin: 30px 0 0 0; font-size: 12px; color: #64748b; font-style: italic; text-align: center;">Please respond to this urgent hot lead layout verification within 1 hour.</p>
            </div>

            <div style="padding: 15px; background-color: #131E29; text-align: center; border-top: 1px solid rgba(238, 96, 2, 0.15);">
              <p style="margin: 0; font-size: 10px; color: #475569;">Automated lead routing framework for Ironforce Pest Control.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    res.status(200).json({ success: true, message: "Call back request sent successfully!" });
  } catch (error) {
    console.error("Callback Email Error:", error);
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
});

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

export default app;
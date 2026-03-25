export const generateCVPDF = async () => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: Arial, sans-serif; color: #333; line-height: 1.4; padding: 20px; }
            .header { text-align: center; margin-bottom: 20px; border-bottom: 2px solid #333; padding-bottom: 15px; }
            h1 { font-size: 28px; margin-bottom: 5px; }
            .subtitle { font-size: 14px; color: #666; margin-bottom: 10px; }
            .contact { font-size: 12px; color: #666; }
            .section { margin-top: 15px; }
            .section-title { font-size: 14px; font-weight: bold; background: #e8e8e8; padding: 5px 8px; margin-bottom: 10px; }
            .entry { margin-bottom: 12px; }
            .entry-title { font-weight: bold; font-size: 13px; }
            .entry-subtitle { color: #666; font-size: 12px; }
            .entry-date { color: #999; font-size: 11px; }
            .entry-desc { color: #555; font-size: 12px; margin-top: 3px; }
            ul { margin-left: 20px; font-size: 12px; }
            li { margin-bottom: 3px; }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>MOHAMMED DJOUMI</h1>
            <div class="subtitle">STUDENT</div>
            <div class="contact">
                +213 795 690 972 | djomimohamed733@gmail.com<br>
                Ksar Sidi Boutkhil, Aïn Sefra, Naama, Algeria
            </div>
        </div>

        <div class="section">
            <div class="section-title">ABOUT</div>
            <div class="entry-desc">Motivated and disciplined student with a strong academic background in experimental sciences. Developed solid skills in mathematics, physics, and scientific analysis. Eager to pursue higher education in an international environment.</div>
        </div>

        <div class="section">
            <div class="section-title">EDUCATION</div>
            <div class="entry">
                <div class="entry-title">Bachelor of Experimental Sciences</div>
                <div class="entry-subtitle">High School of Statistics and Applied Economics</div>
                <div class="entry-date">2025 - 2026</div>
                <div class="entry-desc">Final Grade: 15.01 / 20 | Focus: Mathematics, Physics, Natural Sciences</div>
            </div>
            <div class="entry">
                <div class="entry-title">Secondary School Diploma</div>
                <div class="entry-subtitle">Martyrs of Dzira Detention Camp High School</div>
                <div class="entry-date">2022 - 2024</div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">EXPERIENCE</div>
            <div class="entry">
                <div class="entry-title">CV MAKING Workshop</div>
                <div class="entry-subtitle">Arvea</div>
                <div class="entry-date">24 October 2024 - Present</div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">SKILLS</div>
            <ul>
                <li>Analytical thinking</li>
                <li>Problem solving</li>
                <li>Basic computer skills (Word, Excel, Internet)</li>
                <li>Adaptability and teamwork</li>
                <li>Motivation to learn and study abroad</li>
            </ul>
        </div>

        <div class="section">
            <div class="section-title">LANGUAGES</div>
            <ul>
                <li>English</li>
                <li>Arabic (Native)</li>
                <li>French</li>
            </ul>
        </div>
    </body>
    </html>
  `;

  const element = document.createElement('iframe');
  element.srcdoc = html;
  element.style.display = 'none';
  document.body.appendChild(element);

  setTimeout(() => {
    element.contentWindow?.print();
    document.body.removeChild(element);
  }, 250);
};

export const downloadCV = () => {
  const link = document.createElement('a');
  link.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Mohammed Djoumi - CV</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: Arial, sans-serif; color: #333; line-height: 1.4; }
            .page { width: 210mm; height: 297mm; padding: 20mm; background: white; margin: 0 auto; }
            .header { text-align: center; margin-bottom: 20px; border-bottom: 2px solid #334155; padding-bottom: 15px; }
            h1 { font-size: 28px; margin-bottom: 5px; color: #1e293b; }
            .subtitle { font-size: 14px; color: #64748b; margin-bottom: 10px; }
            .contact { font-size: 12px; color: #475569; }
            .section { margin-top: 15px; }
            .section-title { font-size: 14px; font-weight: bold; background: #e2e8f0; padding: 8px 10px; margin-bottom: 10px; border-left: 3px solid #334155; }
            .entry { margin-bottom: 12px; }
            .entry-title { font-weight: bold; font-size: 13px; color: #1e293b; }
            .entry-subtitle { color: #64748b; font-size: 12px; }
            .entry-date { color: #94a3b8; font-size: 11px; }
            .entry-desc { color: #475569; font-size: 12px; margin-top: 3px; }
            ul { margin-left: 20px; font-size: 12px; }
            li { margin-bottom: 3px; color: #475569; }
        </style>
    </head>
    <body>
        <div class="page">
            <div class="header">
                <h1>MOHAMMED DJOUMI</h1>
                <div class="subtitle">STUDENT</div>
                <div class="contact">
                    +213 795 690 972 | djomimohamed733@gmail.com<br>
                    Ksar Sidi Boutkhil, Aïn Sefra, Naama, Algeria
                </div>
            </div>

            <div class="section">
                <div class="section-title">ABOUT</div>
                <div class="entry-desc">Motivated and disciplined student with a strong academic background in experimental sciences. Developed solid skills in mathematics, physics, and scientific analysis.</div>
            </div>

            <div class="section">
                <div class="section-title">EDUCATION</div>
                <div class="entry">
                    <div class="entry-title">Bachelor of Experimental Sciences</div>
                    <div class="entry-subtitle">High School of Statistics and Applied Economics</div>
                    <div class="entry-date">2025 - 2026</div>
                    <div class="entry-desc">Final Grade: 15.01 / 20 | Mathematics, Physics, Natural Sciences</div>
                </div>
                <div class="entry">
                    <div class="entry-title">Secondary School Diploma</div>
                    <div class="entry-subtitle">Martyrs of Dzira Detention Camp High School</div>
                    <div class="entry-date">2022 - 2024</div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">EXPERIENCE</div>
                <div class="entry">
                    <div class="entry-title">CV MAKING Workshop</div>
                    <div class="entry-subtitle">Arvea</div>
                    <div class="entry-date">24 October 2024 - Present</div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">SKILLS</div>
                <ul>
                    <li>Analytical thinking</li>
                    <li>Problem solving</li>
                    <li>Basic computer skills (Word, Excel, Internet)</li>
                    <li>Adaptability and teamwork</li>
                    <li>Motivation to learn and study abroad</li>
                </ul>
            </div>

            <div class="section">
                <div class="section-title">LANGUAGES</div>
                <ul>
                    <li>English</li>
                    <li>Arabic (Native)</li>
                    <li>French</li>
                </ul>
            </div>
        </div>
    </body>
    </html>
  `);
  link.download = 'Mohammed_Djoumi_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
